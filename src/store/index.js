import {
    configureStore
} from '@reduxjs/toolkit'
import goodsReducer from './medicalfactory'
import reduxLogger from "redux-logger";
export const store = configureStore({
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(reduxLogger),
    reducer: {
        medicalgoods: goodsReducer
    }
})