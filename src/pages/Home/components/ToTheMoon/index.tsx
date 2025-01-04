import React, { FC } from 'react';
import { styled } from 'styled-components';
import VideoComp from '@/components/VideoComp';
import { $fontSize, $height, $width } from '@/styled/mediaSize';

interface IToTheMoon {
  className?: string;
}

const ToTheMoonWrap = styled.div`
  /* background-color: #fed100; */
  background-color: #fcd84f;
  position: relative;
  width: 100%;
  overflow-x: hidden;

  .elon-video {
    ${$height('240rem', '509rem', '509rem')}
  }

  .img-moon {
    ${$width('270rem', '478rem', '478rem')}
    position: absolute;
    right: 0;
    top: -40rem;
  }

  .to-the-moon-text {
    ${$fontSize('50rem', '213rem', '213rem')}
    position: absolute;
    top: 150rem;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: bold;
    white-space: nowrap;
    color: #f3c315;
  }

  .doge-plane {
    ${$width('270rem', '610rem', '610rem')}
    position: absolute;
    left: 50%;
    bottom: 0;
  }
`;

const ToTheMoon: FC<IToTheMoon> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  /**
   * 点击了进入按钮,或者视频播放完
   */
  const handleEnter = () => {};

  const loaded = () => {};

  const onError = () => {};
  return (
    <ToTheMoonWrap>
      <img src={require('@img/home/img-moon.png')} alt="" className="img-moon" />

      <div className="to-the-moon-text">TO THE MOON</div>

      <img src={require('@img/home/img-plane.png')} alt="" className="doge-plane" />

      <VideoComp
        className={`elon-video ${!!props.className ? props.className : ''}`}
        ref={videoRef}
        onLoadedData={loaded}
        onError={onError}
        src={require('@/assets/video/elon.mp4')}
      ></VideoComp>
    </ToTheMoonWrap>
  );
};

export default ToTheMoon;
