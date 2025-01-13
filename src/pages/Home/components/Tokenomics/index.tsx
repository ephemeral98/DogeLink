import React from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import { $paddingX, $width, padSize, phoneSize } from '@/styled/mediaSize';
import { buyNowLink } from '@/utils';

const TokenomicsWrap = styled.div`
  background-size: cover;
  padding: 83rem 0 120rem;
  position: relative;
  ${$paddingX('30rem', '0', '0')}

  .token-supply {
    ${$width('362rem', '613rem', '613rem')}
    padding: 80rem 50rem 80rem;
    border-radius: 20rem;
    color: #fff;
    background-image: url(${require('@img/home/bg-round.png')});
    background-size: 100% 100%;

    @media (max-width: ${phoneSize}) {
      background-image: url(${require('@img/home/mob-bg-round.png')});
      padding: 45rem 50rem 45rem;
    }
  }

  .addr {
    border-radius: 20rem;
    font-size: 21rem;
    border: solid 1px #ffd100;
  }

  .view-into-solana {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 40rem;
    width: fit-content;

    @media (max-width: ${padSize}) {
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
  const [addr, setAddr] = useState('6oZYqMfGpk6xANmXqsTVGVMtC8eP9vExiwseE3ZBpump');

  return (
    <TokenomicsWrap id="Tokenomics">
      <HomeTitle>Tokenomics</HomeTitle>

      <main className="flex-center mt-24 md:mt-70 flex-col lg:flex-row">
        <section className="token-supply mr-0 md:mr-26 z-9">
          <div className="text-18 md:text-24 font-500 text-center Poppins-Bold">Token Supply</div>
          <div className="mt-2 text-24 md:text-36 font-500 text-center Poppins-SemiBold">
            1,000,000,000
          </div>
          <button
            onClick={() => buyNowLink()}
            className="mx-auto mt-42 bg-yellow h-50 px-65 rounded-10rem text-16 font-700 Poppins-Bold buy-now"
          >
            BUY NOW
          </button>

          <div className="flex-center mt-31">
            <div className="text-12 Poppins-SemiBold">Powered by</div>
            <img src={require('@img/common/img-solana.png')} alt="" className="w-101 ml-9" />
          </div>
        </section>

        <section className="mt-26 md:mt-0">
          <div className="text-center lg:text-left text-21 md:text-21 font-600 ChildWriting-Regular">
            <div className="text-yellow">
              As friends, you awesome humans need to grab my tokens.
            </div>
          </div>

          <div className="addr flex-center h-39 md:h-48 px-20 mt-20 relative z-99">
            <div className="ParrickHandSC text-yellow mr-10 text-10 md:text-21 font-400">
              {addr}
            </div>
            <img
              data-clipboard-text={addr}
              src={require('@img/common/icon-copy.svg')}
              alt=""
              className="w-13 md:w-22 copy-btn"
            />
          </div>

          <a className="view-into-solana">
            <span className="underline Poppins-Medium text-yellow">VIEW IN SOLANA</span>
            <img src={require('@img/common/icon-arrow-bar.svg')} alt="" className="w-22 ml-10" />
          </a>
        </section>
      </main>
    </TokenomicsWrap>
  );
};

export default Tokenomics;
