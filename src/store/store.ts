import {combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import {serviceAPI} from "../services/ServiceService";
import {feedbackAPI} from "../services/FeedbackService";
import basketReducer from "./reducers/basketSlice";
import authReducer from "./reducers/userSlice";
import {userAPI} from "../services/UserService";
import {orderAPI} from "../services/OrderService";


const rootReducer = combineReducers({
    [serviceAPI.reducerPath]: serviceAPI.reducer,
    [feedbackAPI.reducerPath]: feedbackAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    basket: basketReducer,
    auth: authReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(serviceAPI.middleware, feedbackAPI.middleware, userAPI.middleware, orderAPI.middleware)
        )

    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']