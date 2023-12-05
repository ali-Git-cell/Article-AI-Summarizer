import { configureStore } from "@reduxjs/toolkit";
import { essayApi } from "./essay";

export const store = configureStore({
  reducer: {
    [essayApi.reducerPath]: essayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(essayApi.middleware),
});
