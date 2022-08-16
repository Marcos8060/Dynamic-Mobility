import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    responses :[]
}

const responseSlice = createSlice({
    name: 'response',
    initialState,
    reducers:{
        saveResponse: (state,action)=> {
            const response = action.payload;
            state.responses = [...state.responses, response]
        }
    }
})


export const { saveResponse} = responseSlice.actions;

console.log(responseSlice);
export default responseSlice.reducer;