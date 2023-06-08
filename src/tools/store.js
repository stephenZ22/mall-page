// store.js
import { createStore } from "redux";

// 定义初始状态
const initialState = {
  authToken: null,
};

// 定义 reducer 函数，用于处理状态更新
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

// 创建 Redux store
const store = createStore(reducer);

export default store;
