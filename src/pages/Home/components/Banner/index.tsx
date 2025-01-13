import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';
import VideoComp from '@/components/VideoComp';
import useAppStore from '@/store/appStore';

import {
  $borderRadius,
  $fontSize,
  $height,
  $marginTop,
  $paddingBottom,
  $paddingLeft,
  $paddingTop,
  $paddingX,
  $width,
  phoneSize,
} from '@/styled/mediaSize';

const BannerWrap = styled.div`
  position: relative;
  /* height: 100vh; */
  ${$paddingLeft('0', '94rem', '94rem')}
  ${$paddingTop('120rem', '184rem', '184rem')}
  ${$height('auto', '100vh', '100vh')}
  ${$paddingBottom('50rem', '0', '0')}

  .bg-star-wrap {
    width: 100%;
    height: 100vh;

    @media (max-width: ${phoneSize}) {
      /* min-height: 130vh; */
      /* height: 200vw; */
      height: 100%;
    }

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

  .banner-container {
    ${$width('100%', '100%', '1440rem')}

    @media (min-width: 1280px) and (max-width: 1550px) {
      width: 100%;
    }

    height: 100%;
    position: relative;
    margin: 0 auto;
    ${flexPos('flex-start')}

    @media (max-width: ${phoneSize}) {
      ${flexPos('center')}
      flex-direction: column;
    }

    @media (min-width: ${phoneSize}) and (max-width: 1024px) {
      align-items: flex-start;
    }

    .buy-btn {
      background-color: #fff;
      ${$fontSize('10rem', '16rem', '16rem')}
      ${$height('30rem', '50rem', '50rem')}
      ${$paddingX('37rem', '65rem', '65rem')}
      ${$marginTop('27rem', '40rem', '40rem')}
      ${$borderRadius('6rem', '10rem', '10rem')}

      @media (max-width: ${phoneSize}) {
        margin: 27rem auto;
      }
    }

    .tokenomics {
      ${$fontSize('18rem', '24rem', '24rem')}
      color: #fff;
      position: relative;
      width: fit-content;
      ${$paddingBottom('5rem', '10rem', '10rem')}

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3rem;
        background-color: #fff;
      }
    }
  }

  .links {
    position: relative;

    ${flexPos('center')}

    @media (min-width: ${phoneSize}) {
      position: absolute;
      right: 105rem;
      bottom: 160rem;
      z-index: 3;
    }
  }
`;

const Banner = () => {
  const appStore = useAppStore();

  return (
    <BannerWrap>
      <div className="bg-star-wrap">
        <VideoComp src={require('@/assets/video/bg-star.mp4')} className="bg-star" />
      </div>

      <main className="banner-container text-center md:text-left">
        <div className="relative z-2">
          <div className="text-64 md:text-136 text-yellow font-bold ChildWriting-Regular">
            DOGELINK
          </div>
          <div className="text-22 md:text-42 ChildWriting-Regular font-bold">
            Savior of the Persecuted Puppy
          </div>
          <button className="buy-btn Poppins-SemiBold">BUY NOW</button>

          {appStore.curDevice === 'phone' && (
            <img className="w-[90%]" src={require('@img/home/banner/banner-doge.png')} alt="" />
          )}

          <div className="px-30 md:px-0 mt-20 md:mt-166 flex justify-between items-center">
            <a className="tokenomics Poppins-Medium">TOKENOMICS</a>

            {appStore.curDevice === 'phone' && (
              <div className="links">
                <img src={require('@img/common/icon-tg.svg')} alt="" className="w-30" />
                <img src={require('@img/common/icon-x.svg')} alt="" className="w-30 ml-24" />
              </div>
            )}
          </div>
        </div>

        {appStore.curDevice !== 'phone' && (
          <img
            className="w-600 lg:w-846 ml-100 absolute right-0 bottom-0 z-2"
            src={require('@img/home/banner/banner-doge.png')}
            alt=""
          />
        )}

        {appStore.curDevice !== 'phone' && (
          <div className="links">
            <img src={require('@img/common/icon-tg.svg')} alt="" className="w-30" />
            <img src={require('@img/common/icon-x.svg')} alt="" className="w-30 ml-24" />
          </div>
        )}
      </main>
    </BannerWrap>
  );
};

export default Banner;
