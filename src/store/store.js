import { createStore, combineReducers } from "redux";
import selectDayReducer from "./selectDay";
import selectSchedule from "./selectSchedule";
import updateReducer from "./update";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  sidebarShow: "responsive",
};
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
const stateTest = {
  test: 0,
};
const test = (state = stateTest, { type, ...rest }) => {
  switch (type) {
    case "settest":
      return { ...state, ...rest };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  sidebar: changeState,
  day: selectDayReducer,
  schedule: selectSchedule,
  update: updateReducer,
  test: test,
});

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
export default store;
