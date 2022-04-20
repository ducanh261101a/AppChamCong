import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StyleSheet} from 'react-native';

const initialState = {
  title: '',
  isOpen: false,
};

export const setPopupSlice = createSlice({
  name: 'popup',
  initialState: {
    value: initialState,
  },
  reducers: {
    setPopup: (state, action) => {
      state.value = {
        ...initialState,
        ...action.payload,
      };
    },
    closePopup: state => {
      state.value.isOpen = false;
    },
  },
});

export const {setPopup, closePopup} = setPopupSlice.actions;

export default setPopupSlice.reducer;
