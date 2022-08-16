import { configureStore } from "@reduxjs/toolkit";
import ResponseReducer from "./features/Response";
import storage from "redux-persist/lib/storage";
import dataReducer from './features/data'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig, ResponseReducer, dataReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)


