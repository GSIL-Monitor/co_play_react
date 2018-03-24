import react from 'react';
const ViewPage = react.createClass({
	getInitialState() {
		return {
			chatList: [{
				ico: "http://daofengdj.com/public/static/public/img/bar_ico_er.png",
				icoHover: "http://daofengdj.com/public/static/public/img/bar_ico_er_hover.png",
				text: "微信公众号"
				key: "wx-public"
			},{
				ico: "http://daofengdj.com/public/static/public/img/bar_ico_qq.png",
				icoHover: "http://daofengdj.com/public/static/public/img/bar_ico_qq_hover.png",
				text: "微信公众号"
				key: "wx-public"
			}]
		}
	},
	render() {
		let {chatList} = this.state;
		return (
			<div className="side-float">
				{ chatList.map((item, index) => {
					return (
						<div className={`item ${item.key} ${activeIndex == index ? 'active' : ''}`} key={index}>
							<div className="info">
								<img src={activeIndex == index ? item.icoHover : item.ico}/>
							</div>
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
			</div>
		)
	}
})
module.exports = ViewPage;