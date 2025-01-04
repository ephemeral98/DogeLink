import '@arco-design/web-react/dist/css/arco.css';
import { router, onRouterBefore } from '@/router/routes';
import { useRoutes } from 'react-router';
import { transformRoutes, setRouteBefore } from '@/router/RouterGuard';
import initRem from './utils/initRem';
import Topbar from '@cps/Topbar';
import { useCopy } from '@/gHooks/index';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    initRem();
  }, []);

  useCopy();

  setRouteBefore(onRouterBefore);
  const elements = useRoutes(transformRoutes(router));
  return (
    <div className="app-container relative">
      <Topbar />
      <div className="main-container">{elements}</div>

      <Footer />
    </div>
  );
}

export default App;
