import react from 'react';
const ViewPage = react.createClass({
	getInitialState() {
		return {
			chatList: [{
				qrImg: "http://daofengdj.com/public/static/public/img/gzh_code.jpg",
				ico: "http://daofengdj.com/public/static/public/img/bar_ico_er.png",
				icoHover: "http://daofengdj.com/public/static/public/img/bar_ico_er_hover.png",
				text: "微信公众号",
				key: "wx-public"
			},{
				qrImg: "http://daofengdj.com/public/static/public/img/gzh_code.jpg",
				ico: "http://daofengdj.com/public/static/public/img/bar_ico_qq.png",
				icoHover: "http://daofengdj.com/public/static/public/img/bar_ico_qq_hover.png",
				text: "官方陪玩群",
				key: "qq-group"
			}]
		}
	},
	render() {
		let {chatList} = this.state;
		return (
			<div className="side-float">
				<div className="box1">
					<div className="text"><span>在线</span><br/><span>客服</span></div>
					<div className="circle-zone">
						<div className="circle circle1"></div>
						<div className="circle circle2"></div>
						<div className="circle circle3"></div>
					</div>
				</div>
				<div className="box2">
					{ chatList.map((item, index) => {
						return (
							<div className={`item ${item.key}`} key={index}>
								<div className="info"></div>
								<div className="cont">
									<i className="i1"></i>
									<div className="qr-box">
										<div className="text">{item.text}</div>
										<img className="qr-img" src={item.qrImg}/>
									</div>
									<i className="i2"></i>
								</div>
							</div>
						)
					})}
					<div className={`item service`}>
							<div className="info"></div>
							<div className="cont">
								<div className="service-call">在线客服</div>
								<div className="text">客服QQ：1353761057</div>
								<div className="text">咨询时间：09:00-01:00</div>
							</div>
					</div>
				</div>
				<div className="box3">
					<div className="item feedback">
						<span className="text">意见<br/>反馈</span>
					</div>
				</div>
				<div className="box4">
					<div className="item top">
						<span className="text">TOP</span>
					</div>
				</div>
			</div>
		)
	}
})
module.exports = ViewPage;