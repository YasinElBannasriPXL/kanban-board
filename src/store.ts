import { configureStore } from '@reduxjs/toolkit'
import boardsReducer from './features/boardsSlice'


export default configureStore({
    reducer: {
        boards: boardsReducer,
    }
})