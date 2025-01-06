import React from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import { $paddingX, $width, phoneSize } from '@/styled/mediaSize';

const TokenomicsWrap = styled.div`
  background-image: url(${require('@img/home/bg-tokenomics.png')});
  background-size: cover;
  padding: 83rem 0 120rem;
  position: relative;
  ${$paddingX('30rem', '0', '0')}

  .token-supply {
    ${$width('333rem', '447rem', '447rem')}
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

  .view-into-solana {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 40rem;
    width: fit-content;

    @media (max-width: ${phoneSize}) {
      margin: 40rem auto 0;
    }
  }

  .talker {
    position: absolute;
    left: 55%;
    bottom: 0;
    z-index: 9;
  }

  .buy-now {
    transition: transform 0.5s;

    @media (min-width: ${phoneSize}) {
      transition: all 0.5s;
    }

    &:hover {
      transform: rotateZ(-5deg) scale(1.1);
    }
  }
`;

const Tokenomics = () => {
  const [addr, setAddr] = useState('EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm');

  return (
    <TokenomicsWrap id="Tokenomics">
      <HomeTitle>Tokenomics</HomeTitle>

      <img
        src={require('@img/home/img-bear.png')}
        alt=""
        className="w-187 md:w-386 absolute left-0 bottom-0"
      />
      <div className="talker">
        <img
          src={require('@img/home/img-fox.png')}
          alt=""
          className="w-148 md:w-361 absolute left-0 bottom-0"
        />
        <img
          src={require('@img/home/fox-talk.png')}
          alt=""
          className="w-214 md:w-458 absolute left-[-160rem] bottom-[-50rem] md:left-[-330rem] md:bottom-[-90rem]"
        />
      </div>
      <img
        src={require('@img/home/img-elon.png')}
        alt=""
        className="w-256 md:w-386 absolute right-0 bottom-0"
      />

      <main className="flex-center mt-70 flex-col md:flex-row">
        <section className="token-supply mr-0 md:mr-26 z-9">
          <div className="text-18 md:text-24 font-500 text-center Poppins-Bold">Token Supply</div>
          <div className="mt-2 text-24 md:text-36 font-500 text-center Poppins-SemiBold">
            100,000,000,000,000
          </div>
          <button className="mx-auto mt-42 bg-yellow h-50 px-65 rounded-10rem text-16 font-700 Poppins-Bold buy-now">
            BUY NOW
          </button>

          <div className="flex-center mt-31">
            <div className="text-12 Poppins-SemiBold">Powered by</div>
            <img src={require('@img/common/img-solana.png')} alt="" className="w-101 ml-9" />
          </div>
        </section>

        <section className="mt-26 md:mt-0">
          <div className="text-center md:text-left text-18 md:text-21 font-600 Poppins-Bold">
            <div>As friends, you awesome humans</div>
            <div>need to grab my tokens.</div>
          </div>

          <div className="addr flex-center h-39 md:h-48 px-20 mt-20 relative z-99">
            {/* <div className="ParrickHandSC mr-10 text-10 md:text-21 font-400">{addr}</div>
            <img
              data-clipboard-text={addr}
              src={require('@img/common/icon-copy.svg')}
              alt=""
              className="w-13 md:w-22 copy-btn"
            /> */}
          </div>

          <a className="view-into-solana">
            <span className="underline Poppins-Bold">VIEW IN SOLANA</span>
            <img src={require('@img/common/icon-arrow-bar.svg')} alt="" className="w-22 ml-10" />
          </a>
        </section>
      </main>
    </TokenomicsWrap>
  );
};

export default Tokenomics;
