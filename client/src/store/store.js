import { configureStore,combineReducers } from "@reduxjs/toolkit"
import cartSlice from "./cart"
import userSlice from "./user"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
const rootReducer=combineReducers({user:userSlice,cart:cartSlice})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export  const  persistor = persistStore(Store)
export default Store