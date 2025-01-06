/**
 * 缓冲函数
 * @param {Object} dom 目标dom
 * @param {Number} destination 目标位置
 * @param {Number} rate 缓动率
 * @param {Function} callback 缓动结束回调函数 两个参数分别是当前位置和是否结束
 */
function easeout(
  dom: any,
  destination: number,
  rate: any,
  callback: (pos: any, bool: boolean) => void
) {
  let position = dom.scrollTop;
  if (position === destination || typeof destination !== 'number') {
    return false;
  }
  destination = destination || 0;
  rate = rate || 2;
  // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17);
    };
  }
  let step = function () {
    position = position + (destination - position) / rate;
    if (Math.abs(destination - position) < 1) {
      callback(destination, true);
      return;
    }
    callback(position, false);
    requestAnimationFrame(step);
  };
  step();
}

/**
 * 滚动到指定元素
 * @param {Object} el 当前dom元素
 * @param {DOM} wrapper 要滚动的元素（一般为window或者父元素）
 * @param {Number} offset 元素距离顶部的偏移量
 */
export default function (el: any, wrapper = window, offset = 200) {
  if (!el) return;
  if (typeof offset !== 'number') return;
  let clientRect = el.getBoundingClientRect();
  let isElementInViewport =
    clientRect.top >= 0 &&
    clientRect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  if (!isElementInViewport) {
    // 注意 ！！！
    // Safari 不支持 document.documentElement.scrollTop 获取滚动条高度
    // Chrome 不支持 document.body.scrollTop 获取滚动条高度
    // 通过以下两行兼容
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let dom =
      scrollTop === document.documentElement.scrollTop ? document.documentElement : document.body;

    let destination =
      scrollTop + clientRect.top - offset > 0 ? scrollTop + clientRect.top - offset : 0;
    easeout(dom, destination, 10, (pos) => {
      wrapper.scrollTo(0, pos);
    }); //easeout（滑动到指定位置的缓冲动画函数）方法可查看之前文章
  }
}
