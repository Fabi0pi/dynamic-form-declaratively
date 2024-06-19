import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./model";

const initialState: InitialState = {
  tempData: {
    firstName: "",
    lastName: "",
    phoneNumber: null,
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: null,
    something: false,
    country: "",
    gender: "",
    termsAndCondition: true,
    newsletterSubscription: false,
    prefMethod: "",
  },
  dataResult: false
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setData(state, { payload }) {
      state.tempData = { ...state.tempData, ...payload };
    },
    setDataSuccess(state, {payload}){
      state.dataResult = payload
    }
  },
});

export const formDataActions = {
  ...formDataSlice.actions,
};

export default formDataSlice.reducer;
