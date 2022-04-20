import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const setAvatarSrcSlice = createSlice({
  name: 'avatarSrc',
  initialState: initialState,
  reducers: {
    setAvatarSrc: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setAvatarSrc} = setAvatarSrcSlice.actions;

export default setAvatarSrcSlice.reducer;
