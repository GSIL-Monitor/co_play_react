/**
 * Author : yingu
 * Date : 16/6/13
 * Description :
 */

let service = {
    get : function( url , params ){
        return this.ajax( url , 'json' , 'get' , params );
    },
    post : function( url , params ){
        return this.ajax( url , 'json' , 'post' , params );
    },
    getJSONP : function( url , params ){
        return this.ajax( url , 'jsonp' , 'get' , params );
    },
    getScript : function( url , params ){
        return this.ajax( url , 'script' , 'get' , params );
    },
    ajax : function( url , dataType , type , params ){

        if( type !== 'post' && !/\?/.test(url) ){
            url = url + '?';
        }else if( !dataType && type !== 'post' ){
            dataType = 'json'
        }

        if( !dataType || ( dataType === 'jsonp' && !/[\?|&]\w+=\?/.test( url ) ) ){
            url += 'callback=?';
        }

        return $.ajax({
            url : url,
            type : type || 'get',
            dataType : dataType || 'jsonp',
            data : params
        });
    }
};

module.exports = service;