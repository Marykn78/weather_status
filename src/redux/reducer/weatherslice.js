import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
// import axios from "axios";
// export const weatherAction =createAsyncThunk(
//     'weather/fetch',
//     async (payload,{Value,State,dispatch}) =>{
//         try{
//             const {data} = await axios.get(
//                 `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
//                 &appid=196944c23663e73dfaf15cfcdeb48277`
//             )
//             return data;
//         }
//         catch(error){}
//     }
// )
//pending field rejected
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