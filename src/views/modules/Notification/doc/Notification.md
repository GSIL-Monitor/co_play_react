# Notification

## 简介

 提示弹窗，
 传送门:http://upfront.mogujie.org/static/up-demo/#/notification?_k=g53pws

## 使用

### 基本用法

```javascript
import Notification from '@mogu/up-components/lib/Notification';

const openNotification = function () {
  notification.open({
    message: '这是标题',
    description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
  });
};

const openNotificationWithIcon = function (type) {
  return function () {
    notification[type]({
      message: '这是标题',
      description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案',
      duration: 0
    });
  };
};

ReactDOM.render(
  <div>
      <button onClick={ openNotification }>基本款点我飞起</button>
      <button onClick={ openNotificationWithIcon('success') }>success</button>
      <button onClick={ openNotificationWithIcon('error') }>error</button>
      <button onClick={ openNotificationWithIcon('info') }>info</button>
      <button onClick={ openNotificationWithIcon('warn') }>warn</button>
  </div>,
  document.getElementById('container'));
```

## API

- notification.success(config)
- notification.error(config)
- notification.info(config)
- notification.warn(config)
- notification.close(key: String)
- notification.destroy()

config 参数如下：

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| message | 通知提醒标题，必选 | React.Element or String | - |
| description | 通知提醒内容，必选 | React.Element or String | - |
| btn | 自定义关闭按钮 | React.Element | - |
| key | 当前通知唯一标志 | String | - |
| onClose | 点击默认关闭按钮时触发的回调函数 | Function | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | Number | 4.5 |


还提供了一个全局配置方法，需要在调用前提前配置，一次有效。

- notification.config(options)

```javascript
notification.config({top: 100});
```

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| top | 消息距离顶部的位置 | Number | 24px |
