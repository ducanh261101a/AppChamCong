import {useState} from 'react';
// import authApi from '../../Api/authApi';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
export const useRecoveryPassword = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    email: '',
    error: '',
  });

  const getOtp = async (email, callback) => {
    dispatch(setLoading(true));
    try {
      // let dataSending = {
      //   email: email.trim(),
      // };

      // let stringDataSending = await JSON.stringify(dataSending);
      console.log(email);
      const recoveryPasswordRes = await fetch(
        'http://backend-timekeeping.herokuapp.com/api/auth/sendOTP',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: email}),
        },
      );
      console.log(recoveryPasswordRes.status === 200);
      if (recoveryPasswordRes) {
        const resJson = await recoveryPasswordRes.json();
        console.log('resJson', resJson);
        callback;
      }
      dispatch(setLoading(false));
    } catch (error) {
      setErrors({
        email: 'Không tồn tại tài khoản.',
      });
      dispatch(setLoading(false));
    }
  };

  return {
    getOtp,
    errors,
  };
};
