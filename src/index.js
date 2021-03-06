/* TODO：按道理这是不需要的，目前只是为了能够让入口文件有异步加载的代码 */
import(/* webpackChunkName: "TempComponent" */ '@/components/TempComponent');

/* 开源-组件 */
import React from 'react';
import ReactDOM from 'react-dom';

/* 自研-组件 */
import App from '@/App';

/* 状态管理 */
import { addAsyncModel } from 'dva';
import { Global } from '@/models/Global';

/* 异步数据模型 */
addAsyncModel(Global);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
