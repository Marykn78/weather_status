import {createSlice} from '@reduxjs/toolkit';
const initialState={}
const weatherSlice =createSlice({
    name:'weather',
    initialState,
    reducers:{
        addCity:(state,action)=>{
            state.push(action.payload)
        },
    }
}
)

export const {addCity}=weatherSlice.actions
export default weatherSlice.reducer;