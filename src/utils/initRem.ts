// 初始化 rem

export default () => {
  const docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth <= 393) {
        // 如果超过手机设计稿，则按照 pc 固定基本 fontSize
        docEl.style.fontSize = clientWidth / 393 + 'px';
      } else if (clientWidth >= 393 && clientWidth <= 750) {
        // 如果超过手机设计稿，则按照 pc 固定基本 fontSize
        // docEl.style.fontSize = clientWidth / 750 + 'px';
        docEl.style.fontSize = clientWidth / 393 + 'px';

      } else {
        docEl.style.fontSize = '1px';
      }
    };
  recalc();
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
};
