import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define your reducer function
const initialState = {
  // Your initial state here
};

const reducer = (state = initialState, action) => {
  // Your reducer logic here
  return state;
};

// Configure persistence
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the store
const store = createStore(persistedReducer);

// Persist the store
const persistor = persistStore(store);

export { store, persistor };
