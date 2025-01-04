import {
  useCallback,
  useEffect,
  useState,
  useRef,
  useReducer,
  DispatchWithoutAction,
  MutableRefObject,
} from 'react';

import clipboard from 'clipboard';
import { Message } from '@arco-design/web-react';

/**
 * 类似vue的nextTick，页面渲染前的临门一脚
 * @param callBack
 */
export const useNextTick = (callBack: () => void) => {
  useEffect(() => {
    setTimeout(() => {
      callBack();
    }, 0);
  }, []);
};

/**
 * 获取同步值的函数
 * @param callback 回调函数
 */
export const useSyncCallback = (callback: () => void) => {
  const [proxyState, setProxyState] = useState({ current: false });

  const Func = useCallback(() => {
    setProxyState({ current: true });
  }, [proxyState]);

  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false });
  }, [proxyState]);

  useEffect(() => {
    proxyState.current && callback();
  }, [proxyState]);

  return Func;
};

/**
 * 立即更新状态
 */
export const useUpdateRef = <T>(val: T): [MutableRefObject<T>, DispatchWithoutAction] => {
  const valState = useRef(val);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return [valState, forceUpdate];
};

/**
 * 复制操作
 * 将需要的 className = 'cpy-btn'
 * 需要在 确保能获取到DOM 的生命周期中调用，比如 onMounted
 */
export const useCopy = () => {
  useEffect(() => {
    const cpyer = new clipboard('.copy-btn');
    console.log('...copy-btn');

    cpyer.on('success', (e: any) => {
      Message.success('Copy successful');

      e.clearSelection();
    });

    return () => {
      cpyer.destroy();
    };
  }, []);
};
