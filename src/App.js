import React from "react"
import { Provider } from "react-redux"
import HomeScreen from './Components/Home'
import Store from "./Store"

export default () => {
  return(
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  )
}