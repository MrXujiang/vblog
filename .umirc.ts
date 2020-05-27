import { IConfig } from 'umi-types';
import { resolve } from 'path';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  publicPath: '/wu/',
  outputPath: './wu',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/detail', component: '../pages/detail' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: '众学研究院-运营分社',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    components: resolve(__dirname, 'src/components/'),
    utils: resolve(__dirname, 'src/utils/')
  }
}

export default config;
