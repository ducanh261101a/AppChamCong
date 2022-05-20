import {useEffect, useState} from 'react';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {useDispatch} from 'react-redux';
import {setUser} from '../../Store/Reducers/setUserSlice';
import {setIsLogin} from '../../Store/Reducers/setIsLoginSlice';
import {useNavigation} from '@react-navigation/native';
import {setPopup} from '../../Store/Reducers/setPopupSlice';
// import {useStorageAsync} from '../../Shared/hooks';

export const useLogin = () => {
  const navigation = useNavigation();
  // const {setItem, removeItem, getItem} = useStorageAsync('remember_account');
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    account: {
      message: '',
    },
    password: {
      message: '',
    },
    error: '',
  });

  const handleLogin = async (account, password, rememberAccount) => {
    dispatch(setLoading(true));
    let flag = true;
    try {
      if (account.trim() === '') {
        flag = false;
        setErrors({
          ...errors,
          account: {
            message: 'Vui lòng nhập tài khoản!',
          },
        });
      }

      if (password.trim() === '') {
        flag = false;
        setErrors({
          ...errors,
          password: {
            message: 'Vui lòng nhập mật khẩu!',
          },
        });
      }

      if (flag === true) {
        let dataSending = {
          username: account,
          password: password.trim(),
        };

        let stringDataSending = await JSON.stringify(dataSending);

        const response = await fetch(
          'https://backend-timekeeping.herokuapp.com/api/auth/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: stringDataSending,
          },
        );
        console.log('response', response);
        if (response.status == '201') {
          const resJson = await response.json();
          console.log('resJson', resJson);
          if (resJson.token) {
            dispatch(setUser(resJson));
            dispatch(setIsLogin(true));

            if (rememberAccount === true) {
              const informationToSave = resJson.token + ' ' + resJson.id;
              setItem(informationToSave);
            } else {
              removeItem();
            }
            navigation.replace('HomeScreen');
          } else {
            dispatch(setLoading(false));
            dispatch(
              setPopup({
                isOpen: true,
                title: 'Thông báo',
                children: 'Sai tên đăng nhập/mật khẩu!',
              }),
            );
          }
        }

        if (response.status == '404') {
          dispatch(
            setPopup({
              isOpen: true,
              title: 'Thông báo',
              children: 'Sai tên đăng nhập/mật khẩu!',
            }),
          );
        }

        if (response.status == '500') {
          setErrors({
            ...errors,
            error: 'Đã có lỗi xảy ra!',
          });
        }
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      flag = false;
      dispatch(setLoading(false));
      setErrors({
        account: {
          message: 'Sai tên đăng nhập/mật khẩu!',
        },
        password: {
          message: 'Sai tên đăng nhập/mật khẩu!',
        },
      });
      dispatch(
        setPopup({
          isOpen: true,
          title: 'Thông báo',
          children: 'Sai tên đăng nhập/mật khẩu!',
        }),
      );
    }
  };

  return {
    handleLogin,
    errors,
  };
};
