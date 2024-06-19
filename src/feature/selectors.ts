import { createSelector } from '@reduxjs/toolkit';
import { RootState } from "./store";

const selectFormData = (state: RootState) => state.formData;

export const selectTempData = createSelector(selectFormData, ({tempData}) => tempData)
export const selectDataResult = createSelector(selectFormData, ({dataResult}) => dataResult)

