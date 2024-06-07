import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialState: UiState = {
  isLoading: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoading: (currentState) => {
      return {
        ...currentState,
        isLoading: true,
      };
    },
    hideLoading: (currentState) => {
      return {
        ...currentState,
        isLoading: false,
      };
    },
  },
});

export const {
  hideLoading: hideLoadingActionCreator,
  showLoading: showLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
