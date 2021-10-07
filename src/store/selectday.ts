import { createSlice, createAction } from '@reduxjs/toolkit'

export const changeDay = createAction('day/CHANGE')


interface SelectDay {
    year: Number,
    month: Number,
    date: Number,
}

const initialState: SelectDay = { 
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
}

const selectDaySlice = createSlice({
    name: 'selectDay',
    initialState,
    reducers: {
        getChage: (state, action) => {
            state.year= action.payload.year
            state.month = action.payload.month
            state.date = action.payload.date
        }
    }
})

export const selectDayActions = { ...selectDaySlice.actions }
export default selectDaySlice.reducer
