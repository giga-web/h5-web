/* 命名空间(全局唯一) */
const namespacePrefix = 'Global';


// ====================================================
// 全局
const GlobalState = {
  collapsed: true,
};

export const Global = {

  namespace: namespacePrefix,

  state: GlobalState,

  effects: {},

  reducers: {},

  subscriptions: {
    setup({ history }) {
      // return history.listen(({ pathname, search }) => {
      //   // 本地验证token
      //   localVerifyToken();
      // });
    },
  },

};
// ====================================================
