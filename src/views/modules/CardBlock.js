import React from 'react';

const CardBlock = React.createClass({
	getInitialState() {
		return {
			showBody: true
		}
	},
	handleClick() {
		let { notToggleBody } = this.props;
		let { showBody } = this.state;
		!notToggleBody && this.setState({showBody: !showBody})
	},
	render() {
		let { showBody } = this.state;
		return (
			<div className="card-block">
				<div><span className="card-title" onClick={this.handleClick}>{this.props.title}</span></div>
				<div className="card-body" style={{display: showBody ? 'block':'none'}}>{this.props.children}</div>
			</div>
		)
	}
})

export default CardBlock;