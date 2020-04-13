/* 开源-组件 */
import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { createFromIconfontCN, MenuUnfoldOutlined, MenuFoldOutlined, QuestionCircleOutlined } from '@ant-design/icons';


const Menu = props => {
  // console.log(props);

  return (
    <div>菜单</div>
  );
}

function mapStateToProps({ Global }) {
  return {
    collapsed: Global.collapsed
  };
}

export default connect(mapStateToProps)(Menu);


/*
  const { dispatch, children, location, collapsed } = props;

  const handleMenuCollapse = payload => {
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload,
    });
  };

  return (
      <Layout style={{ minHeight: '100%' }} hasSider>
        <Layout.Sider collapsed={collapsed} className={styles.menuSider}>
          <a href="/" className={styles.menuLogo}>
            <img src={PAGE_LOGO} alt="logo" />
            {collapsed ? null : <h1>{PAGE_TITLE}</h1>}
          </a>
          <Menu mode="inline" theme="dark" className={styles.menu}>{genMenuItem(menuTree)}</Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header className={styles.header}>
            <div className={styles.collapseButton} onClick={handleMenuCollapse.bind(this, !collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div style={{ flex: 1 }} />
            <div className={styles.headerRight}>
              <Tooltip title="使用文档">
                <a
                  target="_blank"
                  href="https://pro.ant.design/docs/getting-started"
                  rel="noopener noreferrer"
                  className={styles.question}
                >
                  <QuestionCircleOutlined />
                </a>
              </Tooltip>
            </div>
          </Layout.Header>
          {children}
        </Layout>
      </Layout>
  );




// 字体图标
const Icon = createFromIconfontCN({
  scriptUrl: 'font/menu/iconfont.js',
});

// 生成菜单项
const genMenuItem = (tree) => {
  return tree.map((menu, key) => {
    if(menu.children && menu.children.length > 0) {
      const subMenuTitle = (
        <div className={styles.subMenuTitle}>
          <Icon type="menudashboard" />
          <span>{menu.name}</span>
        </div>
      );

      return (
        <Menu.SubMenu key={key} title={subMenuTitle}>
          {genMenuItem(menu.children)}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={key}>
        {genMenuLink(menu)}
      </Menu.Item>
    );
  });
}

// 生成链接
const genMenuLink = (menu) => {
  return (
    <Link to={menu.url}>
      {menu.name}
    </Link>
  );
}
*/



/*
// 路由URL映射，为了异步路由查找加载信息而存在
export const routesUrlMap = flatData.reduce((map, route) => {
  // 过滤了为菜单分组而存在的项，剩下的就是需要渲染的路由
  if (route.url) {
    map[route.url] = route;
  }
  return map;
}, {});
// 循环查找菜单父级
function getMenuParent(route, routesIdMap) {
  const parent = routesIdMap[route.parentId];
  if (parent === undefined) {
    return;
  } else if (['module', 'menu'].includes(parent.type)) {
    return parent;
  }
  // 循环查找
  return getRouteParent(parent, routesIdMap);
}

// 深度复制
const routesIdMapCloneToMenu = clone(routesIdMap);

// 菜单树
export const menuTree = Object.keys(routesIdMapCloneToMenu).reduce((tree, id) => {
  const route = routesIdMapCloneToMenu[id];

  // 过滤非菜单项
  if (['module', 'menu'].includes(route.type) === false) {
    return tree;
  }

  // 循环查找菜单父级
  const parent = getMenuParent(route, routesIdMapCloneToMenu);
  
  if (parent === undefined) {
    tree.push(route);
  } else if (parent.children === undefined) {
    parent.children = [route];
  } else {
    parent.children.push(route);
  }

  return tree;
}, []);
*/
