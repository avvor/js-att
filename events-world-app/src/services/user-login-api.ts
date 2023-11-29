import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userLoginApi = createApi({
	reducerPath: 'userLoginApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4040/'
	}),
	endpoints: (build) => ({
		addUser: build.mutation({
			query: (user) => ({
				url: 'new-user',
				method: 'POST',
				body: user
			}),
		}), 
        loginUser: build.query({
			query: (user) => ({
				url: `login`,
				method: 'POST', 
				body: user
			}),
		})
	})
})

export const { useAddUserMutation, useLoginUserQuery } = userLoginApi