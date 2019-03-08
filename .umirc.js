
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
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
