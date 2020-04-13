/* 自研-工具 */
import { routes } from '@/router/config';

export const handlePageTitle = (pathname) => {
  // console.log('获取文档标题');
  // console.log(pathname);
  // console.log('获取文档标题');
  const route = routes[pathname];
  const name = route ? route.name : '未标题文档';
  return name;
}
