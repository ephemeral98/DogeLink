import { flexPos } from '@/styled/mixin';
import { styled } from 'styled-components';

const TopbarWrap = styled.div`
  ${flexPos('space-between')}
  padding: 24px 100px 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
`;

const Topbar = () => {
  return (
    <TopbarWrap>
      <div className="flex-center">
        <img src={'/logo-doge.png'} alt="" className="w-81" />
        <div className="ml-10 text-24 font-800">DOGELINK</div>
      </div>

      <div className="flex items-center">
        <div className="flex-center">
          <div className="font-700">DOGER ARMY</div>
          <img src={'/logo-doge.png'} alt="" className="w-17" />
        </div>

        <div className="flex-center ml-52">
          <div className="font-700">DOGER ARMY</div>
          <img src={'/logo-doge.png'} alt="" className="w-17" />
        </div>
      </div>
    </TopbarWrap>
  );
};

export default Topbar;
