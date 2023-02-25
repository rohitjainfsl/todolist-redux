import React from "react";
import ReactDOM from "react-dom/client";
// import Home from "./tesla/Home";
// import Home from './routing/Home'
// import App from './contextAPI/App'
// import Home from './todo/Home'
// import ParentComponent from "./hooks/UseRef";
// import MyComponent from "./hooks/UseMemo";
// import MyComponent from "./hooks/UseCallback";
// import MyComponent from "./hooks/UseLayoutEffect";
// import Home from './learningAxios/Home'
import App from "./todolistRedux/App";
import store from "./todolistRedux/app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
