import { flexPos } from '@/styled/mixin';
import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const MarqueeWrap = styled.div`
  background-color: #000;
  height: 53rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #fad814;
  font-size: 21rem;
  font-weight: bold;
  overflow: auto;

  @keyframes marquee {
    0% {
      transform: translateX(-10%);
    }

    50% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(10%);
    }
  }

  .moving-text {
    animation: marquee 3s linear infinite alternate;
  }
`;

const Marquee: FC<{ children: ReactNode }> = (props) => {
  return (
    <MarqueeWrap>
      <p className="moving-text">{props.children}</p>
    </MarqueeWrap>
  );
};

export default Marquee;
