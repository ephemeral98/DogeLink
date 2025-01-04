import { $paddingX, $width } from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import { styled } from 'styled-components';

const TopbarWrap = styled.div`
  ${$width('100%', '80%', '80%')}
  ${flexPos('space-between')}
  padding: 24px 100px 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  width: 100%;
  z-index: 99;
  /* background-color: pink; */

  ${$paddingX('10rem', '100px', '100px')}
`;

const Topbar = () => {
  return (
    <TopbarWrap>
      <div className="flex-center">
        <img src={'/logo-doge.png'} alt="" className="w-42 md:w-81" />
        <div className="ml-10 text-14 md:text-24 font-800">DOGELINK</div>
      </div>

      <div className="flex items-center">
        <div className="flex-center">
          <div className="text-12 md:text-14 font-700 whitespace-nowrap">DOGER ARMY</div>
          <img src={'/logo-doge.png'} alt="" className="w-17" />
        </div>

        <div className="flex-center ml-4 md:ml-52">
          <div className="text-12 md:text-14 font-700 whitespace-nowrap">TO DA MOON</div>
          <img src={'/logo-doge.png'} alt="" className="w-17" />
        </div>
      </div>
    </TopbarWrap>
  );
};

export default Topbar;
