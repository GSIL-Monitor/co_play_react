import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/index';

import '../style/index.less';//自定义样式

$(function(){
    var root = document.getElementById('main-wrapper');

    ReactDOM.render( routes , root)
});
