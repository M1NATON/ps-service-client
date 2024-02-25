import {combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import {serviceAPI} from "../services/ServiceService";


const rootReducer = combineReducers({
    [serviceAPI.reducerPath]: serviceAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(serviceAPI.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']