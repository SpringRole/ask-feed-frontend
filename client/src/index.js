import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "materialize-css/dist/css/materialize.min.css";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

