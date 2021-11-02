import { createSlice} from "@reduxjs/toolkit";

interface fiveState {
  five: string;
}

const initialState: fiveState = { five: "init" };

const selectFiveSlice = createSlice({
  name: "Schedule",
  initialState,
  reducers: {
    get: (state, action) => {
      state.five = action.payload;
    },
  },
});

export const { get } = selectFiveSlice.actions;
export default selectFiveSlice.reducer;
