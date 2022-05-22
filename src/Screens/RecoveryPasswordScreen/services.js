import {useState} from 'react';
// import authApi from '../../Api/authApi';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {setPopup} from '../../Store/Reducers/setPopupSlice';
import {useNavigation} from '@react-navigation/native';
export const useResetPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [errors, setErrors] = useState({
    otp: '',
    password: '',
    repassword: '',
  });

  const resetPassword = async (email, otp, password, repassword) => {
    dispatch(setLoading(true));
    try {
      if (!otp) {
        setErrors({
          ...errors,
          otp: 'Vui lòng nhập mã OTP!',
          password: '',
          repassword: '',
        });
        dispatch(setLoading(false));
        return;
      }
      if (password.length < 6) {
        setErrors({
          ...errors,
          otp: '',
          password: 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự!',
        });
        dispatch(setLoading(false));
        return;
      }
      if (password !== repassword) {
        setErrors({
          ...errors,
          otp: '',
          password: '',
          repassword: 'Vui lòng nhập lại mật khẩu trùng với mật khẩu mới!',
        });
        dispatch(setLoading(false));
        return;
      }

      const content = {
        otp: Number(otp),
        password: password.trim(),
        email: email.trim(),
      };
      console.log(content);

      const recoveryPasswordRes = await fetch(
        'https://backend-timekeeping.herokuapp.com/api/auth/recoveryPassword',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(content),
        },
      );
      console.log(recoveryPasswordRes);
      if (recoveryPasswordRes.status === 200) {
        const resJson = await recoveryPasswordRes.json();
        console.log('resJson', resJson);
        dispatch(
          setPopup({
            isOpen: true,
            title: 'Thông báo!',
            children: 'Khôi phục mật khẩu thành công!',
          }),
        );
        console.log('Cap nhat mat khau thanh cong');
        navigation.replace('LoginScreen');
      }
      dispatch(setLoading(false));
    } catch (error) {
      setErrors({
        otp: 'Vui lòng nhập đúng mã OTP!',
        password: '',
        repassword: '',
      });
      dispatch(setLoading(false));
    }
  };

  return {
    resetPassword,
    errors,
  };
};
