import { configureStore } from "@reduxjs/toolkit";
import { artworksReducer } from "../artworks/artworksSlice/artworksSlice";
import { uiReducer } from "../ui/uiSlice/uiSlice";

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
