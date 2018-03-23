import React from 'react'
import notification from '../index'

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

const Demo = React.createClass({
    render() {
        return (
            <div>
                <button onClick={ openNotification }>基本款点我飞起</button>
                <button onClick={ openNotificationWithIcon('success') }>success</button>
                <button onClick={ openNotificationWithIcon('error') }>error</button>
                <button onClick={ openNotificationWithIcon('info') }>info</button>
                <button onClick={ openNotificationWithIcon('warn') }>warn</button>
            </div>
        )
    }
})

module.exports = Demo
