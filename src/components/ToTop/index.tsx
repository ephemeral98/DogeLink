import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';

const ToTopWrap = styled.div`
  position: fixed;
  right: 100rem;
  bottom: 84rem;
  cursor: pointer;
  z-index: 999;

  ${flexPos('center')}

  .icon-arrow-bar {
    width: 22rem;
    transform: rotate(-90deg);
  }
`;

const ToTop = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0, // 目标位置（页面顶部）
      behavior: 'smooth', // 平滑滚动效果
    });
  };

  return (
    <ToTopWrap onClick={() => handleToTop()}>
      <img src={require('@img/common/icon-arrow-bar.svg')} alt="" className="icon-arrow-bar" />
      <div className="ml-8 text-16">TOP</div>
    </ToTopWrap>
  );
};

export default ToTop;
