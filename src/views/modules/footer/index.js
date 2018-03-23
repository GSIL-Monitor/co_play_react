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
			}]
		}
	},
	render() {
		let { uniList } = this.state;
		return (
    		<div className="footer-zone">
    			<div className="main-zone">
	    			<div className="uni-list">
		        	{
		        		uniList.map((item, index) => {
		        			return (
		        				<div className="item" key={index} style={{width: (100/uniList.length) + '%'}}>
		        					<img className="main-img" src={item.img}/>
		        					<div className="text">{item.text}</div>
		        				</div>
		        			)
		        		})
		        	}
	        	</div>
	        </div>
    		</div>

		)
	}
})
module.exports = ViewPage;