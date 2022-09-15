import { createSlice } from "@reduxjs/toolkit";
import { number, string } from "prop-types";

interface schedule {
  index: number;
  select: boolean;
}

const initialState: schedule = {
  index: -1,
  select: false,
};

const selectScheduleSlice = createSlice({
  name: "selectSchedule",
  initialState,
  reducers: {
    select: (state, action) => {
      state.index = action.payload.index;
      state.select = action.payload.select;
    },
  },
});

export const { select } = selectScheduleSlice.actions;
export default selectScheduleSlice.reducer;
