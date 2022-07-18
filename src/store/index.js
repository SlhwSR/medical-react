import {
    configureStore
} from '@reduxjs/toolkit'
import goodsReducer from './medicalfactory'
export const store = configureStore({
    reducer: {
        medicalgoods: goodsReducer
    }
})