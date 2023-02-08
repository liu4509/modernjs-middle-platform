import React from 'react';
import loadable from '@modern-js/runtime/loadable';
import { Route, Switch, Link } from '@modern-js/runtime/router';
import './App.css';

// import Dashboard from './dashboard';
// import TableList from './tableList';
// 代码分片 通过 loadable 按需加载对应路由所需要的组件代码
const Dashboard = loadable(() => import('./dashboard'));
const TableList = loadable(() => import('./tableList'));
// 当访问 /console 路由时，会加载 src_console_dashboard_index_tsx.js 这个文件；当访问 /console/table 路由时，会加载 src_console_tableList_index_tsx.js 这个文件

const App: React.FC = () => {
  return (
    <div>
      <a href="/">Go to Index</a>
      <div>
        <Link to="/">Dashboard | </Link>
        <Link to="/table">TableList</Link>
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
