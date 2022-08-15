import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    question1: 'what is your name',
    question2: 'What is your age',
    question3: 'What is your gender',
}

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers:{
        chooseQuestion1:(state,action) => { state.question1 = action.payload},
        chooseQuestion2:(state,action) => { state.question2 = action.payload},
        chooseQuestion3:(state,action) => { state.question3 = action.payload}
    }
})

// exporting action creators
export const { question1, question2, question3} = questionSlice.actions;

export default questionSlice.reducer;