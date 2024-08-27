import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/slices'

export const store = configureStore({
    reducer :{
        todos: todoReducer
    }
})