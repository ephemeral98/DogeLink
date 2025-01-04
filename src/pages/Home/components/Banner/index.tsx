import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';
import Button from '@/components/Buttons';
import Marquee from '@/components/Marquee';
import { $bottom, $height, $paddingX, $width } from '@/styled/mediaSize';

const BannerWrap = styled.div`
  .banner-container {
    padding: 81rem 100rem 0;
    position: relative;
    ${$paddingX('30rem', '100rem', '100rem')}

    .banner-main {
      ${$width('100%', '80%', '80%')}
      ${flexPos('space-between')}
      margin: 0 auto;
    }

    .tokenomics-text {
      position: relative;

      .text-1,
      .text-2 {
        transition: all 0.2s;
        transform: translate(0, -50%);
      }

      .text-1 {
        opacity: 1;
        position: absolute;
        top: 0;
      }

      .text-2 {
        opacity: 0;
        position: absolute;
        top: 0;
      }

      &:hover {
        .text-1 {
          opacity: 0;
        }

        .text-2 {
          opacity: 1;
        }
      }
    }

    .doge-wrap {
      /* width: 250rem;
      height: 250rem;
      position: relative; */

      .doge-1,
      .doge-2 {
        /* position: absolute;
        left: 0;
        top: 0; */
      }

      .doge-1 {
        display: block;
      }

      .doge-2 {
        display: none;
      }

      &:hover {
        .doge-1 {
          display: none;
        }

        .doge-2 {
          display: block;
        }
      }
    }

    .social-media {
      ${flexPos('center')}
      flex-direction: column;
      > img:not(:first-child) {
        margin-top: 20rem;
      }
    }

    .buy-now {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0 60rem;
      z-index: 99;
      ${$height('46rem', '50rem', '50rem')}
      ${$bottom('-70rem', '-130rem', '-130rem')}
      white-space: nowrap;
      transition: all 0.5s;

      &:hover {
        transform: translate(-50%, 0) rotateZ(-5deg) scale(1.1);
      }
    }
  }
`;

const Banner = () => {
  return (
    <BannerWrap className="bg-yellow">
      <div className="banner-container">
        <main className="banner-main">
          {/* <div className="flex justify-center items-center flex-col Gilroy-Bold w-20">
            <div>T</div>
            <div>O</div>
            <div>K</div>
            <div>E</div>
            <div>N</div>
            <div>O</div>
            <div>M</div>
            <div>I</div>
            <div>C</div>
            <div>S</div>
          </div> */}

          <div className="tokenomics-text">
            <img
              src={require('@img/home/tokenomics-text.png')}
              alt=""
              className="w-20 md:w-31 text-1"
            />
            <img
              src={require('@img/home/tokenomics-text-ite.png')}
              alt=""
              className="w-20 md:w-31 text-2"
            />
          </div>

          <div className="doge-wrap w-250 h-250 md:w-558 md:h-558">
            <img src={'/logo-doge.png'} alt="" className="doge-1 w-250 h-250 md:w-558 md:h-558" />
            <img
              src={require('@img/common/doge-down.png')}
              alt=""
              className="doge-2 w-250 h-250 md:w-558 md:h-558"
            />
          </div>

          <div className="social-media">
            <img src={require('@img/common/icon-discord.svg')} alt="" className="w-20 md:w-26" />
            <img src={require('@img/common/icon-x.svg')} alt="" className="w-20 md:w-26" />
            <img src={require('@img/common/icon-tg.svg')} alt="" className="w-20 md:w-26" />
            <img src={require('@img/common/icon-tiktok.svg')} alt="" className="w-20 md:w-26" />
            <img src={require('@img/common/icon-ins.svg')} alt="" className="w-20 md:w-26" />
          </div>
        </main>

        <Button className="buy-now Poppins-Bold">BUY NOW</Button>
      </div>

      <div className="Poppins text-#ffffffce font-700 text-42 md:text-132 text-center leading-[1] md:leading-[0.8] whitespace-nowrap Poppins-ExtraBold">
        <div>Savior of the</div>
        <div>Persecuted Puppy</div>
      </div>

      <Marquee>
        Supreme Adorable Overlord of the Woof Realm • Butt-Sniffing Enthusiast • Conqueror of
        Alternate Realms • Bone-Crushing Battle Commander • Sofa Cushion Destroyer • Lamenting Table
        Leg Artist • Ascendant Leader of the Canine World • Venerable and Mighty Grand Marshal •
      </Marquee>
    </BannerWrap>
  );
};

export default Banner;
