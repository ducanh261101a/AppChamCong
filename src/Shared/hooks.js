import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../Store/Reducers/setUserSlice';
import {setIsLogin} from '../Store/Reducers/setIsLoginSlice';
import {useDispatch} from 'react-redux';

import {setLoading} from '../Store/Reducers/setLoadingSlice';
import {setCurrentEmployee} from '../Store/Reducers/setCurrentEmployeeSlice';
import {setAvatarSrc} from '../Store/Reducers/setAvatarSrcSlice';
import {setInfomationEmployee} from '../Store/Reducers/setInfomationEmployeeSlice';

export const useStorageAsync = key => {
  const [value, setValue] = useState();

  const setItem = async value => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      setValue(value);
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    setItem,
    value,
    removeItem,
    getItem,
  };
};

export const useAuth = () => {
  const dispatch = useDispatch();
  const {setItem, removeItem, getItem} = useStorageAsync('remember_account');
  const navigation = useNavigation();

  const logoutAsync = async () => {
    dispatch(setLoading(true));
    try {
      await removeItem();
      dispatch(setIsLogin(false));
      dispatch(setLoading(false));
      dispatch(setUser({}));
      dispatch(setCurrentEmployee({}));
      dispatch(setAvatarSrc(''));
      dispatch(setInfomationEmployee({}));
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  return {
    // checkAuth,
    logoutAsync,
  };
};
