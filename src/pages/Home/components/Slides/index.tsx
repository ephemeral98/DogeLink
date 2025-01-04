import React from 'react';
import { styled } from 'styled-components';
import SwiperComp from '@/components/SwiperComp';
import { SwiperSlide } from 'swiper/react';
import HomeTitle from '@/components/HomeTitle';

const SlidesWrap = styled.div`
  padding: 68rem 23rem;
  background-image: url(${require('@img/slides/bg-slides.png')});
  /* background-size: 100% auto; */
  background-size: cover;
  background-position: 100% 120%;
  background-color: #f3c315;
  background-repeat: no-repeat;

  .slides-content {
    width: 1200rem;
    position: relative;
    margin: 68rem auto 0;

    .img-content {
      width: 373rem;
      height: 373rem;
    }

    .slide-arrow {
      width: 50rem;
      position: absolute;
      top: 45%;
      z-index: 99;
      cursor: pointer;

      &.left {
        left: -60rem;
      }
      &.right {
        right: -45rem;
        transform: rotate(180deg);
      }
    }
  }
`;

const Slides = () => {
  const [slideList, setSlideList] = useState([
    {
      id: 0,
      img: require('@img/slides/slides-3.png'),
    },
    {
      id: 1,
      img: require('@img/slides/slides-3.png'),
    },
    {
      id: 2,
      img: require('@img/slides/slides-3.png'),
    },
    {
      id: 3,
      img: require('@img/slides/slides-3.png'),
    },
    {
      id: 4,
      img: require('@img/slides/slides-3.png'),
    },
  ]);

  return (
    <SlidesWrap>
      <HomeTitle>The Doge Armies</HomeTitle>

      <div className="slides-content">
        <SwiperComp>
          {slideList?.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="" className="img-content" />
            </SwiperSlide>
          ))}
        </SwiperComp>

        <img
          className="slide-arrow left zoomInOutSlide"
          src={require('@img/slides/icon-arrow.svg')}
          alt=""
        />

        <img
          className="slide-arrow right zoomInOutSlide"
          src={require('@img/slides/icon-arrow.svg')}
          alt=""
        />
      </div>
    </SlidesWrap>
  );
};

export default Slides;
