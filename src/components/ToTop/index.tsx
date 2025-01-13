import { $bottom, $right } from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';

const ToTopWrap = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 999;
  background-color: #ffd100;
  color: #000;
  border-radius: 5rem;
  padding: 0 10rem;
  height: 32rem;

  ${flexPos('center')}
  ${$right('30rem', '100rem', '100rem')}
  ${$bottom('30rem', '84rem', '84rem')}

  .icon-arrow-bar {
    width: 22rem;
    /* transform: rotate(-90deg); */
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
      <svg
        className="icon-arrow-bar"
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.01114 16.7144L7 1.46664M13 7.27464L7 1.28578L1 7.2755"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* <img src={require('@img/common/icon-arrow-bar.svg')} alt="" className="icon-arrow-bar" /> */}
      <div className="ml-8 text-16 Poppins-Medium">TOP</div>
    </ToTopWrap>
  );
};

export default ToTop;
