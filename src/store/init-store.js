import { createStore } from "redux";

import rootReducer from "./root-reducer";

export default function initializeStore(initialState = {}) {
  const store = createStore(rootReducer, initialState);

  // if (process.env.NODE_ENV === "development" && module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept("./root-reducer", () => {
  //     const nextRootReducer = require("./root-reducer");
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}
