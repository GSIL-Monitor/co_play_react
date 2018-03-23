/**
 * Author : ginko
 * Date : 16/2/4
 * Description :
 */

import React , { Component } from 'react';

const Page404 = React.createClass({
    render(){
        return(
            <div className="error-page text-center">
                <div id="error-box-inner">
                    
                </div>
                <h1 className="page-404">ERROR 404</h1>
                <p className="tip">
                    你好像走错路了~
                </p>
                <p className="go-back">
                    <a href="javascript:history.back();">戳下这里返回.</a>
                </p>
            </div>
        );
    }
});

module.exports = Page404;