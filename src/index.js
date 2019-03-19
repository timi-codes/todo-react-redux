import React from "react";
import { createStore } from "redux";
import rootReducer from "./reducers";
import ReactDOM from "react-dom";
import Root from "./components/Root";
const store = createStore(rootReducer);
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
