import React, { Suspense } from 'react';
import { styled } from 'styled-components';
import HomeTitle from '@/components/HomeTitle';
import useAppStore from '@/store/appStore';
import { $paddingX, $paddingY, phoneSize } from '@/styled/mediaSize';

const GalleryWrap = styled.div`
  margin-top: 118rem;

  .gallery-list {
    margin-top: 60rem;
    display: grid;
    place-content: center;
    place-items: center;
    grid-gap: 23rem;
    grid-template-columns: repeat(3, auto);
  }

  .see-more {
    font-size: 24rem;
    color: #fff;
    position: relative;
    width: fit-content;
    padding-bottom: 10rem;
    margin: 60rem auto 0;

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
    {
      id: 3,
      img: require('@img/slides/slides-1.png'),
    },
    {
      id: 4,
      img: require('@img/slides/slides-2.png'),
    },
    {
      id: 5,
      img: require('@img/slides/slides-3.png'),
    },
  ]);

  return (
    <GalleryWrap id="dogeArmies">
      <HomeTitle>DOGE ARMY GALLERY</HomeTitle>

      <main className="gallery-list">
        {galleries.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" className="w-404" />
          </div>
        ))}
      </main>

      <a className="see-more Poppins-Medium">SEE MORE</a>
    </GalleryWrap>
  );
};

export default Gallery;
