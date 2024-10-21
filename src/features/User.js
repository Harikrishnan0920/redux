import {createSlice} from "@reduxjs/toolkit"

const userslice=createSlice({
    name:"users",
    initialState:{
        value:{
            name:"default",email:"default@gmail.com"
        }
    },
    reducers:{
        login:(state,action)=>{
 
console.log(state,action)
state.value=action.payload

        }
    }
})

export const {login}=userslice.actions
export default userslice.reducer