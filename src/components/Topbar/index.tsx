import { $paddingX, $width } from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import { styled } from 'styled-components';
import slideIntoView from '@/utils/slideIntoView';
import useAppStore from '@/store/appStore';

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

  .links {
    margin-right: 40rem;
    ${flexPos('center')}
  }
`;

const Topbar = () => {
  const appStore = useAppStore();

  return (
    <TopbarWrap>
      <div className="flex-center">
        <img src={'/icon-doge.png'} alt="" className="w-38 md:w-57" />
        <div className="ml-10 text-24 font-800 Poppins-Bold">DOGELINK</div>
      </div>

      <div className="flex-center">
        {appStore.curDevice !== 'phone' && (
          <div className="links">
            <img
              onClick={() => window.open('https://t.me/DogeLinkSOL')}
              src={require('@img/common/icon-tg.svg')}
              alt=""
              className="w-30 cursor-pointer"
            />
            <img
              onClick={() => window.open('https://x.com/DogerIsBack')}
              src={require('@img/common/icon-x.svg')}
              alt=""
              className="w-30 ml-24 cursor-pointer"
            />
          </div>
        )}

        <button
          onClick={() => {
            slideIntoView(document.getElementById('gallery'), window, 104);
          }}
          className="uppercase h-30 md:h-48 px-15 md:px-24 bg-yellow rounded-100 text-12 md:text-16"
        >
          Community Gallery
        </button>
      </div>
    </TopbarWrap>
  );
};

export default Topbar;
