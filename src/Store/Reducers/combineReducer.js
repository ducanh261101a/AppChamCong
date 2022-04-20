import {combineReducers} from '@reduxjs/toolkit';
import setLoadingSlice from './setLoadingSlice';
import setPopupSlice from './setPopupSlice';
import setAvatarSrcSlice from './setAvatarSrcSlice';

export default combineReducers({
  loading: setLoadingSlice,
  popup: setPopupSlice,
  avatarSrc: setAvatarSrcSlice,
});
