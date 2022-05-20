import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const setInfomationEmployeeSlice = createSlice({
  name: 'infomationEmployee',
  initialState: initialState,
  reducers: {
    setInfomationEmployee: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setInfomationEmployee} = setInfomationEmployeeSlice.actions;

export default setInfomationEmployeeSlice.reducer;
