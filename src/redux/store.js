import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data";
import QuestionReducer from "./features/Questions";

export const store = configureStore({
    reducer:{
        data: dataReducer,
        question: QuestionReducer
    }
})

