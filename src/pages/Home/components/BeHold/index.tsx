import {
  $height,
  $marginRight,
  $paddingLeft,
  $paddingTop,
  $width,
  padSize,
  phoneSize,
} from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import VideoComp from '@/components/VideoComp';
import useAppStore from '@/store/appStore';
import { buyNowLink } from '@/utils';
import ToTop from '@/components/ToTop';

const BeHoldWrap = styled.div`
  padding-top: 184rem;
  padding-left: 94rem;
  position: relative;
  overflow: hidden;

  ${$height('150vw', '1300rem', '1300rem')}
  ${$paddingTop('30rem', '184rem', '184rem')}
  ${$paddingLeft('0', '94rem', '94rem')}

  @media (min-width: ${phoneSize}) {
    /* height: 150vh; */
  }

  .bg-star-wrap {
    width: 100%;
    /* min-height: 100vh; */
    height: 100%;

    /* @media (min-width: ${phoneSize}) {
      height: 100%;
    }

    @media (max-width: ${phoneSize}) {
      height: 150vw;
    } */

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
  const appStore = useAppStore();

  return (
    <BeHoldWrap>
      <HomeTitle className="text-41! md:text-72!">BEHOLD! DOGER!</HomeTitle>
      <div className="bg-star-wrap">
        <VideoComp src={require('@/assets/video/bg-star.mp4')} className="bg-star" />
      </div>

      <main className="w-full pc:w-1440 relative mx-auto">
        <section className="be-hold-content">
          <div className="text-18 lg:text-24 Poppins-Bold mt-10 lg:mt-45">
            Join the Doge Army, NOW!
          </div>
          {appStore.curDevice !== 'phone' && (
            <button className="buy-now Poppins-SemiBold mt-30" onClick={() => buyNowLink()}>
              BUY NOW
            </button>
          )}

          <img
            src={require('@img/home/beHold/behold-doge-1.png')}
            alt=""
            className="absolute left-[-13rem] md:left-[-100rem] lg:left-0 top-380 lg:top-280 w-164 lg:w-335 z-2"
          />
          <img
            src={require('@img/home/beHold/behold-doge-2.png')}
            alt=""
            className="absolute left-0 lg:left-[28%] top-100 lg:top-290 w-full md:w-700 lg:w-600"
          />
          <img
            src={require('@img/home/beHold/behold-doge-3.png')}
            alt=""
            className="absolute right-[-50rem] lg:right-0 top-50 lg:top-110 w-158 lg:w-349"
          />
        </section>
      </main>

      {appStore.curDevice === 'phone' && <ToTop />}
    </BeHoldWrap>
  );
};

export default BeHold;
