import React, { useState, useEffect } from 'react';
import loadable from '@modern-js/runtime/loadable';
import { Route, Switch, Link, useLocation } from '@modern-js/runtime/router';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
// 打开可选功能 less 不需要导入样式 可以按需加载
// import 'antd/dist/antd.css';
import './App.css';

const items: MenuProps['items'] = [
  {
    label: <Link to="/dashboard">Dashboard</Link>,
    key: 'dashboard',
  },
  {
    label: <Link to="/tableList">TableList</Link>,
    key: 'tableList',
  },
];

// import Dashboard from './dashboard';
// import TableList from './tableList';
// 代码分片 通过 loadable 按需加载对应路由所需要的组件代码
const Dashboard = loadable(() => import('./dashboard'));
const TableList = loadable(() => import('./tableList'));
// 当访问 /console 路由时，会加载 src_console_dashboard_index_tsx.js 这个文件；当访问 /console/table 路由时，会加载 src_console_tableList_index_tsx.js 这个文件

const App: React.FC = () => {
  const [current, setCurrent] = useState('dashboard');
  const location = useLocation();
  const onClick: MenuProps['onClick'] = e => {
    // 这里控制的导航栏的下标
    setCurrent(e.key);
  };
  // 因为重新设置 setCurrent 当前 pathname 为 null 所以在使用的时候必须 url 准确
  useEffect(() => {
    setCurrent(location.pathname.slice(1));
  }, []);
  return (
    <div>
      <Button type="primary" href="/">
        Go to Index
      </Button>
      <div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Switch>
          <Route path="/dashboard" exact={true}>
            <Dashboard />
          </Route>
          <Route path="/tableList">
            <TableList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
