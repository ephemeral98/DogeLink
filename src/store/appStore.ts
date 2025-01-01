import { isClient } from '@/utils';
import { create } from 'zustand';

type TDevice = 'phone' | 'pad' | 'pc';

interface IAppStore {
  curDevice: TDevice;
  setCurDevice: () => any;
}

const useAppStore = create<IAppStore>((set, get) => ({
  curDevice: 'pad', // 当前设备
  setCurDevice: () =>
    set(() => {
      if (!isClient()) {
        return { curDevice: 'pc' };
      }
      const clientWidth = window.innerWidth;
      if (clientWidth <= 750) {
        return { curDevice: 'phone' };
      } else if (clientWidth <= 1280 && clientWidth > 750) {
        return { curDevice: 'pad' };
      } else {
        return { curDevice: 'pc' };
      }
    }),
}));

export default useAppStore;
