import { configureStore, combineReducers,  } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer, filterReducer } from './ContactsReducer';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['persist/PERSIST']
    }
  }),
});

const persistor = persistStore(store);
export { store, persistor };
