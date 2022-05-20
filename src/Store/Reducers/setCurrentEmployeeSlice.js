import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const setCurrentEmployeeSlice = createSlice({
  name: 'currentEmployee',
  initialState: initialState,
  reducers: {
    setCurrentEmployee: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setCurrentEmployee} = setCurrentEmployeeSlice.actions;

export default setCurrentEmployeeSlice.reducer;
