# message

## 简介

 提示消息，
 传送门:http://upfront.mogujie.org/static/up-demo/#/message?_k=kg74qp

## 使用

### 基本用法

```javascript
import message from '@mogu/up-components/lib/message';

function handleClick( type ){
    message[ type ]( '这是一条消息' );
}

ReactDOM.render(
  <div>
      <button className="btn btn-info" onClick={ () => handleClick('info') }>info</button>
      <button className="btn btn-warning" onClick={ () => handleClick('warn') }>warn</button>
      <button className="btn btn-success" onClick={ () => handleClick('success') }>success</button>
      <button className="btn btn-danger" onClick={ () => handleClick('error') }>error</button>
      <button className="btn btn-primary" onClick={ () => handleClick('loading') }>loading</button>
  </div>,
  document.getElementById('container'));
```

## API

- message.success(content, duration)
- message.error(content, duration)
- message.warn(content, duration)
- message.info(content, duration)
- message.loading(content, duration)

组件提供了四个静态方法，参数如下：

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| content | 提示内容 | React.Element or String | - |
| duration | 自动关闭的延时 | number | 1.5 |

还提供了全局配置和全局销毁方法：

- message.config(options)
- message.destroy()

```javascript
message.config({top: 100});
```

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| top | 消息距离顶部的位置 | Number | 24px | 
