import React, { Suspense } from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import useAppStore from '@/store/appStore';
import {
  $fontSize,
  $marginTop,
  $paddingBottom,
  $paddingX,
  $paddingY,
  padSize,
  phoneSize,
} from '@/styled/mediaSize';

const GalleryWrap = styled.div`
  ${$marginTop('70rem', '118rem', '118rem')}

  .gallery-list {
    ${$marginTop('25rem', '60rem', '60rem')}
    display: grid;
    place-content: center;
    place-items: center;
    grid-gap: 23rem;
    grid-template-columns: repeat(3, auto);

    @media (max-width: ${padSize}) {
      padding: 0 30rem;
      grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 838px) {
      padding: 0 30rem;
      grid-template-columns: repeat(1, auto);
    }
  }

  .see-more {
    margin: 60rem auto 0;

    @media (max-width: ${phoneSize}) {
      margin: 24rem auto 0;
    }

    ${$fontSize('18rem', '24rem', '24rem')}
    color: #fff;
    position: relative;
    width: fit-content;
    ${$paddingBottom('5rem', '10rem', '10rem')}

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3rem;
      background-color: #fff;
    }
  }
`;

const Gallery = () => {
  const appStore = useAppStore();

  const [galleries, setGalleries] = useState([
    {
      id: 0,
      img: require('@img/home/gallery/gallery-1.png'),
    },
    {
      id: 1,
      img: require('@img/home/gallery/gallery-2.png'),
    },
    {
      id: 2,
      img: require('@img/home/gallery/gallery-3.png'),
    },
    {
      id: 3,
      img: require('@img/home/gallery/gallery-4.png'),
    },
    {
      id: 4,
      img: require('@img/home/gallery/gallery-5.png'),
    },
    {
      id: 5,
      img: require('@img/home/gallery/gallery-6.png'),
    },
  ]);

  return (
    <GalleryWrap id="gallery">
      <HomeTitle>DOGE ARMY GALLERY</HomeTitle>

      <main className="gallery-list">
        {galleries.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" className="w-full md:w-404" />
          </div>
        ))}
      </main>

      <a className="see-more Poppins-Medium">SEE MORE</a>
    </GalleryWrap>
  );
};

export default Gallery;
