/**
 * Author : yingu
 * Date : 16/6/12
 * Description :
 * 表单通用mixin,扩展自Base.Mixin.js
 *
 */
import React from 'react';
import BaseMixin from './Base.Mixin';

const FormMixins = {
    getOptions( optionObj , defDesc = '请选择'){
        let options = [<option key={ -1 } value="-1">{ defDesc }</option>];

        if( $.isArray( optionObj ) ){
            optionObj.forEach( ( item , index) => {
                options.push( <option key={ index } value={ item } >{ item }</option>);
            });
        }else if( $.isPlainObject( optionObj ) ){
            for( let key in optionObj ){
                if( optionObj.hasOwnProperty( key ) ){
                    options.push( <option key={ key } value={ key } >{ optionObj[key] }</option>);
                }
            }
        }

        return options;
    }
};

export default Object.assign( {} , BaseMixin , FormMixins );