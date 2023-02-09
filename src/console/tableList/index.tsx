import { Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import users from '@api/users';

const { Title } = Typography;
interface User {
  key: string;
  name: string;
  age: string;
  country: string;
}
const TableList: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

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
    const load = async () => {
      const _data = await users();
      setData(_data);
    };
    load();
  }, []);
  return (
    <div>
      <Title>THis is tableList</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableList;
