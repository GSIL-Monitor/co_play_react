import React from 'react';
import fn from 'utils_path/fn';
import './style/index.less';
import ChooseBlock from '../modules/ChooseBlock/index.js';
import GoodsList from '../modules/GoodsList/index.js';
const ViewPage = React.createClass({
	
	getInitialState() {
		return {
			gameTypeMap: {
				name: "游戏类型",
				key: "type",
				allText: "全部",
				allValue: -1,
				list: [{
					text: "游戏1",
					value: 1,
					img: "https://img.daofengdj.com/uploads/images/20180212/23013afa9fdc8f0a83c08728094b8d37.png"
				}]
			},
			normalTypeList: [{
				name: "陪玩性别",
				key: "sex",
				allText: "全部",
				allValue: -1,
				list: [{
					text: "男神",
					value: 1
				},{
					text: "女神",
					value: 2
				}]
			},{
				name: "等级",
				key: "level",
				allText: "全部",
				allValue: -1,
				list: [{
					text: "初级",
					value: 1
				},{
					text: "中级",
					value: 2
				},{
					text: "高级",
					value: 3
				}]
			}],
			goodsList: [{
				img: "https://img.daofengdj.com/uploads/avatar/000/12/20/122031_avatar_big.jpg",
				discount: 8,
				name: "单客1",
				tags: [1,2],
				oldFee: 33,
				newFee: 11,
				status: 0,
				level: "中级"
			},{
				img: "https://img.daofengdj.com/uploads/avatar/000/11/86/118633_avatar_big.jpg",
				discount: 8,
				name: "单客2",
				tags: [3,2],
				oldFee: 33,
				newFee: 11,
				status: 1,
				level: "高级"
			},{
				img: "https://img.daofengdj.com/uploads/avatar/000/12/20/122031_avatar_big.jpg",
				discount: 8,
				name: "单客1",
				tags: [1,2],
				oldFee: 33,
				newFee: 11,
				status: 0,
				level: "高级"
			},{
				img: "https://img.daofengdj.com/uploads/avatar/000/11/86/118633_avatar_big.jpg",
				discount: 8,
				name: "单客2",
				tags: [3,2],
				oldFee: 33,
				newFee: 11,
				status: 1,
				level: "高级"
			}]
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
		let { gameTypeMap, normalTypeList, goodsList } = this.state;
		return (
				<div className="main-page">
					<ChooseBlock gameTypeMap={gameTypeMap} normalTypeList={normalTypeList} />
					<GoodsList list={goodsList} />
				</div>
		)
	}
})
module.exports = ViewPage;