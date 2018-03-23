import React from 'react';
import fn from 'utils_path/fn';
import './style/index.less';
// import Footer from '../modules/footer/index.js';
const ViewPage = React.createClass({
	
	getInitialState() {
		return {

		}
	},
	componentWillMount() {
		var self = this;
		// $.ajax({
  //           url: "http://www.66173.com/activity.php?act=game_info&id="+fn.getParameterByName("id"),
  //           type: "get",
  //           dataType: "json"
  //       }).success(function(res) {
  //       	console.log("dd")
  //       	console.log(res, res.code,res.data.backgroundImg);
  //       	if(res.code == "1") {
  //       		var data = res.data || {};
	 //            self.setState({
	 //            	downloadRel: res.downloadRel || {},
	 //            	tabList: res.tabList || [],
	 //            	backgroundImg: res.backgroundImg || [],
	 //            	screenshotImg: res.screenshotImg || [],
	 //            	imgBoxBackgroundUrl: res.imgBoxBackgroundUrl
	 //            })
	 //            document.title = res.title || 'website';
	            
	 //        }
	 //        else {
	 //        	alert(res.msg);
	 //        }
  //       });
	},
	render() {
		return (
			<div className="website-main-wrapper">
					main
			</div>

		)
	}
})
module.exports = ViewPage;