import {combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import {serviceAPI} from "../services/ServiceService";
import {feedbackAPI} from "../services/FeedbackService";
import basketReducer from "./reducers/basketSlice";
import {userAPI} from "../services/UserService";


const rootReducer = combineReducers({
    [serviceAPI.reducerPath]: serviceAPI.reducer,
    [feedbackAPI.reducerPath]: feedbackAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    basket: basketReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(serviceAPI.middleware, feedbackAPI.middleware, userAPI.middleware)
        )

    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']