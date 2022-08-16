import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data";
import ResponseReducer from "./features/Response";

export const store = configureStore({
    reducer:{
        data: dataReducer,
        response: ResponseReducer
    }
})

