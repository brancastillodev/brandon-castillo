import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    esp: true,
  },
  reducers: {
    setLang: (state, action) => {
      state.esp = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
