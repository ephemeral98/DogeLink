import { $fontSize, $height } from '@/styled/mediaSize';
import React, { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const HomeTitleWrap = styled.div`
  font-weight: 700;
  ${$fontSize('28rem', '72rem', '72rem')}
  width: fit-content;
  margin: 0 auto;
  position: relative;
  line-height: 1;
  color: #ffd100;

  .title-content {
    position: relative;
    z-index: 9;
  }
`;

const HomeTitle: FC<{ children: ReactNode }> = (props) => {
  return (
    <HomeTitleWrap>
      <div className="title-content ChildWriting-Regular">{props.children}</div>
    </HomeTitleWrap>
  );
};

export default HomeTitle;
