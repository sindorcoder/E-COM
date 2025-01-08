import { saveLocalStorage } from "../../helpers"
export const initialState = {
     product: JSON.parse(localStorage.getItem("info")) || [], 
}

const reducer = (state, action) => {
    console.log(action.product)
    console.log(state.product)
     switch(action.type) {
          case "ADD_TO_CART": {
               const isUserExist = state.product.findIndex(user => user.id === action.product.id)
               if(isUserExist < 0) {
                    saveLocalStorage("info", [...state.product, action.product])
                    return {...state, product: [...state.product , action.product]}     
               }

          }
          case "DELETE_INFO": {
               const newState =  state.product.filter((user) => user.id !== action.product.id)
               saveLocalStorage("info", newState)
          return {...state, product: newState}
     }
     }
}
export default reducer