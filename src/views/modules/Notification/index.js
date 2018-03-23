import React from 'react';
import Notification from 'rc-notification';
import assign from 'object-assign';
import Icon from '../Icon';

let top = 24;
let notificationInstance;

function getNotificationInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = Notification.newInstance({
    prefixCls: 'up-notification',
    style: {
      top,
      right: 0
    }
  });
  return notificationInstance;
}

function notice(args) {
  let duration;
  if (args.duration === undefined) {
    duration = 4.5;
  } else {
    duration = args.duration;
  }

  if (args.icon) {
    let prefixCls = ' up-notification-notice-content-icon-';
    let iconType = '';
    switch (args.icon) {
      case 'success':
        iconType = 'check-circle';
        break;
      case 'info':
        iconType = 'info-circle';
        break;
      case 'error':
        iconType = 'times-circle';
        break;
      case 'warn':
        iconType = 'exclamation-circle';
        break;
      default:
        iconType = 'info-circle';
    }

    getNotificationInstance().notice({
      content: <div>
        <Icon className={prefixCls + 'icon-' + args.icon + prefixCls + 'icon'} type={iconType} />

        <div className={prefixCls + 'message'}>{args.message}</div>

        <div className={prefixCls + 'description'}>{args.description}</div>
      </div>,
      duration,
      closable: true,
      onClose: args.onClose,
      key: args.key,
      style: {}
    });
  } else {
    let prefixCls = 'up-notification-notice-content-';
    if (!args.btn) {
      getNotificationInstance().notice({
        content: <div>
          <div className={prefixCls + 'message'}>{args.message}</div>

          <div className={prefixCls + 'description'}>{args.description}</div>
        </div>,
        duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {}
      });
    } else {
      getNotificationInstance().notice({
        content: <div>
          <div className={prefixCls + 'message'}>{args.message}</div>

          <div className={prefixCls + 'description'}>{args.description}</div>
          <span className={prefixCls + 'btn'}>
            {args.btn}
          </span>
        </div>,
        duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {}
      });
    }
  }
}

const api = {
  open(args) {
    notice(args);
  },
  close(key) {
    if (notificationInstance) {
      notificationInstance.removeNotice(key);
    }
  },
  config(options) {
    top = isNaN(options.top) ? 24 : options.top;
  },
  destroy() {
    if (notificationInstance) {
      notificationInstance.destroy();
      notificationInstance = null;
    }
  },
};

['success', 'info', 'warn', 'error'].forEach((type) => {
  api[type] = (args) => {
    let newArgs = assign({}, args, {
      icon: type
    });
    return api.open(newArgs);
  };
});

module.exports = api;