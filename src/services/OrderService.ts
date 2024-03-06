import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOrder, IOrderBlock} from "../model/IOrder";
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";


export const orderAPI = createApi({
    reducerPath: 'orderAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9003'}),
    tagTypes: ['Order'],
    endpoints: (build) => ({
        createOrder: build.mutation<IOrder, IOrder>({
            query:(data) => ({
                url: '/orders',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Order']
        }),
        fetchOrdersUser: build.query<IOrderBlock[], void>({
            query: (userId) => ({
                url: `/orders/sorted/${userId}`,
            }),
            providesTags: result => ['Order']
        })
    })
})