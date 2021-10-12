import { createStore, combineReducers } from 'redux'
import selectDayReducer from './selectDay'
const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
      sidebar: changeState,
      day: selectDayReducer
})


const store = createStore(rootReducer)
console.log(store.getState())
export default store