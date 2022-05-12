import {useState} from 'react';
// import authApi from '../../Api/authApi';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
// import {setPopup} from '../../Store/Reducers/setPopupSlice';

export const useResetPassword = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    otp: '',
    password: '',
    repassword: '',
  });

  const resetPassword = async (
    account,
    otp,
    password,
    repassword,
    callback,
  ) => {
    dispatch(setLoading(true));
    // try {
    //   if (!otp) {
    //     setErrors({
    //       ...errors,
    //       otp: 'Vui lòng nhập mã OTP!',
    //       password: '',
    //       repassword: '',
    //     });
    //     dispatch(setLoading(false));
    //     return;
    //   }
    //   if (password.length < 6) {
    //     setErrors({
    //       ...errors,
    //       otp: '',
    //       password: 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự!',
    //     });
    //     dispatch(setLoading(false));
    //     return;
    //   }
    //   if (password !== repassword) {
    //     setErrors({
    //       ...errors,
    //       otp: '',
    //       password: '',
    //       repassword: 'Vui lòng nhập lại mật khẩu trùng với mật khẩu mới!',
    //     });
    //     dispatch(setLoading(false));
    //     return;
    //   }
    //   const recoveryPasswordRes = await authApi.resetPasswordAsynccReq(
    //     account,
    //     otp,
    //     password,
    //   );
    //   if (recoveryPasswordRes) {
    //     callback;
    //     dispatch(
    //       setPopup({
    //         isOpen: true,
    //         title: 'Thông báo!',
    //         children: 'Khôi phục mật khẩu thành công!',
    //       }),
    //     );
    //     console.log('Cap nhat mat khau thanh cong');
    //   }
    //   dispatch(setLoading(false));
    // } catch (error) {
    //   setErrors({
    //     otp: 'Vui lòng nhập đúng mã OTP!',
    //     password: '',
    //     repassword: '',
    //   });
    //   dispatch(setLoading(false));
    // }
  };

  return {
    resetPassword,
    errors,
  };
};
