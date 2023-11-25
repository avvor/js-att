import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userLoginApi = createApi({
	reducerPath: 'historyQueryApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4040/'
	}),
	endpoints: (build) => ({
		addUser: build.mutation({
			query: (user) => ({
				url: 'user',
				method: 'POST',
				body: user
			}),
		}), 
        loginUser: build.query({
			query: () => ({
				url: 'login',
				method: 'GET'
			}),
		})
	})
})

export const { useAddUserMutation, useLoginUserQuery } = userLoginApi