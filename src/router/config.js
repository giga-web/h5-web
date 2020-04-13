/* 自研-工具 */
import { SYS_CSL_MST_MENU } from '@/constants/backend';


// ============================================================
// 布局
export const layoutRouters = [
  {
    "id": 99,
    "parentId": 1,
    "name": "首页",
    "url": "/",
    "chunkName": "layoutsBaseLayout",
    "moduleId": "./src/layouts/BaseLayout/index.js",
    "icon": "",
    "redirect": "",
    "type": "layout"
  },
  {
    "id": 88,
    "parentId": 1,
    "name": "认证",
    "url": "/auth",
    "chunkName": "layoutsAuthLayout",
    "moduleId": "./src/layouts/AuthLayout/index.js",
    "icon": "",
    "redirect": "",
    "type": "layout"
  },
];
// ============================================================


// ============================================================
// 临时菜单路由
export const tempMenus = [
  {
    "id": 9999,
    "parentId": 99,
    "name": "看板",
    "url": "",
    "chunkName": "",
    "moduleId": "",
    "icon": "menudashboard",
    "redirect": "",
    "type": "module"
  },
  {
    "id": 999901,
    "parentId": 9999,
    "name": "工作台",
    "url": "/dsb/workspace",
    "chunkName": "dsbWorkplace",
    "moduleId": "./src/pages/dsb/Workplace/index.js",
    "icon": "",
    "redirect": "",
    "type": "menu"
  },
];
// ============================================================


// ============================================================
// 非菜单路由
export const nonMenuRouters = [
  {
    "id": 8888,
    "parentId": 88,
    "name": '登录',
    "url": '/auth/login',
    "chunkName": "authLogin",
    "moduleId": "./src/pages/auth/Login/index.js",
    "icon": "",
    "redirect": "",
    "type": "page"
  },
];
// ============================================================


// ============================================================
// 服务端菜单路由
export function getServerMenus () {
  let serverMenus = [];

  try {
    const storageMenu = JSON.parse(localStorage.getItem(SYS_CSL_MST_MENU));
    if (storageMenu !== null) { serverMenus = storageMenu; }
  } catch(e) {
    console.log(e);
  }

  return serverMenus;
}
// ============================================================


// ============================================================
// 全部路由
export default function getRouters () {
  return getServerMenus().concat(layoutRouters).concat(tempMenus).concat(nonMenuRouters);
}
// ============================================================
