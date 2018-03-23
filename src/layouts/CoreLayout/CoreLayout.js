import React from 'react';
import fn from '../../utils/fn';
import {PAGE_ROUTE} from '../../routes/constants';
import Footer from 'views_path/modules/footer/index';
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
            </div>
        );
    }
});
module.exports = ViewPage;