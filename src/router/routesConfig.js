export default [
  { url: '/auth', name: '认证', chunkName: 'layoutsAuthLayout', moduleId: './src/layouts/AuthLayout/index.js', redirect: '/auth/login' },
  { url: '/auth/login', name: '登录', chunkName: 'authLogin', moduleId: './src/pages/auth/Login/index.js' },
  { url: '/dsb/workspace', name: '工作台', chunkName: 'dsbWorkplace', moduleId: './src/pages/dsb/Workplace/index.js' },
  // 路径 / 的匹配规则太强大，应该放在最后面
  { url: '/', name: '首页', chunkName: 'layoutsBaseLayout', moduleId: './src/layouts/BaseLayout/index.js', redirect: '/dsb/workspace' },
];
