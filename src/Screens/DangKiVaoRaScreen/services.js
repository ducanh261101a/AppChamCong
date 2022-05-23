import {useEffect, useState} from 'react';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useStorageAsync} from '../../Shared/hooks';
import {setPopup} from '../../Store/Reducers/setPopupSlice';

export const useEmpoyeeRequest = () => {
  const user = useSelector(state => state.user.value);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {getItem} = useStorageAsync('remember_account');

  const checkToken = async () => {
    let token = await getItem();
    if (!token) {
      token = user.token;
    }
    if (!token) {
      navigation.replace('HomeScreen');
    }
    return token;
  };

  const popupSuccessful = () => {
    dispatch(
      setPopup({
        isOpen: true,
        title: 'Thông báo',
        children: 'Gửi đơn xin nghỉ thành công!',
      }),
    );
  };

  const popupFailed = () => {
    dispatch(
      setPopup({
        isOpen: true,
        title: 'Thông báo',
        children: 'Gửi đơn xin nghỉ không thành công!\nVui lòng thử lại!',
      }),
    );
  };

  const handleCreateForm = async (date, reason) => {
    dispatch(setLoading(true));
    const token = await checkToken();
    try {
      let objBody = {
        date: date,
        reason: reason,
      };
      let data = await JSON.stringify(objBody);
      const response = await fetch(
        'https://backend-timekeeping.herokuapp.com/api/donxinnghi/createDonxinnghi',
        {
          method: 'POST',
          headers: {
            token: token,
            'Content-Type': 'application/json',
          },
          body: data,
        },
      );

      console.log(response.status);
      if (response.status == '200' || response.status == '201') {
        popupSuccessful();
        dispatch(setLoading(false));
        navigation.goBack();
      } else {
        popupFailed();
        dispatch(setLoading(false));
        return false;
      }
    } catch (error) {
      popupFailed();
      console.log(error);
    }
    dispatch(setLoading(false));
  };

  return {
    handleCreateForm,
  };
};
