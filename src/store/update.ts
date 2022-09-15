import { createSlice } from "@reduxjs/toolkit";

interface update {
  update: boolean;
}

const initialState: update = {
  update: true,
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updating: (state, action) => {
      state.update = action.payload;
    },
  },
});

export const { updating } = updateSlice.actions;
export default updateSlice.reducer;
