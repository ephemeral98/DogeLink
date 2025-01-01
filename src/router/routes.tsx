// import loadable from 'react-loadable'; //引入这个loadable，使用这个来加载路由
import Home from '@/pages/Home/index';
import About from '@/pages/About';
import { ReactElement } from 'react';

// 如果你是js就直接无视这个interface的定义
export interface IRouterItem {
  name?: string;
  path: string;
  children?: Array<IRouterItem>;
  element: ReactElement;
  meta: {};
  redirect?: string;
}
const LoadingTip = () => <div>加载中....</div>;

// 首页
// const Home = loadable({
//   loader: () => import('@/pages/Home/index'), // 需要异步加载的路由
//   loading: LoadingTip, // 这是一个的提示
// });

const router: IRouterItem[] = [
  {
    path: '/',
    element: <Home />,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/about',
    element: <About />,
    meta: {},
  },
];

export interface IRouterBeforeParams {
  pathname: string;
  meta: {
    title?: string;
    requireAuth?: string;
  };
}

export type TRouterBefore = (routerItem: IRouterBeforeParams) => Promise<string> | any;
/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
const onRouterBefore: TRouterBefore = ({ pathname, meta }: IRouterBeforeParams) => {};

export { router, onRouterBefore };
