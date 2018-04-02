import react from 'react';
const ViewPage = react.createClass({
	getInitialState() {
		return {
			tagMap: {
				1: "标签11",
				2: "标签21",
				3: "标签31"
			},
			statusMap: {
				0: {
					text: "休息",
					key: "off"
				},
				1: {
					text: "在线",
					key: "online"
				},
				2: {
					text: "接单中",
					key: "going"
				}
			}
		}
	},
	render() {
		let {list} = this.props;
		let {tagMap, statusMap} = this.state;
		return (
			<div className="goods-list">
				{ list.length > 0 ? list.map((item0, index0) => {
					let discount = item0.discount;
					return (
						<div className="dis-in-bl-middle item">
							<a href={item0.url} target="_blank">
								<div className="pic-box">
									<img className="pic-img" src={item0.img}/>
									<div className="dis">
										<div className={`dis-tag ${!discount || discount == 10 ? 'hide' : '' }`}>低至{discount}折</div>
										<div className="dis-in-bl-middle dis-text">限时活动&nbsp;下单就减</div>
										<img className="dis-in-bl-middle dis-ico" src="http://daofengdj.com/public/static/public/img/ico_30.png"/>
									</div>
								</div>
								<div className="play-info">
									<span className="name">{item0.name}</span>
									<div className="tags-box">
										{ item0.tags && item0.tags.map((item, index) => {
												return (
													<span className={`dis-in-bl-middle tag tag-${item}`}>{tagMap[item]}</span>
												)
											})
										}
									</div>
								</div>
								<div className="play-other">
									<span className="level">{item0.level}</span>
									<div className="fee-box">
										<span className="dis-in-bl-bottom s1">￥{item0.oldFee}</span>
										<span className="dis-in-bl-bottom s2">￥<span className="num">{item0.newFee}</span>/小时</span>
									</div>
								</div>
								<div className={`status ${statusMap[item0.status].key}`}>{statusMap[item0.status].text}</div>
							</a>
						</div>
					)
					}) : null 

				}
			</div>
		)
	}
})
module.exports = ViewPage;