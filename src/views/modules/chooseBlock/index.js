import react from 'react';
const ViewPage = React.createClass({
	getInitialState() {
		return {

		}
	},
	setChange(key, value) {
		this.props.setChange(key, value);
	},
	render() {
		let { gameTypeMap, normalTypeList } = this.props;
		let hasGameType = gameTypeList ? true : false;
		let hasNormalList = normalTypeList && normalTypeList.length > 0;
		let activeGameIndex = this.state['items-game'] >= 0 ? this.state['items-game'] : -1;
		return (
			<div className="choose-block">
				{!hasGameType ? null:
					<div className="choose-line game-line">
						<div className="name">{gameTypeMap.name}</div>
						<div className="items">
							<div className={`item all ${activeGameIndex == -1 ? 'active' : ''}`} onClick={this.setChange.bind('items-game', -1, gameTypeMap.allKey, gameTypeMap.allValue)}>
								<p className="text">{gameTypeMap.allName}</p>
								<img className="ico" src="http://daofengdj.com/public/static/public/img/ico_36.png"/>
							</div>
							{ gameTypeMap.list && gameTypeMap.list.map((item, index) => {
								return (
									<div className={`item ${activeGameIndex == -1 ? 'active' : ''}`} key={index} onClick={this.setChange.bind('items-game', index, item.key, item.value}>
										<p className="text">{item.text}</p>
										<img className="ico" src={item.img}/>
									</div>
								)
							})

							}
						</div>
					</div>
				}
				{!hasNormalList ? null:
					{ normalTypeList.map((item0, index0) => {
						let activeIndex = this.state['items-' + index0] >= 0 ? this.state['items-' + index0] : -1;
						return (
							<div className="choose-line game-line">
								<div className="name">{item0.name}</div>
								<div className="items items-{index0}">
									<div className={`item all ${activeIndex == -1 ? 'active' : ''}`} onClick={this.setChange.bind('items-'+{index0},-1,item0.allKey, item0.allValue)}>
										<p className="text">{item0.allName}</p>
										<img className="ico" src="http://daofengdj.com/public/static/public/img/ico_36.png"/>
									</div>
									{ gameTypeMap.list && gameTypeMap.list.map((item, index) => {
										return (
											<div className={`item ${activeIndex == index ? 'active' : ''}`} key={index} onClick={'items-'+{index0}, index, this.setChange.bind(item.key, item.value}>
												<p className="text">{item.text}</p>
												<img className="ico" src={item.img}/>
											</div>
										)
									})

									}
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
})
module.exports = ViewPage;