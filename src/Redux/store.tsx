/* eslint-disable import/no-unresolved */
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../Reducers';

const configureStore: () => any = (initialState = {}) => {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: 'form', // key for localStorage
        storage,
        debug: true,
        blacklist: ['foo'],
      },
      rootReducer,
    ),
  });

  const store = createStore(
    persistReducer(
      {
        key: 'root',
        debug: true,
        storage,
        whitelist: ['auth'],
      },
      reducer,
    ),
    initialState,
  );

  const persistor = persistStore(store, null);

  return { store, persistor };
};

export default configureStore;
