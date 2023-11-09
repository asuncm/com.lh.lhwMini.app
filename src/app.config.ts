export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/register/main'
  ],
  subPackages: [],
  tabBar: {
    color: '',
    selectedColor: '',
    backgroundColor: '',
    borderStyle: 'black',
    list: []
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: 'rgb(247, 244, 237)',
    navigationBarTitleText: '琅寰',
    navigationBarTextStyle: 'black',
    backgroundColor: 'rgb(247, 244, 237)',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }
})
