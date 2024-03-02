import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFeedback} from "model/IFeedback";


export const feedbackAPI = createApi({
    reducerPath: 'feedbackAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9003'}),
    tagTypes: ['Feedback'],
    endpoints: (build) => ({
        fetchAllFeedback: build.query<IFeedback[], void>({
            query: () => ({
                url: '/feedback'
            }),
            providesTags: result => ['Feedback']
        })
    })
})