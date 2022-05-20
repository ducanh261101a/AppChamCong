import {useState} from 'react';
// import mushroom from "pmcc-api"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../Store/Reducers/setUserSlice';
import {setIsLogin} from '../Store/Reducers/setIsLoginSlice';
import {useDispatch} from 'react-redux';

import {setLoading} from '../Store/Reducers/setLoadingSlice';

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

  // const checkAuth = async () => {
  //     try {
  //         const response = await mushroom.$auth.statusAsync();
  //         const status = response.result.status === "logged-in";
  //         if (status) {
  //             const getUser = await mushroom.$auth.meAsync({
  //                 cacheAge: 1
  //             });
  //             if (getUser.result) {
  //                 dispatch(setUser(getUser.result))
  //             }
  //         }
  //         dispatch(setIsLogin(status))
  //         return status
  //     } catch (error) {
  //         dispatch(setIsLogin(false))
  //         return false
  //     }
  // }

  const logoutAsync = async () => {
    dispatch(setLoading(true));
    try {
      await removeItem();
      dispatch(setIsLogin(false));
      dispatch(setLoading(false));
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
