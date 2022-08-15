import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const url ='https://run.mocky.io/v3/d628facc-ec18-431d-a8fc-9c096e00709a';


export const getData = createAsyncThunk('data/getData', async() =>{
    return await axios.get(url).then((res) => {return res.data}).catch((err) => console.log(err))
})

const initialState ={
    isLoading: true,
    data: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducer:{},
    extraReducers:{
        [getData.pending]:(state)=>{
            state.isLoading = true;
        },
        [getData.fulfilled]:(state,action)=>{
            console.log(action)
            state.isLoading = false;
            state.data = action.payload;
        },
        [getData.rejected]:(state)=>{
            state.isLoading = false;
        } 
    }
})


export default dataSlice.reducer