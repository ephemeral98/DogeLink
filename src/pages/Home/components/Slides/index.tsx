import React, { Suspense } from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import PcSlides from './PcSlides';
import MobSlides from './MobSlides';
import useAppStore from '@/store/appStore';
import { $paddingX, $paddingY, phoneSize } from '@/styled/mediaSize';

const SlidesWrap = styled.div`
  background-image: url(${require('@img/slides/bg-slides.png')});
  /* background-size: 100% auto; */
  background-size: cover;
  background-position: 100% 120%;
  background-color: #f3c315;
  background-repeat: no-repeat;

  ${$paddingX('0', '23rem', '23rem')}
  ${$paddingY('40rem', '68rem', '68rem')}

  @media (max-width: ${phoneSize}) {
    background-size: 100%;
    background-position: 100% 0%;
  }
`;

const Slides = () => {
  const appStore = useAppStore();

  const [slideList, setSlideList] = useState([
    {
      id: 0,
      img: require('@img/slides/slides-1.png'),
    },
    {
      id: 1,
      img: require('@img/slides/slides-2.png'),
    },
    {
      id: 2,
      img: require('@img/slides/slides-3.png'),
    },
  ]);

  return (
    <SlidesWrap>
      <HomeTitle>The Doge Armies</HomeTitle>

      <Suspense>
        {appStore.curDevice === 'phone' ? (
          <MobSlides slideList={slideList} />
        ) : (
          <PcSlides slideList={slideList} />
        )}
      </Suspense>
    </SlidesWrap>
  );
};

export default Slides;
