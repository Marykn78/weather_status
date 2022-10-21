import { configureStore } from "@reduxjs/toolkit"
import weatherslice from "./reducer/weatherslice";
const store = configureStore({
    reducer:{
        weather:weatherslice
    }
})
export default store;