import { createSlice } from "@reduxjs/toolkit";
import { string } from "prop-types";

interface schedule {
  select: boolean;
  tag: {
    color: string;
    title: string;
  };
  day: {
    year: number;
    month: number;
    date: number;
  };
  during: {
    start: {
      h: number;
      m: number;
    };
    ensd: {
      h: number;
      m: number;
    };
  };
  title: string;
  memo: string;
}

const initialState: schedule = {
  select: false,
  tag: {
    color: "",
    title: "",
  },
  day: {
    year: 0,
    month: 0,
    date: 0,
  },
  during: {
    start: {
      h: 0,
      m: 0,
    },
    ensd: {
      h: 0,
      m: 0,
    },
  },
  title: "",
  memo: "",
};

const selectScheduleSlice = createSlice({
  name: "selectSchedule",
  initialState,
  reducers: {
    select: (state, action) => {
      state.day = action.payload.day;
      state.during = action.payload.during;
      state.title = action.payload.title;
      state.memo = action.payload.memo;
    },
  },
});

export const { select } = selectScheduleSlice.actions;
export default selectScheduleSlice.reducer;
