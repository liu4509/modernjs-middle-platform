import React, { useState } from 'react';
import loadable from '@modern-js/runtime/loadable';
import { Route, Switch, Link } from '@modern-js/runtime/router';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
// 打开可选功能 less 不需要导入样式 可以按需加载
// import 'antd/dist/antd.css';
import './App.css';

const items: MenuProps['items'] = [
  {
    label: <Link to="/">Dashboard</Link>,
    key: 'dashboard',
  },
  {
    label: <Link to="/table">TableList</Link>,
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
  const onClick: MenuProps['onClick'] = e => {
    // eslint-disable-next-line no-console
    console.log('click ', e);
    setCurrent(e.key);
  };
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
      </div>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/table">
          <TableList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
