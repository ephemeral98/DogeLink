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
        <img src={'/logo-doge.png'} alt="" className="w-42 md:w-81" />
        <div className="ml-10 text-14 md:text-24 font-800 Poppins-ExtraBold">DOGELINK</div>
      </div>

      <button className="uppercase h-48 px-24 bg-yellow rounded-100 text-16">
        Community Gallery
      </button>
    </TopbarWrap>
  );
};

export default Topbar;
