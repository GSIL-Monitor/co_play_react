/**
 * Author : yingu
 * Date : 16/6/12
 * Description : 表格通用mixin
 *
 * function handleEnter 是支持搜索时enter键
 * function getColumns 将用户定义的表头转换为Table组件能识别的表头,该方法可选.
 *                     这个方法的存在是为了让初级用户通过简单的修改config.js文件就能配置出想要的页面,尽可能少的关注React源码文件
 */
import React from 'react';
import Icon from '@mogu/up-components/lib/Icon';

import BaseMixin from './Base.Mixin';

const TableMixin = {
    reloadTimer : null,
    handleEnter( e ){
        e = e || window.event;
        var currKey = e.keyCode || e.which || e.charCode;
        if(currKey == 13){
            this.search( e );
        }
    },
    getColumns( columns , concat ){
        if( !$.isArray( concat ) ){
            concat = [];
        }
        if( !$.isArray( columns ) ){
            return [].concat( concat );
        }

        columns.forEach( ( item ) => {
            let colType = item.type;

            if( typeof colType == 'undefined' || colType === 'raw'){//默认为文本不需要调整
                return;
            }else if( colType === 'action' ){
                item.render = function( key , record ){
                    return <a href={ key } {...item.extend} > { record[ item.valueKey || key] }</a>;
                };
            }else if( colType === 'link' ){
                if( item.icon ){
                    item.render = function( key , record ){
                        return <a href={ key } title={ record[ item.valueKey || key ] } target="_blank" {...item.extend}>
                            <label className="label label-info">
                                <Icon type={ item.icon }/>
                            </label>
                        </a>;
                    };
                }else{
                    item.render = function( key , record ){
                        return <a href={ key } target="_blank" {...item.extend}> { record[ item.valueKey || key ] }</a>;
                    };
                }
            }else if( colType === 'map' && item.map ){
                item.render = function( key , record ){
                    return item.map[ record[ item.key ] ];
                }
            }
        });

        return columns.concat( concat );
    }
};

export default Object.assign( {} , BaseMixin , TableMixin );