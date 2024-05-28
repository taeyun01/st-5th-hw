import { createSlice } from "@reduxjs/toolkit";

const textsLocalData = localStorage.getItem("texts")
  ? JSON.parse(localStorage.getItem("texts"))
  : [];

const initialState = {
  texts: textsLocalData,
};

const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    textsReducer: (state, action) => {
      state.texts = [...state.texts, action.payload.inputValue];
      localStorage.setItem("texts", JSON.stringify(state.texts));
    },
  },
});

export const { textsReducer } = textsSlice.actions;
export default textsSlice.reducer;
