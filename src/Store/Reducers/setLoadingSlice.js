import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const setLoadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setLoading} = setLoadingSlice.actions;

export default setLoadingSlice.reducer;
