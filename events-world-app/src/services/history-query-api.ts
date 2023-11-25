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
		})
	})
})

export const { useAddHistoryQueryRecordMutation } = historyQueryApi