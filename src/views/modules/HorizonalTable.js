import React from 'react';

/*
author: updated by kelan 2017.02.28
只支持一列或两列表格，各单元格之间没有border, 表格名值对中，值是块状元素，
也就是说超过宽度会在其自己宽度范围内向下占用空间，不会占用到名

参数：
1，json对象，data : 表格数据
2，数组，columns: 如 [BasicLeftCols, BasicRightCols],
其中 BasicLeftCols = [{
		title: '处理结果',
		key: 'processStatusDesc'
	},{
		title: '商品发布时间',
		key: 'goodsCreatedTime',
		render: function(text,data,cbs) {
			return <span>{data.itemInfo && data.itemInfo.createTime || ''}</span>
		}
	}]
3，函数数组，cbs: 某些单元格数据的操作函数或者需要用到的函数列表
4，数值，length: 表格列数，默认值为1，需要两列则传2

典型应用场景：
列表页，搜索栏的某个搜索条件和tab基本相同，两者之一均变动时，可以通过 handleClick 或 toActiveValue 实现同步或影响，
而且可以变化链接参数实现数据局部刷新

用法示例：

1，单列
<HorizonalTable data={detail} columns={[BasicCols]} cbs={[this.transfer, this.openIm]}/>

2，双列
<HorizonalTable data={detail} columns={[BasicLeftCols,BasicRightCols]} length={2} cbs={[this.transfer, this.openIm]}/>
<FakeTab list={tabOptions} toActiveValue={query.tabId || 1} that={this} handleClick={this.handleClickTab}/>

*/

const HorizonalTable = React.createClass({
	renderCols(cols,data,cbs) {
		return cols.map((item,index) => {
			return (
				<div className='horizonal-table-line' key={index}>
					<span className="inline-block title">{item.title}:</span>
					<span className="inline-block cont">
						{ typeof item.render === 'function' ? item.render(data[item.key],data,cbs) : data[item.key]}
					</span>
				</div>
			)
		})
	},
	render() {
		let {data, columns, length, cbs} = this.props;
		return (
			<div className="horizonal-table">
				{ length == 2 ?
						<div className="double">
							{	columns.map((cols,i) => {
										return (
											<div className={`width${parseInt(100 / length -1)} inline-block`} key={i}>
												{this.renderCols(cols,data,cbs)}
											</div>
										)
								})
							}
						</div>
						:
						<div className="single">{this.renderCols(columns,data,cbs)}</div>


				}
			</div>
		)
	}
})

export default HorizonalTable;