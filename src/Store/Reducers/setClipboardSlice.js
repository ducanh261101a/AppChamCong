import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: [{}],
};

export const setClipboardSlice = createSlice({
  name: 'clipboard',
  initialState: {
    value: [
      {
        name: '',
        value: '',
      },
    ],
  },
  reducers: {
    setClipboard: (state, action) => {
      const checkExist = state.value.find(
        item => item.name === action.payload.name,
      );
      let changedValue;
      if (checkExist) {
        changedValue = state.value.map(item => {
          if (item.name === action.payload.name) {
            return {
              name: item.name,
              value: action.payload.value,
            };
          }
          return {
            name: item.name,
            value: item.value,
          };
        });
        console.log(changedValue);
        state.value = changedValue;
      } else {
        state.value = [...state.value, action.payload];
      }
    },
    resetClipboard: state => {
      state.value = [];
    },
  },
});

export const {setClipboard, resetClipboard} = setClipboardSlice.actions;

export default setClipboardSlice.reducer;
