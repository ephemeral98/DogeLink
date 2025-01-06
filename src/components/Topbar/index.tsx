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

      <div className="flex items-center">
        <div
          className="flex-center"
          onClick={() => {
            slideIntoView(document.getElementById('dogeArmies'), window, 104);
          }}
        >
          <div className="text-12 md:text-14 font-700 whitespace-nowrap Poppins-Bold cursor-pointer">
            DOGER ARMY
          </div>
          <img src={require('@img/common/doge.gif')} alt="" className="w-17" />
        </div>

        <div
          className="flex-center ml-4 md:ml-52"
          onClick={() => {
            slideIntoView(document.getElementById('toTheMoon'), window, 104);
          }}
        >
          <div className="text-12 md:text-14 font-700 whitespace-nowrap Poppins-Bold cursor-pointer">
            TO DA MOON🚀
          </div>
        </div>
      </div>
    </TopbarWrap>
  );
};

export default Topbar;
