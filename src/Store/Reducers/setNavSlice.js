import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  show: false,
  position: undefined,
};

export const setNavSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    setNav: (state, action) => {
      state.show = true;
      state.position = action.payload;
    },
    hideNav: state => {
      state.show = false;
      state.position = undefined;
    },
  },
});

export const {setNav, hideNav} = setNavSlice.actions;

export default setNavSlice.reducer;
