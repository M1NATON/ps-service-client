import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../model/IUser";
import * as url from "url";



export const userAPI = createApi({
    tagTypes: ['User'],
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9003/auth'}),
    endpoints: (build) => ({
        registrationUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        loginUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        profileUser: build.query<IUser, void>({
            query: () => ({
                url: '/profile',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        })
    })
})



// export const logout = () => {localStorage.removeItem('token')}


