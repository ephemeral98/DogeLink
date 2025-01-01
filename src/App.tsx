import '@arco-design/web-react/dist/css/arco.css';
import { router, onRouterBefore } from '@/router/routes';
import { useRoutes } from 'react-router';
import { transformRoutes, setRouteBefore } from '@/router/RouterGuard';
import initRem from './utils/initRem';
import { useNavigate } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { config } from './contracts/config';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    initRem();
  }, []);

  setRouteBefore(onRouterBefore);
  const elements = useRoutes(transformRoutes(router));
  return <div className="app-container">{elements}</div>;
}

export default App;
