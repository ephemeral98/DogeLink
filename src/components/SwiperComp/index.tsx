import SwiperCore, { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.css';

// 安装所需的 Swiper 组件
SwiperCore.use([Navigation]);

interface IProps {
  children: React.ReactNode;
  navigation?: {
    nextEl: string;
    prevEl: string;
  };
  style?: React.CSSProperties;
}

const swiperOptions = {
  autoplay: {
    delay: 3000, // 自动轮播间隔时间
    disableOnInteraction: false,
    pauseOnMouseEnter: false, // 鼠标移入暂停
    reverseDirection: false, // 往返跑
  },
  loop: true,
  speed: 500, //切换过渡速度
  mousewheel: true, // 鼠标滚轮
  slidesPerView: 3, //设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
  centeredSlides: true, //设置slide居中
  spaceBetween: 20, // 每个item的间距，也可以用scss穿透实现
  coverflowEffect: {
    rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
    stretch: -10, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
    depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
    modifier: 1, //depth和rotate和stretch的倍率，相当于 depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
    slideShadows: false, //开启slide阴影。默认 true。
  },
  observer: true, //修改swiper自己或子元素时，自动初始化swiper
  observeParents: true, //修改swiper的父元素时，自动初始化swiper
  observeSlideChildren: true,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  initialSlide: 0,
};

const SwiperComp = (props: IProps) => {
  const navigation = props.navigation || {
    nextEl: '.slide-arrow.right',
    prevEl: '.slide-arrow.left',
  };

  return (
    <Swiper
      slidesPerView={swiperOptions.slidesPerView}
      style={{ ...props.style }}
      loop={true}
      navigation={navigation}
      autoplay={swiperOptions.autoplay}
      speed={swiperOptions.speed}
      spaceBetween={swiperOptions.spaceBetween}
      coverflowEffect={swiperOptions.coverflowEffect}
      centeredSlides={swiperOptions.centeredSlides}
      mousewheel={swiperOptions.mousewheel}
      observer={swiperOptions.observer}
      observeParents={swiperOptions.observeParents}
      observeSlideChildren={swiperOptions.observeSlideChildren}
      initialSlide={swiperOptions.initialSlide}
    >
      {props.children}
    </Swiper>
  );
};

export default SwiperComp;
