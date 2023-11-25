import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { geocodeApi } from '../services/geocode'
import { airQualityApi } from '../services/air-quality'
//import { historyApi } from './historyApi'

const rootReducer = combineReducers({
	[geocodeApi.reducerPath]: geocodeApi.reducer,
	[airQualityApi.reducerPath]: airQualityApi.reducer,
	//[historyApi.reducerPath]: historyApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(geocodeApi.middleware)
							  .concat(airQualityApi.middleware)
							 // .concat(historyApi.middleware)
})