import React, { FC, ForwardedRef } from 'react';
import { styled } from 'styled-components';

interface IVideoComp {
  src: string;
  className?: string;
  onLoadedData?: () => void;
  handleEnter?: () => void;
  loaded?: () => void;
  onError?: () => void;
}

const VideoComp = forwardRef((props: IVideoComp, ref: ForwardedRef<any>) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  /**
   * 点击了进入按钮,或者视频播放完
   */
  const handleEnter = () => {};

  const loaded = () => {};

  const onError = () => {};

  useImperativeHandle<HTMLFormElement, any>(ref, () => ({
    // 手动校验
  }));
  return (
    <video
      loop
      autoPlay
      className={`home-video ${!!props.className ? props.className : ''}`}
      ref={videoRef}
      muted
      onEnded={handleEnter}
      x5-video-player-fullscreen="true"
      x5-playsinline="true"
      webkit-playsinline="true"
      playsInline
      preload="auto"
      onLoadedData={loaded}
      onError={onError}
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
});

export default VideoComp;
