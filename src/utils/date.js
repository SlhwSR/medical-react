/**
 * 日期函数封装
 */
/* 补零函数 */
export const padZero = (n) => {
  return n < 10 ? '0' + n : n;
}

/* 获取年月日 */
export const getYMD = (separator = '-', t = Date.now()) => {
  const date = new Date(typeof separator == 'number' ? separator : t);
  let y = date.getFullYear();//获取年
  let m = date.getMonth() + 1;//获取月
  let d = date.getDate();//获取日

  return [y, m, d].map(function (v) {
    return padZero(v);
  }).join(typeof separator == 'number' ? '-' : separator)
}

/* 获取时分秒 */
export const getHMS = (separator = ':', t = Date.now()) => {
  const date = new Date(typeof separator == 'number' ? separator : t);
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return [h, m, s].map(function (v) {
    return padZero(v)
  }).join(typeof separator == 'number' ? ':' : separator);
}

//获取年月日时分秒
export const getYMDHMS = (s1, s2, t) => {
  return getYMD(s1, t) + ' ' + getHMS(s2, t);
}

//获取星期
export const getWeek = (t = Date.now()) => {
  return '星期' + ['天', '一', '二', '三', '四', '五', '六'][new Date(t).getDay()]
}

/* 秒转时分秒 */
export const sToHMS = (t) => {
  let h = Math.floor(t / 3600)//转时
  let m = Math.floor(t / 60) % 60;
  let s = t % 60;
  return [h, m, s].map(function (v) {
    return padZero(v)
  }).join(':')
}

export const formatTime = (time, option) => {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}


