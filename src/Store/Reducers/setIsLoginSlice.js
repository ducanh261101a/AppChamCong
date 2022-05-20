import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const setIsLoginSlice = createSlice({
  name: 'isLogin',
  initialState: initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.value = action.payload;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const {setIsLogin} = setIsLoginSlice.actions;

export default setIsLoginSlice.reducer;
