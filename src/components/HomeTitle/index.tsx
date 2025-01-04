import React, { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const HomeTitleWrap = styled.div`
  font-weight: 700;
  font-size: 64rem;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 33rem;
    background-color: #ffeaa0;
  }

  .title-content {
    position: relative;
    z-index: 9;
  }
`;

const HomeTitle: FC<{ children: ReactNode }> = (props) => {
  return (
    <HomeTitleWrap className="Poppins">
      <div className="title-content">{props.children}</div>
    </HomeTitleWrap>
  );
};

export default HomeTitle;
