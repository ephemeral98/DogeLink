import React from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';

const TokenomicsWrap = styled.div`
  background-image: url(${require('@img/home/bg-tokenomics.png')});
  background-size: cover;
  padding: 83rem 0 120rem;
  position: relative;

  .token-supply {
    width: 447rem;
    padding: 50rem 30rem 30rem;
    border-radius: 20rem;
    background-color: #000;
    color: #fff;
  }

  .addr {
    background-color: #ffeaa0;
    border-radius: 20rem;
    font-size: 21rem;
  }
`;

const Tokenomics = () => {
  return (
    <TokenomicsWrap>
      <HomeTitle>Tokenomics</HomeTitle>

      <img
        src={require('@img/home/img-bear.png')}
        alt=""
        className="w-386 absolute left-0 bottom-0"
      />
      <div className="absolute left-[55%] bottom-0">
        <img
          src={require('@img/home/img-fox.png')}
          alt=""
          className="w-361 absolute left-0 bottom-0"
        />
        <img
          src={require('@img/home/fox-talk.png')}
          alt=""
          className="w-458 absolute left-[-330rem] bottom-[-90rem]"
        />
      </div>
      <img
        src={require('@img/home/img-elon.png')}
        alt=""
        className="w-386 absolute right-0 bottom-0"
      />

      <main className="flex-center mt-70">
        <section className="token-supply mr-26">
          <div className="text-24 font-500 text-center">Token Supply</div>
          <div className="mt-2 text-36 font-500 text-center">100,000,000,000,000</div>
          <button className="mx-auto mt-42 bg-yellow h-50 px-65 rounded-10rem text-16 font-700 Poppins">
            BUY NOW
          </button>

          <div className="flex-center mt-31">
            <div className="text-12">Powered by</div>
            <img src={require('@img/common/img-solana.png')} alt="" className="w-101" />
          </div>
        </section>

        <section className="">
          <div className="text-21 font-600 Poppins">
            <div>As friends, you awesome humans</div>
            <div>need to grab my tokens.</div>
          </div>

          <div className="addr flex-center h-48 px-20 mt-20">
            <div className="ParrickHandSC mr-10 text-21 font-400">
              EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm
            </div>
            <img src={require('@img/common/icon-copy.svg')} alt="" className="w-22" />
          </div>

          <a className="flex items-center justify-start mt-40" style={{ width: 'fit-content' }}>
            <span className="underline">VIEW IN SOLANA</span>
            <img
              src={require('@img/common/icon-arrow-bar.svg')}
              alt=""
              className="w-22 ml-10 copy-btn"
            />
          </a>
        </section>
      </main>
    </TokenomicsWrap>
  );
};

export default Tokenomics;
