import React from 'react';

/*
参数：
1，数组，list : tab列表，如 [text: '全部', value: -1;text: '处理中', value: 1;]
2，数字字符串均可，toActiveValue: 将要高亮的tab值
3，函数，handleClick: 点击某个tab后的回调函数

典型应用场景：
列表页，搜索栏的某个搜索条件和tab基本相同，两者之一均变动时，可以通过 handleClick 或 toActiveValue 实现同步或影响，
而且可以变化链接参数实现数据局部刷新

用法示例：
<FakeTab list={tabOptions} toActiveValue={query.tabId || 1} that={this} handleClick={this.handleClickTab}/>

*/

const FakeTab = React.createClass({
	render() {
		let {list,toActiveValue,that} = this.props;
		return (
			<div className="fake-tab-wrapper">
				{ list.map((item,index) => {
						return (
							<span className={`single-tab ${item.value==toActiveValue ? 'active':''}`} 
								onClick={this.props.handleClick.bind(that,index)} key={index}
							>
								{item.text}
							</span>
						)
					})

				}
			</div>
		)
	}
})

export default FakeTab;