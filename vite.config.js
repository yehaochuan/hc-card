import { defineConfig } from "vite";  // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import { resolve } from "path"; // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue';


// icon 按需引入
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';


// Antd 按需引入
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// api hooks 按需引入
import AutoImport from 'unplugin-auto-import/vite'


export default defineConfig({
  plugins: [
    vue(),  // 配置需要使用的插件列表
    Components({
      resolvers: [
        IconsResolver()
      ]
    }),
    Icons({ autoInstall: true }),
    AutoImport({ imports: ['vue', 'vue-router',] }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "/@": resolve("src"),
    }
  },

  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios'],
  },

  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    rollupOptions: {
      minify: 'terser',// 混淆器，terser构建后文件体积更小
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
    },
  },

  server: {  // 本地 - 运行配置，及反向代理配置
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    proxy: {
      '/api': {
        target: 'http://localhost:7001',   //代理接口
        changeOrigin: true,
      }
    }
  }
})
