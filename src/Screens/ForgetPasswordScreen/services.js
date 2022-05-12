import {useState} from 'react';
// import authApi from '../../Api/authApi';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
export const useRecoveryPassword = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    username: '',
  });

  const getOtp = async (account, callback) => {
    // dispatch(setLoading(true));
    // try {
    //   const recoveryPasswordRes = await authApi.recoverPasswordAsyncReq(
    //     account,
    //   );
    //   if (recoveryPasswordRes) {
    //     callback;
    //   }
    //   dispatch(setLoading(false));
    // } catch (error) {
    //   setErrors({
    //     username: 'Không tồn tại tài khoản.',
    //   });
    //   dispatch(setLoading(false));
    // }
  };

  return {
    getOtp,
    errors,
  };
};
