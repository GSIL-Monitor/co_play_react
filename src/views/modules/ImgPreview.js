import React from 'react';
/*
	author: kelan  2017.01.15
	参数说明：
	1，imgArr数组： 要预览的所有图片地址
	2，curIndex：当前需浏览第几张
	3，closePreview：关闭图片预览，主要把如下示例中showPreviewImg设为false即可
	
	用法示例：
		{ showPreviewImg ?
			<ImgPreview imgArr={previewImgArr} curIndex={previewImgCurIndex}
				closePreview={this.closePreview}
			/>
			: null
		}
*/
const ImgPreview = React.createClass({
	getInitialState() {
		return {
			curIndex: this.props.curIndex || 0,
			lastTipShow: false, //是否显示点击上一张图提示
			nextTipShow: false, //是否显示点击下一张图提示
		}
	},

	// 关闭图片预览
	closePreview() {
		this.props.closePreview([], 0, false)
	},
	// 移动上下张图片，若已是第一张则转向最后一张，若已是最后一张则转向第一张
	movePic(pos) {
		let { imgArr } = this.props;
		let { curIndex } = this.state;
		let willPos = pos + curIndex;
		let len = imgArr.length;
		if(willPos == -1) {
			curIndex = len -1 ;
		}
		if(willPos == len) {
			curIndex = 0;
		}
		if(willPos != -1 && willPos != len) {
			curIndex = willPos;
		}
		this.setState({
			curIndex: curIndex
		})
	},
	// 点击小圆点到指定图片
	changePic(pos) {
		this.setState({
			curIndex: pos
		})
	},
	moveTip(field, ifShow) {
		this.setState({
			[field]: ifShow
		})
	},
	render() {
		let { imgArr } = this.props;
		let { curIndex, lastTipShow, nextTipShow } = this.state;
		return(
			<div className="img-preview-wrapper">
				<div className="preview-mask back-style" onClick={this.closePreview}></div>
				<div className="preview-main">
					<div className="top">
						<span>点击透明背景区可关闭图片预览</span>
						<div className="right-option">
							<span onClick={this.closePreview} className="close">X</span>
						</div>
					</div>
					<div className="center">
						<div className="last-pic" onClick={this.movePic.bind(this, -1)}
							onMouseEnter={this.moveTip.bind(this,'lastTipShow', true)}
							onMouseLeave={this.moveTip.bind(this,'lastTipShow', false)}>
							<div className="move-pic-tip"
								style={{display: lastTipShow ? 'block':'none'}}>
								&lt;&nbsp;上一张
							</div>
						</div>
						<a href={imgArr[curIndex]} target="_blank" className="img-zone">
							<img src={imgArr[curIndex]} />
						</a>
						<div className="next-pic" onClick={this.movePic.bind(this, 1)}
							onMouseEnter={this.moveTip.bind(this,'nextTipShow', true)}
							onMouseLeave={this.moveTip.bind(this,'nextTipShow', false)}>
							<div className="move-pic-tip"
								style={{display: nextTipShow ? 'block':'none'}}>
								下一张&nbsp;&gt;
							</div>
						</div>
					</div>
					<div className="bottom">
						{ imgArr.map((item, index) => {
							return <span className={`dot back-style ${index==curIndex? 'active':''}`} onClick={this.changePic.bind(this, index)} key={index}></span>
						  })

						}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = ImgPreview;