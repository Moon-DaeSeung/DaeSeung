import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";

// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './src/store'

import { Provider } from 'react-redux';
// **** (2) 스토어를 만들고 현재 값 확인해보기

const store = createStore(rootReducer);

ReactDom.render(
    <Provider store={store}>
    <App />
  </Provider>
 , document.getElementById("App"));