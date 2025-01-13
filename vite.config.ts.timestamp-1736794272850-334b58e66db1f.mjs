// vite.config.ts
import { defineConfig } from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/vite/dist/node/index.js";
import ViteRequireContext from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/@originjs/vite-plugin-require-context/lib/index.js";
import requireTransform from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/vite-plugin-require-transform/dist/index.mjs";
import viteCompression from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/vite-plugin-compression/dist/index.mjs";
import AutoImport from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/unplugin-auto-import/dist/vite.js";
import postcsspxtoviewport from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/postcss-px-to-viewport/index.js";
import UnoCSS from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/unocss/dist/vite.mjs";
import { ViteImageOptimizer } from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import react from "file:///Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/ab/BarryIndex/Program/working/BlockPulse/DogeLink";
function getUiVw(size, name) {
  return {
    unitToConvert: name,
    // 要转化的单位
    viewportWidth: size,
    // UI设计稿的宽度
    unitPrecision: 6,
    // 转换后的精度，即小数点位数
    propList: ["*"],
    // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: "vw",
    // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: "vw",
    // 指定字体需要转换成的视窗单位，默认vw
    // selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
    minPixelValue: 0,
    // 默认值0，小于或等于1px则不进行转换
    mediaQuery: true,
    // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true,
    // 是否转换后直接更换属性值
    // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    exclude: [],
    landscape: false
    // 是否处理横屏情况
  };
}
var vite_config_default = (config) => {
  return defineConfig({
    base: "./",
    define: {
      "process.env": {}
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: "globalThis"
        },
        // Enable esbuild polyfill plugins
        plugins: [
          // NodeGlobalsPolyfillPlugin({
          //   buffer: true,
          // }),
        ]
      }
    },
    css: {
      preprocessorOptions: {},
      postcss: {
        plugins: [
          postcsspxtoviewport(getUiVw(1280, "pm")),
          postcsspxtoviewport(getUiVw(1920, "pw"))
        ]
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        "@css": path.resolve(__vite_injected_original_dirname, "./src/assets/css"),
        "@cps": path.resolve(__vite_injected_original_dirname, "./src/components"),
        "@img": path.resolve(__vite_injected_original_dirname, "./src/assets/img"),
        "@hooks": path.resolve(__vite_injected_original_dirname, "./src/gHooks"),
        "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
        "@tools": path.resolve(__vite_injected_original_dirname, "./src/utils/tools")
      },
      // import时省略后缀
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".tsx", ".mjs"]
    },
    plugins: [
      react(),
      ViteRequireContext.default(),
      requireTransform({}),
      viteCompression(),
      UnoCSS(),
      AutoImport({
        imports: ["react", "react-router"],
        // 自动导入react和react-router相关函数
        include: [/\.[tj]sx?$/, /\.md$/],
        dts: "src/auto-import.d.ts",
        // 生成 auto-import.d.ts 全局声明
        dirs: ["./preFunc/**"]
      }),
      // 图片压缩
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
        exclude: void 0,
        include: void 0,
        includePublic: true,
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false
                  // https://github.com/svg/svgo/issues/1128
                }
              }
            },
            "sortAttrs",
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }]
              }
            }
          ]
        },
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 100
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100
        },
        tiff: {
          // https://sharp.pixelplumbing.com/api-output#tiff
          quality: 100
        },
        // gif does not support lossless compression
        // https://sharp.pixelplumbing.com/api-output#gif
        gif: {},
        webp: {
          // https://sharp.pixelplumbing.com/api-output#webp
          lossless: true
        },
        avif: {
          // https://sharp.pixelplumbing.com/api-output#avif
          lossless: true
        }
      })
    ],
    build: {
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["parallax-js"]
        // plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      },
      outDir: "./dist"
    },
    esbuild: {
      pure: ["console.log"]
      // minify: true,
    },
    server: {
      port: 3100,
      // 是否自动在浏览器打开
      open: false,
      // 是否开启 https
      https: false,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://localhost:4399",
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "/")
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWIvQmFycnlJbmRleC9Qcm9ncmFtL3dvcmtpbmcvQmxvY2tQdWxzZS9Eb2dlTGlua1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FiL0JhcnJ5SW5kZXgvUHJvZ3JhbS93b3JraW5nL0Jsb2NrUHVsc2UvRG9nZUxpbmsvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FiL0JhcnJ5SW5kZXgvUHJvZ3JhbS93b3JraW5nL0Jsb2NrUHVsc2UvRG9nZUxpbmsvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IFZpdGVSZXF1aXJlQ29udGV4dCBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tcmVxdWlyZS1jb250ZXh0JztcbmltcG9ydCByZXF1aXJlVHJhbnNmb3JtIGZyb20gJ3ZpdGUtcGx1Z2luLXJlcXVpcmUtdHJhbnNmb3JtJztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG4vLyBpbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi1yZWFjdC1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHBvc3Rjc3NweHRvdmlld3BvcnQgZnJvbSAncG9zdGNzcy1weC10by12aWV3cG9ydCc7XG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJztcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBOb2RlR2xvYmFsc1BvbHlmaWxsUGx1Z2luIH0gZnJvbSAnQGVzYnVpbGQtcGx1Z2lucy9ub2RlLWdsb2JhbHMtcG9seWZpbGwnO1xuaW1wb3J0IGluamVjdCBmcm9tICdAcm9sbHVwL3BsdWdpbi1pbmplY3QnO1xuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1OEJCRVx1OEJBMVx1N0EzRlx1NzY4NHZ3XG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBcdThCQkVcdThCQTFcdTdBM0ZcdTVCQkRcdTVFQTY7XG4gKi9cbmZ1bmN0aW9uIGdldFVpVncoc2l6ZSwgbmFtZSkge1xuICByZXR1cm4ge1xuICAgIHVuaXRUb0NvbnZlcnQ6IG5hbWUsIC8vIFx1ODk4MVx1OEY2Q1x1NTMxNlx1NzY4NFx1NTM1NVx1NEY0RFxuICAgIHZpZXdwb3J0V2lkdGg6IHNpemUsIC8vIFVJXHU4QkJFXHU4QkExXHU3QTNGXHU3Njg0XHU1QkJEXHU1RUE2XG4gICAgdW5pdFByZWNpc2lvbjogNiwgLy8gXHU4RjZDXHU2MzYyXHU1NDBFXHU3Njg0XHU3Q0JFXHU1RUE2XHVGRjBDXHU1MzczXHU1QzBGXHU2NTcwXHU3MEI5XHU0RjREXHU2NTcwXG4gICAgcHJvcExpc3Q6IFsnKiddLCAvLyBcdTYzMDdcdTVCOUFcdThGNkNcdTYzNjJcdTc2ODRjc3NcdTVDNUVcdTYwMjdcdTc2ODRcdTUzNTVcdTRGNERcdUZGMEMqXHU0RUUzXHU4ODY4XHU1MTY4XHU5MEU4Y3NzXHU1QzVFXHU2MDI3XHU3Njg0XHU1MzU1XHU0RjREXHU5MEZEXHU4RkRCXHU4ODRDXHU4RjZDXHU2MzYyXG4gICAgdmlld3BvcnRVbml0OiAndncnLCAvLyBcdTYzMDdcdTVCOUFcdTk3MDBcdTg5ODFcdThGNkNcdTYzNjJcdTYyMTBcdTc2ODRcdTg5QzZcdTdBOTdcdTUzNTVcdTRGNERcdUZGMENcdTlFRDhcdThCQTR2d1xuICAgIGZvbnRWaWV3cG9ydFVuaXQ6ICd2dycsIC8vIFx1NjMwN1x1NUI5QVx1NUI1N1x1NEY1M1x1OTcwMFx1ODk4MVx1OEY2Q1x1NjM2Mlx1NjIxMFx1NzY4NFx1ODlDNlx1N0E5N1x1NTM1NVx1NEY0RFx1RkYwQ1x1OUVEOFx1OEJBNHZ3XG4gICAgLy8gc2VsZWN0b3JCbGFja0xpc3Q6IFsnaWdub3JlLSddLCAvLyBcdTYzMDdcdTVCOUFcdTRFMERcdThGNkNcdTYzNjJcdTRFM0FcdTg5QzZcdTdBOTdcdTUzNTVcdTRGNERcdTc2ODRcdTdDN0JcdTU0MERcdUZGMENcbiAgICBtaW5QaXhlbFZhbHVlOiAwLCAvLyBcdTlFRDhcdThCQTRcdTUwM0MwXHVGRjBDXHU1QzBGXHU0RThFXHU2MjE2XHU3QjQ5XHU0RThFMXB4XHU1MjE5XHU0RTBEXHU4RkRCXHU4ODRDXHU4RjZDXHU2MzYyXG4gICAgbWVkaWFRdWVyeTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NzI4XHU1QTkyXHU0RjUzXHU2N0U1XHU4QkUyXHU3Njg0Y3NzXHU0RUUzXHU3ODAxXHU0RTJEXHU0RTVGXHU4RkRCXHU4ODRDXHU4RjZDXHU2MzYyXHVGRjBDXHU5RUQ4XHU4QkE0ZmFsc2VcbiAgICByZXBsYWNlOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdThGNkNcdTYzNjJcdTU0MEVcdTc2RjRcdTYzQTVcdTY2RjRcdTYzNjJcdTVDNUVcdTYwMjdcdTUwM0NcbiAgICAvLyBleGNsdWRlOiBbL25vZGVfbW9kdWxlcy9dLCAvLyBcdThCQkVcdTdGNkVcdTVGRkRcdTc1NjVcdTY1ODdcdTRFRjZcdUZGMENcdTc1MjhcdTZCNjNcdTUyMTlcdTUwNUFcdTc2RUVcdTVGNTVcdTU0MERcdTUzMzlcdTkxNERcbiAgICBleGNsdWRlOiBbXSxcbiAgICBsYW5kc2NhcGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTZBMkFcdTVDNEZcdTYwQzVcdTUxQjVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZykgPT4ge1xuICAvLyBcdTY2MkZcdTU0MjZcdTg5ODFcdTYyNTNcdTUzMDVcdTUyMzBcdTZENEJcdThCRDVcdTdGNTEoXHU3NTFGXHU2MjEwXHU1QjUwXHU4REVGXHU1Rjg0KVxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBiYXNlOiAnLi8nLFxuXG4gICAgZGVmaW5lOiB7XG4gICAgICAncHJvY2Vzcy5lbnYnOiB7fSxcbiAgICB9LFxuXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgICAvLyBOb2RlLmpzIGdsb2JhbCB0byBicm93c2VyIGdsb2JhbFRoaXNcbiAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgZ2xvYmFsOiAnZ2xvYmFsVGhpcycsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIEVuYWJsZSBlc2J1aWxkIHBvbHlmaWxsIHBsdWdpbnNcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIC8vIE5vZGVHbG9iYWxzUG9seWZpbGxQbHVnaW4oe1xuICAgICAgICAgIC8vICAgYnVmZmVyOiB0cnVlLFxuICAgICAgICAgIC8vIH0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7fSxcblxuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgcG9zdGNzc3B4dG92aWV3cG9ydChnZXRVaVZ3KDEyODAsICdwbScpKSxcbiAgICAgICAgICBwb3N0Y3NzcHh0b3ZpZXdwb3J0KGdldFVpVncoMTkyMCwgJ3B3JykpLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICdAY3NzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cy9jc3MnKSxcbiAgICAgICAgJ0BjcHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxuICAgICAgICAnQGltZyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMvaW1nJyksXG4gICAgICAgICdAaG9va3MnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvZ0hvb2tzJyksXG4gICAgICAgICdAc3RvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3RvcmUnKSxcbiAgICAgICAgJ0B0b29scyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy91dGlscy90b29scycpLFxuICAgICAgfSxcblxuICAgICAgLy8gaW1wb3J0XHU2NUY2XHU3NzAxXHU3NTY1XHU1NDBFXHU3RjAwXG4gICAgICBleHRlbnNpb25zOiBbJy5qcycsICcudHMnLCAnLmpzeCcsICcudHN4JywgJy5qc29uJywgJy50c3gnLCAnLm1qcyddLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIChWaXRlUmVxdWlyZUNvbnRleHQgYXMgYW55KS5kZWZhdWx0KCksXG4gICAgICByZXF1aXJlVHJhbnNmb3JtKHt9KSxcbiAgICAgIHZpdGVDb21wcmVzc2lvbigpLFxuICAgICAgVW5vQ1NTKCksXG5cbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICBpbXBvcnRzOiBbJ3JlYWN0JywgJ3JlYWN0LXJvdXRlciddLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVyZWFjdFx1NTQ4Q3JlYWN0LXJvdXRlclx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFxuICAgICAgICBpbmNsdWRlOiBbL1xcLlt0al1zeD8kLywgL1xcLm1kJC9dLFxuICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnQuZC50cycsIC8vIFx1NzUxRlx1NjIxMCBhdXRvLWltcG9ydC5kLnRzIFx1NTE2OFx1NUM0MFx1NThGMFx1NjYwRVxuICAgICAgICBkaXJzOiBbJy4vcHJlRnVuYy8qKiddLFxuICAgICAgfSksXG5cbiAgICAgIC8vIFx1NTZGRVx1NzI0N1x1NTM4Qlx1N0YyOVxuICAgICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgICAgdGVzdDogL1xcLihqcGU/Z3xwbmd8Z2lmfHRpZmZ8d2VicHxzdmd8YXZpZikkL2ksXG4gICAgICAgIGV4Y2x1ZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgaW5jbHVkZTogdW5kZWZpbmVkLFxuICAgICAgICBpbmNsdWRlUHVibGljOiB0cnVlLFxuICAgICAgICBsb2dTdGF0czogdHJ1ZSxcbiAgICAgICAgYW5zaUNvbG9yczogdHJ1ZSxcbiAgICAgICAgc3ZnOiB7XG4gICAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxuICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAgICAgICBjbGVhbnVwTnVtZXJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICByZW1vdmVWaWV3Qm94OiBmYWxzZSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2Zy9zdmdvL2lzc3Vlcy8xMTI4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc29ydEF0dHJzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2FkZEF0dHJpYnV0ZXNUb1NWR0VsZW1lbnQnLFxuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbeyB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG5nOiB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I3BuZ1xuICAgICAgICAgIHF1YWxpdHk6IDEwMCxcbiAgICAgICAgfSxcbiAgICAgICAganBlZzoge1xuICAgICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXG4gICAgICAgICAgcXVhbGl0eTogMTAwLFxuICAgICAgICB9LFxuICAgICAgICBqcGc6IHtcbiAgICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjanBlZ1xuICAgICAgICAgIHF1YWxpdHk6IDEwMCxcbiAgICAgICAgfSxcbiAgICAgICAgdGlmZjoge1xuICAgICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCN0aWZmXG4gICAgICAgICAgcXVhbGl0eTogMTAwLFxuICAgICAgICB9LFxuICAgICAgICAvLyBnaWYgZG9lcyBub3Qgc3VwcG9ydCBsb3NzbGVzcyBjb21wcmVzc2lvblxuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjZ2lmXG4gICAgICAgIGdpZjoge30sXG4gICAgICAgIHdlYnA6IHtcbiAgICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjd2VicFxuICAgICAgICAgIGxvc3NsZXNzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhdmlmOiB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2F2aWZcbiAgICAgICAgICBsb3NzbGVzczogdHJ1ZSxcbiAgICAgICAgfSAvKiBwYXNzIHlvdXIgY29uZmlnICovLFxuICAgICAgfSksXG4gICAgXSxcblxuICAgIGJ1aWxkOiB7XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuICAgICAgICBleHRlcm5hbDogWydwYXJhbGxheC1qcyddLFxuICAgICAgICAvLyBwbHVnaW5zOiBbaW5qZWN0KHsgQnVmZmVyOiBbJ2J1ZmZlcicsICdCdWZmZXInXSB9KV0sXG4gICAgICB9LFxuICAgICAgb3V0RGlyOiAnLi9kaXN0JyxcbiAgICB9LFxuXG4gICAgZXNidWlsZDoge1xuICAgICAgcHVyZTogWydjb25zb2xlLmxvZyddLFxuICAgICAgLy8gbWluaWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDMxMDAsXG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTYyNTNcdTVGMDBcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGIGh0dHBzXG4gICAgICBodHRwczogZmFsc2UsXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjQzOTknLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy8nKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLG9CQUFvQjtBQUV2WCxPQUFPLHdCQUF3QjtBQUMvQixPQUFPLHNCQUFzQjtBQUM3QixPQUFP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
