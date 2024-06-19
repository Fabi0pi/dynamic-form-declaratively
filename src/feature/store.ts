import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./reducer";

const rootReducer = {
  formData: formDataSlice
}

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<typeof rootReducer[K]>
}