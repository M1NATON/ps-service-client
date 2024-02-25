import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IService} from "../model/IService";
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";


export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9003'}),
    tagTypes: ['Service'],
    endpoints: (build) => ({
        fetchAllService: build.query<IService[], void>({
            query:() => ({
                url: '/services'
            }),
            providesTags: result => ['Service']
        }),
        fetchOneService: build.query<IService, string>({
            query: (service_id) => ({
                url: `/services/${service_id}`
            }),
            providesTags: result => ['Service']
        })
    })
})