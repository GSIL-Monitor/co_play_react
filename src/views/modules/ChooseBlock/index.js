import react from 'react';
const ViewPage = React.createClass({
	getInitialState() {
		return {

		}
	},
	setChange(field, fieldVaule, key, value) {
		let { setChange } = this.props;
		setChange && setChange(key, value);
		this.setState({
			[field]: fieldVaule
		});
		console.log("field:"+field+",fieldVaule:"+fieldVaule+",key:"+key+",value:"+value)
	},
	render() {
		let { gameTypeMap, normalTypeList } = this.props;
		let hasGameType = gameTypeMap ? true : false;
		let hasNormalList = normalTypeList && normalTypeList.length > 0;
		let activeGameIndex = this.state['items-game'] >= 0 ? this.state['items-game'] : -1;
		return (
			<div className="type-choose-block">
				{!hasGameType ? null:
					<div className="choose-line game-line">
						<div className="dis-in-bl-top name">{gameTypeMap.name}</div>
						<div className="dis-in-bl-top items">
							<div className={`fl item all ${activeGameIndex == -1 ? 'active' : ''}`} onClick={this.setChange.bind(this,'items-game', -1, gameTypeMap.key, gameTypeMap.allValue)}>
								<p className="text">{gameTypeMap.allText}</p>
								<img className="ico" src="http://daofengdj.com/public/static/public/img/ico_36.png"/>
							</div>
							{ gameTypeMap.list && gameTypeMap.list.map((item, index) => {
								return (
									<div className={`fl item ${activeGameIndex == index ? 'active' : ''}`} key={index} onClick={this.setChange.bind(this,'items-game', index, gameTypeMap.key, item.value)}>
										<p className="text">{item.text}</p>
										<img className="g-img" src={item.img}/>
										<img className="ico" src="http://daofengdj.com/public/static/public/img/ico_36.png"/>
									</div>
								)
							})

							}
						</div>
					</div>
				}
				{!hasNormalList ? null:
					normalTypeList.map((item0, index0) => {
						let activeIndex = this.state['items-' + index0] >= 0 ? this.state['items-' + index0] : -1;
						return (
							<div className="choose-line normal-line">
								<div className="dis-in-bl-top name">{item0.name}</div>
								<div className="dis-in-bl-top items">
									<div className={`fl item all ${activeIndex == -1 ? 'active' : ''}`} onClick={this.setChange.bind(this,'items-'+index0, -1, item0.key, item0.allValue)}>
										<p className="text">{item0.allText}</p>
									</div>
									{ item0.list && item0.list.map((item, index) => {
										return (
											<div className={`fl item ${activeIndex == index ? 'active' : ''}`} key={index} onClick={this.setChange.bind(this,'items-'+index0, index, item0.key, item.value)}>
												<p className="text">{item.text}</p>
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