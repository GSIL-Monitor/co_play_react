import react from 'react';
const ViewPage = react.createClass({
	getInitialState() {
		return {
			chatList: [{
				ico: "http://daofengdj.com/public/static/public/img/bar_ico_er.png",
				icoHover: "http://daofengdj.com/public/static/public/img/bar_ico_er_hover.png",
				text: "微信公众号",
				key: "wx-public"
			},{
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
					<div className="text">在线</br>客服</div>
					<div className="circle-zone">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="circle3"></div>
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
										<div className="qr-code"></div>
									</div>
									<i className="i1"></i>
								</div>
							</div>
						)
					})}
					<div className={`item service`}>
							<div className="info"></div>
							<div className="cont">
								<div className="service-call"></div>
								<div className="text">客服QQ：1353761057</div>
								<div className="text">咨询时间：09:00-01:00</div>
							</div>
					</div>
				</div>
				<div className="box3">
					<div className="item feedback">
						<span className="text">意见</br>反馈</span>
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