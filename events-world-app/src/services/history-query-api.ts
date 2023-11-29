import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const historyQueryApi = createApi({
	reducerPath: 'historyQueryApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4040/'
	}),
	endpoints: (build) => ({
		addHistoryQueryRecord: build.mutation({
			query: (body) => ({
				url: 'history-query',
				method: 'POST',
				body
			}),
		}),
		getHistory: build.query({
			query: (user) => ({
				url: `get-history?user=${user}`,
				method: 'GET'
			}),
		}), 
		deleteHistory: build.mutation({
            query: (params) => ({
                url: '/delete-history',
                method: 'POST',
                body: params,
            })
        }),
	})
})

export const { useAddHistoryQueryRecordMutation, useGetHistoryQuery, useDeleteHistoryMutation } = historyQueryApi