import axios from 'axios';
// 通过 BFF 做一层处理
// 通过 mock 来的数据
// 后端接口完成 可以直接更换 url
// 符合低耦合
export default async () => {
  const res = await axios.get<
    { key: string; name: string; age: string; country: string }[]
  >('http://localhost:8080/api/mockUsers');
  return res.data;
};
// 通过后端的接口
// export default async () => {
//   const res = await axios.get<
//     { key: string; name: string; age: string; country: string }[]
//   >('https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json');
//   return res.data;
// };
