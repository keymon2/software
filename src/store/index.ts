import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import selectDayReducers from './selectday'
import { concat } from 'core-js/core/array'
import changeState from '../store'


export const store = configureStore({
    reducer: {
        selectDay: selectDayReducers,
        sidebar: changeState,
    },
    middleware: (getDefaultMiddleware: any) => 
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})