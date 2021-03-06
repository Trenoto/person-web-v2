
// ref: https://umijs.org/config/
export default {
  base: '/person-web-v2/',
  publicPath: '/person-web-v2/',
  exportStatic: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', 
     'umi-plugin-gh-pages',{
      antd: true,
      dva: false,
      dynamicImport: true,
      title: 'Hongtao Liu',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
        baseNavigator: true,
      },
      routes: [
      {
        exclude: [
          /components\//,
        ],
        
      }],
    }],
  ],
}
