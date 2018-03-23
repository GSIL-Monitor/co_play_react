import message from 'views_path/modules/message';

const fn = {
    getPlatform(platform) {
        var data = {
            'mogujie': 0,
            'meilishuo': 1,
            'taoshijie': 2
        }
        return data[platform];
    },
    // 中上部提示
    messageTip(type,msg) {
        if(type == "yes") {
            message.success(msg || "操作成功")
        }
        else {
            message.error("操作失败" + msg || '')
        }
    },
    //又上侧的提示信息 success error info 
    // alert(type, msg) {
    //     notification[type]({
    //         message: '提示',
    //         description: msg,
    //         duration: 2
    //     });
    // },
    //获取某一时间点的秒数 new Date()
    getSecondTime(data) {
        var now = data ? new Date(data) : new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);

        // 取data的0点时间戳 
        let startTime = parseInt((now.getTime() / 1000).toFixed(0)) || 0;
        // 取data的23：59：59 的时间戳
        let endTime = startTime + 86399;

        return {
            startTime: startTime,
            endTime: endTime
        };
    },
    /**
     * 获取某一天时间戳
     * @param  {String} dateStr 2016-03-22
     * @return {Object}     zeroTimestamp 零点时间戳，currentTimestamp 当前时间戳
     */
    getOtherDayTimestamp(dateStr) {
        // 大坑，请注意！如果是safari浏览器，把yyyy-mm-dd格式化成yyyy/mm/dd
        // 因为safari下new Date('yyyy-mm-dd')会出现Invalid Date，问题在于YYYY-MM-DD格式是包含在标准中的，只是Safari没有实现。
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/.*version\/([\w.]+).*(safari).*/)) {
            dateStr = dateStr.replace(/-/g, '/');
        }

        var now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);

        // 当前时间零点时间戳
        let currentZeroTimestamp = now.getTime() / 1000 || 0;
        // 当前时间戳
        let currentTimestamp = new Date().getTime() / 1000 || 0;

        // 当前时间和零点的差值
        let currentZeroDifference = currentTimestamp - currentZeroTimestamp;

        // 获取某一天零点的时间戳
        let otherDayZeroTimestamp = (new Date(dateStr + ' 00:00:00').getTime() / 1000 || 0);

        // 获取某一天的当前时间戳
        let otherDayCurrentTimestamp = otherDayZeroTimestamp + currentZeroDifference;

        return {
            currentZeroTimestamp: currentZeroTimestamp,
            zeroTimestamp: otherDayZeroTimestamp,
            currentTimestamp: otherDayCurrentTimestamp
        };
    },
    /*
     * @desc  获取链接参数
     * @param  {string} name 参数名字
     * @param  {string} [url] 链接url，为空的时候取location.href
     * @return {string} 参数
     */

    getParameterByName: function (name, url) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = url ? regex.exec(url) : regex.exec(location.href);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    setParameterByName: function (param, value) {
        //设置url中参数值
        function setParam(param, value) {
            var query = location.search.substring(1);
            var p = new RegExp("(^|)" + param + "=([^&]*)(|$)");
            if (p.test(query)) {
                //query = query.replace(p,"$1="+value);
                var firstParam = query.split(param)[0];
                var secondParam = query.split(param)[1];
                if (secondParam.indexOf("&") > -1) {
                    var lastPraam = secondParam.split("&")[1];
                    return '?' + firstParam + '&' + param + '=' + value + '&' + lastPraam;
                } else {
                    if (firstParam) {
                        return '?' + firstParam + param + '=' + value;
                    } else {
                        return '?' + param + '=' + value;
                    }
                }
            } else {
                if (query == '') {
                    return '?' + param + '=' + value;
                } else {
                    return '?' + query + '&' + param + '=' + value;
                }
            }
        }
        //调用
        var url = window.location.href;//获取当前url
        var searchUrl = setParam(param, value);
        if (url.indexOf("?") > 0) {
            url = url.split("?")[0];
        }
        return (url + searchUrl);
    },
    // 时间格式化
    formatDate: function (mask, date, utc) {
        // Some common format strings
        var masks = {
            "default": "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        // Internationalization strings
        var i18n = {
            dayNames: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            monthNames: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };

        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip = /[^-+\dA-Z]/g,
            pad = function (val, len) {
                val = String(val);
                len = len || 2;
                while (val.length < len) val = "0" + val;
                return val;
            };

        // Regexes and supporting functions are cached through closure

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(masks[mask] || mask || masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: i18n.dayNames[D],
                dddd: i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: i18n.monthNames[m],
                mmmm: i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    },
    /**
     * 请求数据,ajax
     */
    fetch: function (options) {
        var url = options.url || '';
        var dataType = options.dataType || 'json';
        
        
        if(url.indexOf('http') != -1){
            window.baseUrl = "";
        }
        else {
            switch (window.location.host.split(":")[0]) {
                case 'localhost':
                    window.DEV = true;
                    window.baseUrl = "http://lotus.meili-inc.com/mock";
                    break;
                default:
                    window.DEV = false;
                    window.baseUrl = "";
            }    
        }
        // 如果是开发环境,使用莲藕数据，josnp格式，并且POST时候添加_method＝POST的参数
        if (window.DEV) {
            dataType = 'jsonp';
            if (options.type === 'post' || options.type === 'POST') {
                options.data = $.extend({}, options.data, {
                    '_method': 'POST'
                });
            }
        }
        var setting = {
            url: window.baseUrl + url,
            data: options.data || {},
            type: options.type || 'get',
            dataType: dataType,
            error: function (xhr, ajaxOptions, thrownError) {
                switch (xhr.status) {
                    case 403:
                        var res = xhr.responseJSON || {};
                        // ConfirmFn('您没有这个页面的访问权限,请点击申请~', function () {
                        //     location.href = res.result;
                        // });
                        break;
                    case 404:
                        fn.alert('error', '接口404');
                        break;
                    default:

                }
            }
        };
        return $.ajax($.extend({}, options, setting));
    },
    // 判断是否空对象
    isEmptyObj: function(object) {
        for (let key in object) {
            return false;
        }
        return true
    },
    // 设置二级state
    setDeepStateObj: function(parentKey, key, value, that) {
        let copy = that.state[parentKey];
        copy[key] = value;
        let newObj = {};
        newObj[parentKey] = copy;
        that.setState(newObj);
    },
    // 实时请求延时
    debounce: function(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    // 防xss
    escapeHtml(text) {
        if (!text) {
          return '';
        }
        return text
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&quot;')
          .replace(/'/g, '&#039;');
    },
    getFromToDate(fromDate0,toDate0,awayDays) {
        let beforeDate = '';
        let toDate = toDate0 ? toDate0 : fn.formatDate('yyyy-mm-dd', new Date());
        if(!fromDate0) {
            let timestamp = (new Date(toDate)).getTime();
            beforeDate = fn.formatDate('yyyy-mm-dd', timestamp + awayDays * 3600 * 24 * 1000);
        }
        let fromDate = fromDate0 ? fromDate0 : beforeDate;
        return { fromDate, toDate }
    }
    
};

module.exports = fn;
