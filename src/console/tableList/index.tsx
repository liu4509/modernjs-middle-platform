import { Table, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const TableList: React.FC = () => {
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

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      country: 'America',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      country: 'England',
    },
    {
      key: '3',
      name: 'Ming Li',
      age: 30,
      country: 'China',
    },
  ];
  return (
    <div>
      <Title>THis is tableList</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableList;
