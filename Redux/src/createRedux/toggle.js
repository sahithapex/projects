import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
      isDark:false 

} 
const handlethemeSwitch=(state,action)=>{
      state.isDark = action.payload !== undefined ? action.payload : !state.isDark;

}
const toggleSwitch = createSlice({
      name:"toggle",
      initialState,
      reducers:{
            handletheme:handlethemeSwitch

      }
} )
export const {handletheme} =toggleSwitch.actions 
export default toggleSwitch.reducer