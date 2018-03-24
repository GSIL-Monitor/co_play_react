import react from 'react';
const ViewPage = react.createClass({
	getInitialState() {
		return {
			tagMap: {

			},
			statusMap: {

			}
		}
	},
	render() {
		let {list} = this.props;
		let {tagMap, statusMap} = this.state;
		return (
			<div className="goods-list">
				{ list.length > 0 ? list.map((item0, index0) => {
					return (
						<div className="item">
							<a href={item0.url} target="_blank">
								<div className="pic-box">
									<img src={item0.img}/>
								</div>
								<div className="play-info">
									<span className="name">{item0.name}</span>
									<div className="tags-box">
										{ item.tags && item.tags.map((item, index) => {
												return (
													<span className={`tag color-${tagMap[item]}`}>{item}</span>
												)
											})
										}
									</div>
								</div>
								<div className="play-money">
									<span className="s1">￥{item0.oldFee}</span>
									<span className="s2">￥<span className="num">{item0.newFee}</span>/小时</span>
								</div>
								<div className={`status ${statusMap[item.status]}`}>{item.status}</div>
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