/* 开源-组件 */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { Layout, Tooltip } from 'antd';
/* 自研-工具 */
import { handlePageTitle } from '@/utilities/framework';
/* 自研-图片 */
// import { PAGE_TITLE, PAGE_LOGO } from '@/constants/frontend';
/* 自研-组件 */
import Menu from './menu';
/* 自研-样式 */
// import styles from './index.m.less';

const BaseLayout = props => {

  const { children, location } = props;

  return (
    <Fragment>
      <Helmet>
        <title>{handlePageTitle(location.pathname)}</title>
      </Helmet>
      <Menu />
      {children}
    </Fragment>
  );
};

function mapStateToProps({ Global }) {
  return {
    collapsed: Global.collapsed
  };
}

export default connect(mapStateToProps)(BaseLayout);
