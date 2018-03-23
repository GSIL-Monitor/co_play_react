import Confirm from '@mogu/up-components/lib/Modal/Confirm';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ConfirmView extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let btnTexts = {ensureText: '去申请', cancelText: '取消'};
		return (
			<Confirm ref="commonConfirm" size="small" btnTexts={btnTexts} title="提示">
				{this.props.content}
			</Confirm>
		);
	}
}

module.exports = function ConfirmFn (msg, callback) {
	if (!$('#commonConfirm').size()) {
		$('body').append('<div id="commonConfirm"></div>');
	}
	var $ref = ReactDOM.render(<ConfirmView content={msg}/>, document.getElementById('commonConfirm'));
	$ref.refs.commonConfirm.ensure(callback);
}