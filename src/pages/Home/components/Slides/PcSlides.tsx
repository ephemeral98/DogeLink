import SwiperComp from '@/components/SwiperComp';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';

const PcSlidesWrap = styled.div`
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
`;

const PcSlides: FC<{ slideList: any[] }> = ({ slideList }) => {
  return (
    <PcSlidesWrap>
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
    </PcSlidesWrap>
  );
};

export default PcSlides;
