import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Suspense>
);
