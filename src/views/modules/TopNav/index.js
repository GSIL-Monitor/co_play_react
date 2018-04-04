import React from 'react';
import { routeMap } from 'utils_path/constants'
const ViewPage = React.createClass({
	getInitialState() {
		return {

		}
	},
	render() {
		let { logo, tabList , isLogin, userRel} = this.props;
		let hasTab = tabList && tabList.length > 0;
		console.log(routeMap)
		return (
			<div className="top-nav-wrapper">
				<div className="top-nav">
					<div className="dis-in-bl-middle logo-wrapper">
						<img src={logo} />
					</div>
					<div className="dis-in-bl-middle tab-list">
						{ !hasTab ? null :
							tabList.map((item, index) => {
								return (
									<a className="dis-in-bl-middle item" href={item.link} key={index}>
										<span className="text-wrapper">
											{!item.ico ? null:
												<img className="ico" src={item.ico}/>
											}
											<span className="text">{item.text}</span>
										</span>
									</a>
								)
							})

						}
					</div>
					{ isLogin ? 
						<div className="other">
							<i className="sp"></i>
							<a className="i-item message" href={routeMap.message}></a>
							<div className="user-box">
								<div className="pic-box">
									<a href={routeMap.order}>
										<img className="avatar-img" src={userRel.avatarUrl} alt="" />
									</a>
									<img className="ico-img" src="http://daofengdj.com/public/static/public/img/ico_11.png"/>
								</div>
								<div className="info-box">
									<div className="top"></div>
									<div className="fast-list">
										<a className="item order" href={routeMap.order}>
											订单
										</a>
										<a className="item set" href={routeMap.set}>
											资料设置
										</a>
										<div className="item balance">
											<div className="text1">账户余额:</div>
											<div className="text2">0</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						:
						<div className="other">
							<i className="sp"></i>
							<a className="i-item message" href={routeMap.message}></a>
							<a className="i-item log login" href={routeMap.login}>登录</a>
							<i className="sp"></i>
							<a className="i-item log register" href={routeMap.register}>注册</a>
						</div>
					}
				</div>
			</div>
		) 
	}
})
module.exports = ViewPage;