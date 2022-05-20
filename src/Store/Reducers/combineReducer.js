import {combineReducers} from '@reduxjs/toolkit';
import setIsLoginSlice from './setIsLoginSlice';
import setLoadingSlice from './setLoadingSlice';
import setPopupSlice from './setPopupSlice';
import setUserSlice from './setUserSlice';
import setClipboardSlice from './setClipboardSlice';
import setNavSlice from './setNavSlice';
import setCurrentEmployeeSlice from './setCurrentEmployeeSlice';
import setAvatarSrcSlice from './setAvatarSrcSlice';
import setInfomationEmployeeSlice from './setInfomationEmployeeSlice';

export default combineReducers({
  loading: setLoadingSlice,
  user: setUserSlice,
  isLogin: setIsLoginSlice,
  popup: setPopupSlice,
  clipboard: setClipboardSlice,
  nav: setNavSlice,
  currentEmployee: setCurrentEmployeeSlice,
  avatarSrc: setAvatarSrcSlice,
  infomationEmployee: setInfomationEmployeeSlice,
});
