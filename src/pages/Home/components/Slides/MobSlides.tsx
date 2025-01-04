import SwiperComp from '@/components/SwiperComp';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';

const MobSlidesWrap = styled.div`
  width: 100vw;
  display: flex;
  overflow: auto;
  margin-top: 40rem;
  padding: 0 30rem;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .img-content {
    width: 148rem;
    height: 148rem;

    &:not(:first-child) {
      margin-left: 23rem;
    }
  }
`;

const MobSlides: FC<{ slideList: any[] }> = ({ slideList }) => {
  return (
    <MobSlidesWrap>
      {slideList?.map((item, inx) => (
        <img className="img-content" src={item.img} alt="" key={inx} />
      ))}
    </MobSlidesWrap>
  );
};

export default MobSlides;
