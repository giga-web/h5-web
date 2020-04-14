/* 开源-组件 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <div>Login</div>
      <Link to={'/dsb/workspace'}>看板</Link>
    </div>
  );
}