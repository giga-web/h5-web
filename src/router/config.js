/*
'/': {
  name: '首页',
  chunkName: 'layoutsBaseLayout',
  moduleId: './src/layouts/BaseLayout/index.js',
  redirect: '',
},
*/

export const routes = {
  '/': { name: '首页', chunkName: 'layoutsBaseLayout', moduleId: './src/layouts/BaseLayout/index.js', redirect: '/dsb/workspace' },
  '/auth': { name: '认证', chunkName: 'layoutsAuthLayout', moduleId: './src/layouts/AuthLayout/index.js', redirect: '/auth/login' },
  '/auth/login': { name: '登录', chunkName: 'authLogin', moduleId: './src/pages/auth/Login/index.js' },
  '/dsb/workspace': { name: '工作台', chunkName: 'dsbWorkplace', moduleId: './src/pages/dsb/Workplace/index.js' },
};


// ============================================================
export const routeTree = [];

Object.keys(routes).forEach(url => {

  if (['/', '/auth'].includes(url)) {
    // 根节点
    routeTree.push({ url, ...routes[url] });

  } else {
    console.log(urlToList(url));


  }

});


// ============================================================
// url转列表
// /dsb/workspace -> ["/dsb", "/dsb/workspace"]
function urlToList(url) {
  const list = url.split("/").filter(i => i);

  return list.map((item, index) => {
    return `/${list.slice(0, index + 1).join("/")}`;
  });
}
// ============================================================
