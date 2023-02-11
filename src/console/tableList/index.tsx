import { Table, Typography } from 'antd';
import React, { useEffect } from 'react';
// import users from '@api/users';
// 使用状态管理 useModel全局使用状态
// useLocalModelcalModel 局部状态 当前页面改变时 其他页面同一个状态不会更随改变
import { useModel } from '@modern-js/runtime/model';
import tableListModel from './models/tableList';

const { Title } = Typography;
const TableList: React.FC = () => {
  // state 状态 actions 这里其实是调用的是 Effects 定义的方法 只不过 actions 定义三个状态逻辑
  const [state, actions] = useModel(tableListModel);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
  ];
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect');
    actions.load();
  }, []);

  return (
    <div>
      <Title>THis is tableList</Title>
      {!state.loading ? (
        <Table columns={columns} dataSource={state.data} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default TableList;
