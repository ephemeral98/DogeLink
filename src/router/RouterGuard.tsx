import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import Guard from './Guard';
import { IRouterBeforeParams, IRouterItem, TRouterBefore } from './routes';

let handleRouteBefore: TRouterBefore | null = null;

// 设置路由导航守卫函数
function setRouteBefore(fn: (routerItem: IRouterBeforeParams) => void) {
  handleRouteBefore = fn;
}

// 路由懒加载
function lazyLoad(importFn: () => Promise<{ default: ComponentType<any> }>, meta: {}) {
  meta = meta || {};
  const Element = React.lazy(importFn);
  const lazyElement = (
    <React.Suspense>
      <Element _meta={meta} />
    </React.Suspense>
  );

  return (
    <Guard
      element={lazyElement}
      meta={meta}
      handleRouteBefore={handleRouteBefore as () => Promise<{ default: ComponentType<any> }>}
    />
  );
}

// 路由配置列表数据转换
function transformRoutes(routes: IRouterItem[]) {
  const list: IRouterItem[] = [];
  routes.forEach((route) => {
    const obj = { ...route };
    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} replace={true} />;
    }
    if (obj.children) {
      obj.children = transformRoutes(obj.children);
    }
    if (obj.element) {
      obj.element = (
        <Guard element={obj.element} meta={obj.meta} handleRouteBefore={handleRouteBefore!} />
      );
    }
    list.push(obj);
  });

  return list;
}

export { setRouteBefore, transformRoutes };
