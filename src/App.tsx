import '@arco-design/web-react/dist/css/arco.css';
import { router, onRouterBefore } from '@/router/routes';
import { useRoutes } from 'react-router';
import { transformRoutes, setRouteBefore } from '@/router/RouterGuard';
import initRem from './utils/initRem';
import Topbar from '@cps/Topbar';
import { useCopy } from '@/gHooks/index';
import Footer from './components/Footer';
import useAppStore from './store/appStore';
import { bpThrottle } from './gHooks/useDeb';
import { styled } from 'styled-components';

const AppWrap = styled.div``;

function App() {
  const appStore = useAppStore();

  useEffect(() => {
    initRem();

    appStore.setCurDevice();
    window.onresize = bpThrottle(() => {
      appStore.setCurDevice();
    });
  }, []);

  useCopy();

  setRouteBefore(onRouterBefore);
  const elements = useRoutes(transformRoutes(router));
  return (
    <AppWrap className="app-container relative">
      <Topbar />
      <div className="main-container">{elements}</div>

      <Footer />
    </AppWrap>
  );
}

export default App;
