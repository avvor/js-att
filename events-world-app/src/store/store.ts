import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { geocodeApi } from '../services/geocode-api'
import { airQualityApi } from '../services/air-quality-api'
import { historyQueryApi } from '../services/history-query-api'

const rootReducer = combineReducers({
	[geocodeApi.reducerPath]: geocodeApi.reducer,
	[airQualityApi.reducerPath]: airQualityApi.reducer,
	[historyQueryApi.reducerPath]: historyQueryApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(geocodeApi.middleware)
							  .concat(airQualityApi.middleware)
							  .concat(historyQueryApi.middleware)
})