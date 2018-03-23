/**
 * Author : yingu
 * Date : 16/6/15
 * Description :
 *
 * 一些通用的mixin
 */
import message from '@mogu/up-components/lib/message';

const BaseMixin = {
    reload( desc = '保存' , callback ){
        callback && callback.call(this);
        message.success(`${ desc }成功,页面即将刷新.` , 1);

        if( this.reloadTimer ){
            window.clearTimeout( this.reloadTimer );
        }

        this.reloadTimer = setTimeout( ()=> {
            window.location.reload();
        }, 500 );
    },
    redirect( desc = '保存' , url , callback ){
        callback && callback.call(this);
        message.success(`${ desc }成功,页面即将跳转.` , 1);

        if( this.reloadTimer ){
            window.clearTimeout( this.reloadTimer );
        }

        this.reloadTimer = setTimeout( ()=> {
            window.location = url;
        }, 800 );
    }
};

export default BaseMixin;