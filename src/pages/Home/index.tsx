import React from 'react';
import Banner from './components/Banner';
import { styled } from 'styled-components';
import Slides from './components/Slides';
import ToTheMoon from './components/ToTheMoon';
import Tokenomics from './components/Tokenomics';
import Doomsday from './components/Doomsday';
import ToTop from '@/components/ToTop';
import Gallery from './components/Gallery';

const HomeWrap = styled.div``;

const Home = () => {
  return (
    <HomeWrap>
      <ToTop />

      <Banner />

      <Gallery />

      <img src={require('@img/home/doge-eat.jpg')} alt="" className="w-full mt-60" />

      {/* <Slides /> */}

      {/* <ToTheMoon /> */}

      <Tokenomics />

      {/* <Doomsday /> */}
    </HomeWrap>
  );
};

export default Home;
