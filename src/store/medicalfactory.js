import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

 const medicalfactory=createSlice({
    name:"medicalGoods",
    initialState:{
        goodlist:[]
    },
    reducers:{
        add:(state,action)=>{
           state.goodlist=action.payload
        }
    }
})
export const {add}=medicalfactory.actions

export default medicalfactory.reducer