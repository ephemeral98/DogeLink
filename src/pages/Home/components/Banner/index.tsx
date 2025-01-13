import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';
import VideoComp from '@/components/VideoComp';

const BannerWrap = styled.div`
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

  .banner-container {
    width: 1440rem;
    height: 100%;
    position: relative;
    margin: 0 auto;
    ${flexPos('flex-start')}

    .buy-btn {
      margin-top: 40rem;
      height: 50rem;
      border-radius: 10rem;
      padding: 0 65rem;
      background-color: #fff;
      font-size: 16rem;
    }

    .tokenomics {
      font-size: 24rem;
      color: #fff;
      margin-top: 166rem;
      position: relative;
      width: fit-content;
      padding-bottom: 10rem;

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
`;

const Banner = () => {
  return (
    <BannerWrap>
      <div className="bg-star-wrap">
        <VideoComp src={require('@/assets/video/bg-star.mp4')} className="bg-star" />
      </div>

      <main className="banner-container">
        <div className="relative z-2">
          <div className="text-136 text-yellow font-bold ChildWriting-Regular">DOGELINK</div>
          <div className="text-42 ChildWriting-Regular font-bold">
            Savior of the Persecuted Puppy
          </div>
          <button className="buy-btn Poppins-SemiBold">BUY NOW</button>

          <a className="tokenomics text-24 underline-white Poppins-Medium">TOKENOMICS</a>
        </div>

        <img
          className="w-846 ml-100 absolute right-0 bottom-0 z-2"
          src={require('@img/home/banner/banner-doge.png')}
          alt=""
        />

        <div className="absolute right-105 bottom-160 z-3 flex-center">
          <img src={require('@img/common/icon-tg.svg')} alt="" className="w-30" />
          <img src={require('@img/common/icon-x.svg')} alt="" className="w-30 ml-24" />
        </div>
      </main>
    </BannerWrap>
  );
};

export default Banner;
