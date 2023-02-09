import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../Features'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})