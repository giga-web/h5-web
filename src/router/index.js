/* 开源-组件 */
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
/* 自研-工具 */
import { history } from 'dva';
/* 自研-组件 */
import asyncRouter from '@/router/asyncRouter';
import Exception404 from '@/pages/error/http/404';
/* 路由配置 */
import getRouters from './config';


// ============================================================
/* 自研-函数 */
// 循环查找路由父级
function getRouteParent(route, routesIdMap) {
  const parent = routesIdMap[route.parentId];
  if (parent === undefined) {
    return;
  } else if (parent.url) {
    return parent;
  }
  // 循环查找
  return getRouteParent(parent, routesIdMap);
}
// ============================================================


// ============================================================
// 全部数据
const flatData = getRouters();

// 路由ID映射，为了得到路由树而存在
const routesIdMap = flatData.reduce((map, route) => {
  map[route.id] = route;
  return map;
}, {});

// 路由树
const routesTree = Object.keys(routesIdMap).reduce((tree, id) => {
  const route = routesIdMap[id];

  // 过滤了为菜单分组而存在的项
  if (Boolean(route.url) === false) {
    return tree;
  }

  // 循环查找路由父级，因为非路由不应该出现在路由树
  const parent = getRouteParent(route, routesIdMap);

  if (parent === undefined) {
    tree.push(route);
  } else if (parent.children === undefined) {
    parent.children = [route];
  } else {
    parent.children.push(route);
  }

  return tree;
}, []);
// ============================================================


// ============================================================
// 递归生成路由
function renderRoutes (tree) {
  return tree.map((route, index) => {
    if (route.children) {
      return (
        <Route
          key={index}
          path={route.url}
          render={(props) => {
            const ParentRoute = asyncRouter();
            return (
              <ParentRoute {...props} route={route}>
                <Switch location={props.location}>
                  {route.redirect && <Redirect exact from={route.url} to={route.redirect} />}
                  {renderRoutes(route.children)}
                </Switch>
              </ParentRoute>
            );
          }}
        />
      );
    } else {
      return (
        <Route
          key={index}
          path={route.url}
          render={(props) => {
            const ChildRouter = asyncRouter();
            return (
              <ChildRouter {...props} route={route} />
            );
          }}
          exact
        />
      );
    }
  });
}
// ============================================================


// ============================================================
// 路由URL映射，为了异步路由查找加载信息而存在
export const routesUrlMap = flatData.reduce((map, route) => {
  // 过滤了为菜单分组而存在的项，剩下的就是需要渲染的路由
  if (route.url) {
    map[route.url] = route;
  }
  return map;
}, {});
// ============================================================


// ============================================================
// 路由包装组件
export default function RouterWrapper () {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routesTree)}
        <Route render={Exception404} />
      </Switch>
    </Router>
  )
}
// ============================================================
