import React from 'react';
import { Route, Switch, Link } from '@modern-js/runtime/router';
import Dashboard from './dashboard';
import TableList from './tableList';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <a href=""></a>
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
