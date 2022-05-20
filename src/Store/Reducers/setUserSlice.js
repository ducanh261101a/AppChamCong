import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const setUserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setUser} = setUserSlice.actions;

export default setUserSlice.reducer;
