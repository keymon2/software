import { createStore, combineReducers } from "redux";
import selectDayReducer from "./selectDay";
import selectSchedule from "./selectSchedule";
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

const rootReducer = combineReducers({
  sidebar: changeState,
  day: selectDayReducer,
  schedule: selectSchedule,
});

const store = createStore(rootReducer);
console.log(store.getState());
export default store;
