import { defineConfig } from 'vite';

import ViteRequireContext from '@originjs/vite-plugin-require-context';
import requireTransform from 'vite-plugin-require-transform';
import viteCompression from 'vite-plugin-compression';
import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-react-components/vite';
import postcsspxtoviewport from 'postcss-px-to-viewport';
import UnoCSS from 'unocss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';

/**
 * 获取设计稿的vw
 * @param {Number} size 设计稿宽度;
 */
function getUiVw(size, name) {
  return {
    unitToConvert: name, // 要转化的单位
    viewportWidth: size, // UI设计稿的宽度
    unitPrecision: 6, // 转换后的精度，即小数点位数
    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
    // selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
    minPixelValue: 0, // 默认值0，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    exclude: [],
    landscape: false, // 是否处理横屏情况
  };
}

export default (config) => {
  // 是否要打包到测试网(生成子路径)
  return defineConfig({
    base: './',

    define: {
      'process.env': {},
    },

    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          // NodeGlobalsPolyfillPlugin({
          //   buffer: true,
          // }),
        ],
      },
    },

    css: {
      preprocessorOptions: {},

      postcss: {
        plugins: [
          postcsspxtoviewport(getUiVw(1280, 'pm')),
          postcsspxtoviewport(getUiVw(1920, 'pw')),
        ],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@css': path.resolve(__dirname, './src/assets/css'),
        '@cps': path.resolve(__dirname, './src/components'),
        '@img': path.resolve(__dirname, './src/assets/img'),
        '@hooks': path.resolve(__dirname, './src/gHooks'),
        '@store': path.resolve(__dirname, './src/store'),
        '@tools': path.resolve(__dirname, './src/utils/tools'),
      },

      // import时省略后缀
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.tsx', '.mjs'],
    },
    plugins: [
      react(),
      (ViteRequireContext as any).default(),
      requireTransform({}),
      viteCompression(),
      UnoCSS(),

      AutoImport({
        imports: ['react', 'react-router'], // 自动导入react和react-router相关函数
        include: [/\.[tj]sx?$/, /\.md$/],
        dts: 'src/auto-import.d.ts', // 生成 auto-import.d.ts 全局声明
        dirs: ['./preFunc/**'],
      }),

      // 图片压缩
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
        exclude: undefined,
        include: undefined,
        includePublic: true,
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                },
              },
            },
            'sortAttrs',
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
              },
            },
          ],
        },
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 100,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100,
        },
        tiff: {
          // https://sharp.pixelplumbing.com/api-output#tiff
          quality: 100,
        },
        // gif does not support lossless compression
        // https://sharp.pixelplumbing.com/api-output#gif
        gif: {},
        webp: {
          // https://sharp.pixelplumbing.com/api-output#webp
          lossless: true,
        },
        avif: {
          // https://sharp.pixelplumbing.com/api-output#avif
          lossless: true,
        } /* pass your config */,
      }),
    ],

    build: {
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['parallax-js'],
        // plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      },
      outDir: './dist',
    },

    esbuild: {
      pure: ['console.log'],
      // minify: true,
    },

    server: {
      port: 3100,
      // 是否自动在浏览器打开
      open: false,
      // 是否开启 https
      https: false,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://localhost:4399',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/'),
        },
      },
    },
  });
};
