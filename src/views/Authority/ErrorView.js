import React , { Component } from 'react';

const ViewPage = React.createClass({
	
	getInitialState() {
		return {
			jumpLink: this.props.location.query.jumpLink
		}
	},
	render () {
		return(
			<div id="error-page">
				<div className="row">
					<div className="col-xs-12">
						<div id="error-box">
							<div className="row">
								<div className="col-xs-12">
									<div id="error-box-inner">
										<img src="http://up.f2e.mogujie.org/static/imgs/error-no-permission.png" alt="Have you seen this page?"/>
									</div>
									<h2>
										您暂无本页面的访问权限,请先申请
									</h2>
									<p>
										<a href={this.state.jumpLink}>戳下这里申请.</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
})
module.exports = ViewPage;