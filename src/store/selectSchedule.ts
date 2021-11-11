import { createSlice } from "@reduxjs/toolkit";
import { string } from "prop-types";

interface schedule {
  _id: number;
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
  _id: -1,
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
      state._id = action.payload._id;
      state.select = action.payload.select;
      state.day = action.payload.day;
      state.during = action.payload.during;
      state.title = action.payload.title;
      state.memo = action.payload.memo;
      state.tag = action.payload.tag;
    },
    changeColor: (state, action) => {
      state.tag.color = action.payload;
    },
  },
});

export const { select, changeColor } = selectScheduleSlice.actions;
export default selectScheduleSlice.reducer;
