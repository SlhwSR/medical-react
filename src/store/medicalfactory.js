import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

 const medicalfactory=createSlice({
    name:"medicalGoods",
    initialState:{
        goodlist:[{
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: 3,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }]
    },
    reducers:{
        add:(state,action)=>{
           state.goodlist.push(action.payload)
        },
        deleteOne:(state,action)=>{
            // console.log("哈哈"+ action.payload);
         state.goodlist.splice(action.payload-1,1)
        },
        updateOne:(state,action)=>{
            // if(action.payload.key===1){
            //     state.goodlist[action.payload.key]=action.payload
            //    return;
            // }
            //  state.goodlist.splice(action.payload.key-1,1)
            //delete goodlist[action.payload.key]
             state.goodlist[action.payload.key-1]=action.payload
        }
    }
})
export const {add,deleteOne,updateOne}=medicalfactory.actions

export default medicalfactory.reducer