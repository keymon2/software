import { createSlice } from "@reduxjs/toolkit";

interface SelectDay {
  year: Number;
  month: Number;
  date: Number;
}

const initialState: SelectDay = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
};

const selectDaySlice = createSlice({
  name: "selectDay",
  initialState,
  reducers: {
    changeDay: (state, action) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.date = action.payload.date;
    },
  },
});

export const { changeDay } = selectDaySlice.actions;
export default selectDaySlice.reducer;
