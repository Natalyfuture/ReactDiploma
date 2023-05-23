import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeItemFilter: [0],
};

const activeItemFilterSlice = createSlice({
    name: "activeItemFilter",
    initialState,
    reducers: {
      setActiveItemFilter : (state, action) => {
        state.activeItemFilter = action.payload;
      },
    },
  });

  export const {setActiveItemFilter} = activeItemFilterSlice.actions;
  export default activeItemFilterSlice.reducer;