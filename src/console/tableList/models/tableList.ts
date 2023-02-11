import { model } from '@modern-js/runtime/model';
import users from '@api/users';

interface Data {
  key: string;
  name: string;
  age: string;
  country: string;
}

interface Stare {
  data: Data[];
  loading: boolean;
  error: any;
}

// Model: 对独立模块的逻辑和所需状态的封装，由 state、actions、effects 组成
// model<state声明类型信息>
export default model<Stare>('tableList').define({
  // 1. state: Model 中保存的状态
  state: {
    data: [],
    loading: false,
    error: null,
  },
  // 2. actions: 用于修改 state 的纯函数，函数必须是同步的
  //
  actions: {
    load: {
      // 等待时调用 state 是定义的状态
      pending(state) {
        state.loading = true;
      },
      // 成功时调用 payload 是入参
      fulfilled(state, payload) {
        state.data = payload;
        state.loading = false;
      },
      // 失败时调用 error 是错误信息
      rejected(state, error) {
        state.error = error;
        state.loading = false;
      },
    },
  },
  // 3. effects: 用于修改 state 的带有副作用的函数，函数可以是异步的
  // effects 中可以调用自身或其他 Model 的 actions 和 effects
  effects: {
    // 副作用函数需要和 actions 配合使用
    async load() {
      const data = await users();
      return data;
    },
  },
});
