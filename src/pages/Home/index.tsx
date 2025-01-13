import React from 'react';
import Banner from './components/Banner';
import { styled } from 'styled-components';
import Slides from './components/Slides';
import ToTheMoon from './components/ToTheMoon';
import Tokenomics from './components/Tokenomics';
import Doomsday from './components/Doomsday';
import ToTop from '@/components/ToTop';

const HomeWrap = styled.div``;

const Home = () => {
  return (
    <HomeWrap>
      <ToTop />

      <Banner />

      {/* <Slides /> */}

      {/* <ToTheMoon /> */}

      {/* <Tokenomics /> */}

      {/* <Doomsday /> */}
    </HomeWrap>
  );
};

export default Home;
