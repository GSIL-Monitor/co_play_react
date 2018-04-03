import React from 'react';
import fn from '../../utils/fn';
import {PAGE_ROUTE} from '../../routes/constants';
import Footer from 'views_path/modules/Footer/index';
import SideFloat from 'views_path/modules/SideFloat/index.js';
const ViewPage = React.createClass({
    getInitialState: function () {
        return {
            
           
        };
    },
    componentDidMount() {
       
    },
   
    render() {
        return (
            <div>
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