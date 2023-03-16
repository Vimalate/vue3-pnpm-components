import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // build: {
  //   lib: {
  //     // eslint-disable-next-line no-undef
  //     entry: resolve(__dirname, 'index.js'),
  //     name: 'shuge',
  //     // the proper extensions will be added
  //     fileName: 'shuge',
  //     formats: ["es", "umd", "cjs"],
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ['vue'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // },
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: true,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['index.js'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          // eslint-disable-next-line no-undef
          dir: resolve(__dirname, './shuge-ui/es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          exports: 'named',
          //配置打包根目录
          // eslint-disable-next-line no-undef
          dir: resolve(__dirname, './shuge-ui/lib'),
        },
      ],
    },
    lib: {
      entry: './index.js',
      name: 'shuge',
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
