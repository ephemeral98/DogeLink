import React from 'react';
import Banner from './components/Banner';
import { styled } from 'styled-components';
import Slides from './components/Slides';
import ToTheMoon from './components/ToTheMoon';
import Tokenomics from './components/Tokenomics';
import Doomsday from './components/Doomsday';
import Gallery from './components/Gallery';
import BeHold from './components/BeHold';
import useAppStore from '@/store/appStore';

const HomeWrap = styled.div``;

const Home = () => {
  const appStore = useAppStore();

  return (
    <HomeWrap>
      <Banner />

      <Gallery />

      <img src={require('@img/home/doge-eat.jpg')} alt="" className="w-full mt-60" />

      {/* <Slides /> */}

      {/* <ToTheMoon /> */}

      <Tokenomics />

      <BeHold />
    </HomeWrap>
  );
};

export default Home;
