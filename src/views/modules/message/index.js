import React from 'react';
import Notification from 'rc-notification';

let defaultDuration = 3;
let top;
let messageInstance;
let key = 1;

function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance({
            prefixCls: 'up-message',
            transitionName: 'move-up',
            style: {
                top
            }  // 覆盖原来的样式
        });
    return messageInstance;
}

function notice(content, duration = defaultDuration, type, onClose) {

    const iconClass ={
        info : 'fa fa-info-circle text-info',
        warn : 'fa fa-exclamation-triangle text-warning',
        success : 'fa fa-check-circle text-success',
        error : 'fa fa-times text-danger',
        loading : 'fa fa-refresh up-loading text-primary'
    };

    let instance = getMessageInstance();
    instance.notice({
        key,
        duration,
        style: {},
        content: <div className={`up-message-custom-content`}>
            <i className={ iconClass[ type ] }/>
            <span>{content}</span>
        </div>,
        onClose
    });
    return (function () {
        let target = key++;
        return function () {
            instance.removeNotice(target);
        };
    }());
}

module.exports = {
    info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    warn(content, duration, onClose) {
        return notice(content, duration, 'warn', onClose);
    },
    loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config(options) {
        if (options.top) {
            top = options.top;
        }
    },
    destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};