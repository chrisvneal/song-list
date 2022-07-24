import { createRoot } from "react-dom/client";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
