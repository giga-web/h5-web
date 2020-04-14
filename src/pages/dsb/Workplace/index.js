/* 开源-组件 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Workplace() {
  return (
    <div>
      <div>Workplace</div>
      <Link to={'/auth/login'}>登录</Link>
    </div>
  );
}