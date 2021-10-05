import { createSlice, createAction } from '@reduxjs/toolkit'

const setSidebar = createAction('set')

interface State{
    sidebarShow: string
}

const initialState: State = { sidebarShow : ''}

const sideSlice = createSlice({
    name: 'sidebar'
    initialState,
    reducer: {
        set: (state,action) => {
            state.sidebarShow = action.[ay]
        }
    },
})