import { useReducer } from "react"
import AppContext from "../store/Reducer"
import reducer, { initialState } from "../reducer/Reducer"

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
     {children}
    </AppContext.Provider>
  )
}

export default AppProvider