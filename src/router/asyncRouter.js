/* 开源-组件 */
import React from 'react';
/* 自研-工具 */
import { routeMap } from '@/router/routes';

class DynamicComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: 0,
    };

    this.routeData = null;
  }

  componentDidMount() {
    if (this.state.status === 0) {
      this.load();
    }
  }

  load() {
    const route = routeMap[this.props.match.url];

    if (!route) {
      console.log(routeMap);
      console.log(`route NotFound with ${this.props.match.url}`);
      return;
    }

    if (!route.chunkName || !route.moduleId) {
      console.log(`chunkName/moduleId NotFound with ${this.props.match.url}`);
      return;
    }

    // TODO：现在是依赖 webpack compliation plugin
    __webpack_require__.e(route.chunkName).then(() => {
      const m = __webpack_require__(route.moduleId);

      // 保存路由数据
      this.routeData = m.default || m;

      // 改变状态，更新页面
      this.setState({ status: 1 });

    }).catch((ex) => {
      console.log(ex);

      // 改变状态，更新页面
      this.setState({ status: 2 });
    });
  }

  render() {
    const { status } = this.state;

    // 加载中
    if (status === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          loading...
        </div>
      );
    }

    // 加载成功
    if (status === 1) {
      return (<this.routeData {...this.props} />);
    }

    // 加载失败
    if (status === 2) {
      return (<div>404</div>);
    }
  }
}

export default () => DynamicComponent;
