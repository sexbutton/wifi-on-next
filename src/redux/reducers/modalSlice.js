import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    popUpLead: {
      isOpen: false,
    },
    popUpPolicy: {
      isOpen: false,
    },
    popUpAgreement: {
      isOpen: false,
    },
  },
  reducers: {
    openPopUpLead: (state) => {
      state.popUpLead.isOpen = true;
    },
    closePopUpLead: (state) => {
      state.popUpLead.isOpen = false;
    },
    openPopUpPolicy: (state) => {
      state.popUpPolicy.isOpen = true;
    },
    closePopUpPolicy: (state) => {
      state.popUpPolicy.isOpen = false;
    },
    openPopUpAgreement: (state) => {
      state.popUpAgreement.isOpen = true;
    },
    closePopUpAgreement: (state) => {
      state.popUpAgreement.isOpen = false;
    },
  },
});

export const {
  openPopUpLead,
  closePopUpLead,
  openPopUpPolicy,
  closePopUpPolicy,
  openPopUpAgreement,
  closePopUpAgreement,
} = modalSlice.actions;

export const selectIsOpenPopUpLead = (state) => state.modal.popUpLead.isOpen;
export const selectIsOpenPopUpPolicy = (state) =>
  state.modal.popUpPolicy.isOpen;
export const selectIsOpenPopUpAgreement = (state) =>
  state.modal.popUpAgreement.isOpen;

export default modalSlice.reducer;
