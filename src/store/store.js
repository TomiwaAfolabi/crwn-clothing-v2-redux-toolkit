// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

import { configureStore } from "@reduxjs/toolkit";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(middleWares),
});
// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
