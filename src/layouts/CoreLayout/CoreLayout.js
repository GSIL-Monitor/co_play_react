import React from 'react';
import fn from 'utils_path/fn';
import {tabList} from 'utils_path/constants';
import TopNav from 'views_path/modules/TopNav/index.js';
import Footer from 'views_path/modules/Footer/index';
import SideFloat from 'views_path/modules/SideFloat/index.js';
const ViewPage = React.createClass({
    getInitialState: function () {
        return {
            logo: "https://zuhaowan.zuhaowan.com/v1/images/logo.png",
            isLogin: true,
            userRel: {
                avatarUrl: "http://daofengdj.com/public/static/public/img/ico_ft02.png"
            }
           
        };
    },
    componentDidMount() {
       
    },
   
    render() {
        let { logo, isLogin, userRel } = this.state;
        return (
            <div>
                <TopNav logo={logo} tabList={tabList} isLogin={isLogin} userRel={userRel}/>
                <div id="content" className="content-wrapper clearfix" role="main">
                    { this.props.children }
                </div>
                <Footer />
                <SideFloat />
            </div>
        );
    }
});
module.exports = ViewPage;