import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import home_Reducer from '../home/home.slice';

const reducer = combineReducers({
  home: home_Reducer,
});

let store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger,
  ],
});

export default store;
