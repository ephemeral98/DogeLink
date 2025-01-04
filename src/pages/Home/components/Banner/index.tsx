import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';
import Button from '@/components/Buttons';
import Marquee from '@/components/Marquee';

const BannerWrap = styled.div`
  .banner-container {
    padding: 81rem 100rem 0;
    position: relative;

    .banner-main {
      ${flexPos('space-between')}
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
      bottom: 100rem;
      transform: translate(-50%, 0);
      height: 50rem;
      padding: 0 65rem;
      z-index: 99;
    }
  }
`;

const Banner = () => {
  return (
    <BannerWrap className="bg-yellow">
      <div className="banner-container">
        <main className="banner-main">
          <div className="flex justify-center items-center flex-col Gilroy-Bold w-20">
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
          </div>

          <img src={'/logo-doge.png'} alt="" className="w-558 h-558" />

          <div className="social-media">
            <img src={require('@img/common/icon-discord.svg')} alt="" className="w-26" />
            <img src={require('@img/common/icon-discord.svg')} alt="" className="w-26" />
            <img src={require('@img/common/icon-discord.svg')} alt="" className="w-26" />
            <img src={require('@img/common/icon-discord.svg')} alt="" className="w-26" />
            <img src={require('@img/common/icon-discord.svg')} alt="" className="w-26" />
          </div>
        </main>

        <div className="Poppins text-#ffffffce font-700 text-132 text-center leading-[0.8]">
          <div>Savior of the</div>
          <div>Persecuted Puppy</div>
        </div>

        <Button className="buy-now">BUY NOW</Button>
      </div>

      <Marquee>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nemo quaerat? Quibusdam modi
        fugit alias, repellendus sequi porro sapiente dignissimos. Quas et laboriosam quia
        cupiditate, doloremque amet, quis rerum modi, necessitatibus dolorum voluptatum est
        inventore saepe? Eligendi fugiat voluptate atque veniam repellat sed illum itaque deleniti
        reprehenderit earum nisi magnam reiciendis nihil beatae laboriosam ut totam illo molestiae
        cumque fugit, dignissimos magni incidunt alias nostrum. Maxime animi quisquam corrupti
        voluptate cum aperiam debitis quia eius, cupiditate, laboriosam soluta provident aspernatur,
        quod recusandae quidem? Illum distinctio aliquid nulla cum minima. Corporis aut
        exercitationem quasi dolorum odio quam fugit ea, unde dicta!
      </Marquee>
    </BannerWrap>
  );
};

export default Banner;
