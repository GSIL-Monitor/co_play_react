import React from 'react';
const ViewPage = React.createClass({
	getInitialState() {
		return {
			uniList: [{
				text: "陪玩权益保障",
				img: "http://daofengdj.com/public/static/public/img/ico_ft01.png"
			},{
				text: "资金日结算",
				img: "http://daofengdj.com/public/static/public/img/ico_ft02.png"
			},{
				text: "平台培养 打造专业陪玩",
				img: "http://daofengdj.com/public/static/public/img/ico_ft03.png"
			},{
				text: "来电信息提醒",
				img: "http://daofengdj.com/public/static/public/img/ico_ft04.png"
			},{
				text: "自由管理自己的服务",
				img: "http://daofengdj.com/public/static/public/img/ico_ft05.png"
			}],
			relList: [{
				img: "http://daofengdj.com//public/static/public/img/link.png",
				text: "租号玩-账号租借平台",
				text2: "蚂蚁代练-专业代练平台",
				link: "http://www.baidu.com",
				link2: "http://www.baidu.com"
			},{
				img: "http://daofengdj.com//public/static/public/img/kefu.png",
				text: "客服电话：0558-5519258",
				text2: "咨询时间：09:00-02:30",
			},{
				img: "http://daofengdj.com//public/static/public/img/qq.png",
				text: "客服QQ：1353761057",
				text2: "咨询时间：09:00-02:30",
			}],
			infoList: [{
				text: "联系我们",
				link: "http://www.baidu.com"
			},{
				text: "公司简介",
				link: "http://www.baidu.com"
			},{
				text: "免责声明",
				link: "http://www.baidu.com"
			}]
		}
	},
	render() {
		let { uniList, relList, infoList } = this.state;
		let relListLen = relList.length;
		return (
    		<div className="footer-zone">
    			<div className="main-zone">
	    			<div className="uni-list">
		        	{
		        		uniList.map((item, index) => {
		        			return (
		        				<div className="dis-in-bl-middle item" key={index} style={{width: (100/uniList.length) + '%'}}>
		        					<img className="main-img" src={item.img}/>
		        					<div className="text">{item.text}</div>
		        				</div>
		        			)
		        		})
		        	}
	        	</div>
	        	<div className="rel-list">
	        		{ relList.map((item, index) => {
	        			return (
	        				<div className={`dis-in-bl-top item item-${index+1}`} key={index}>
	        					<div className="dis-in-bl-middle cont">
	        						<img className="dis-in-bl-middle" src={item.img}/>
	        						<div className="dis-in-bl-middle main">
	        							<a className="dis-bl i i1" href={item.key == 'link' ? item.link : "javascript:void(0)"} target="_blank">{item.text}</a>
	        							<a className="dis-bl i i2" href={item.key == 'link' ? item.link2 : "javascript:void(0)"} target="_blank">{item.text2}</a>
	        						</div>
	        					</div>
	        					<div className={`dis-in-bl-middle ${index == relListLen - 1 ? '' : 'sp'}`}></div>
	        				</div>
	        			)
	        		})}
	        	</div>
	        	<div className="info-list">
	        		{ infoList.map((item, index) => {
	        			return (
	        				<a className="dis-in-bl-middle item" href={item.link} target="_blank">{item.text}</a>
	        			)
	        		})}
	        	</div>
	        	<div className="copyright">版权所有&copy;2017牛牌出品</div>
	        </div>
    		</div>

		)
	}
})
module.exports = ViewPage;