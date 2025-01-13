import { $marginRight, $width, phoneSize } from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import VideoComp from '@/components/VideoComp';

const BeHoldWrap = styled.div`
  padding-top: 184rem;
  padding-left: 94rem;
  position: relative;
  height: 100vh;

  .bg-star-wrap {
    width: 100%;
    height: 100vh;
    position: absolute;
    position: absolute;
    left: 0;
    top: 0;

    .bg-star {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .be-hold-content {
    position: relative;
    z-index: 9;
    ${flexPos('center')}
    flex-direction: column;
  }

  .buy-now {
    height: 90rem;
    padding: 0 64rem;
    border-radius: 100rem;
    background-color: #ffd100;
    font-size: 33rem;
  }
`;

const BeHold = () => {
  return (
    <BeHoldWrap>
      <HomeTitle>BEHOLD! DOGER!</HomeTitle>
      <div className="bg-star-wrap">
        <VideoComp src={require('@/assets/video/bg-star.mp4')} className="bg-star" />
      </div>

      <main className="w-1440 relative mx-auto">
        <section className="be-hold-content">
          <div className="text-24 Poppins-Bold mt-45">Join the Doge Army, NOW!</div>
          <button className="buy-now Poppins-SemiBold mt-30">BUY NOW</button>

          <img
            src={require('@img/home/beHold/behold-doge-1.png')}
            alt=""
            className="absolute left-0 top-280 w-335"
          />
          <img
            src={require('@img/home/beHold/behold-doge-2.png')}
            alt=""
            className="absolute left-[28%] top-290 w-600"
          />
          <img
            src={require('@img/home/beHold/behold-doge-3.png')}
            alt=""
            className="absolute right-0 top-110 w-349"
          />
        </section>
      </main>
    </BeHoldWrap>
  );
};

export default BeHold;
