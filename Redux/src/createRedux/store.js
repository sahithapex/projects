import { configureStore } from '@reduxjs/toolkit' 
import counterSlice from './counterSlice'
import toggleSwitch from './toggle'
export const store=configureStore({
      reducer:{
            counter:counterSlice,
            toggle:toggleSwitch
      }
})



