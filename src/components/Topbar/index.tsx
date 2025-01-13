import { $paddingX, $width } from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import { styled } from 'styled-components';
import slideIntoView from '@/utils/slideIntoView';

const TopbarWrap = styled.div`
  ${$width('100%', '80%', '80%')}
  ${flexPos('space-between')}
  padding: 24rem 100rem 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  width: 100%;
  z-index: 99;

  ${$paddingX('10rem', '1vw', '100rem')}
`;

const Topbar = () => {
  return (
    <TopbarWrap>
      <div className="flex-center">
        <img src={'/logo-doge.png'} alt="" className="w-38 md:w-57" />
        <div className="ml-10 text-24 font-800 Poppins-Bold">DOGELINK</div>
      </div>

      <button
        onClick={() => {
          slideIntoView(document.getElementById('gallery'), window, 104);
        }}
        className="uppercase h-30 md:h-48 px-15 md:px-24 bg-yellow rounded-100 text-12 md:text-16"
      >
        Community Gallery
      </button>
    </TopbarWrap>
  );
};

export default Topbar;
