import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {setCurrentEmployee} from '../../Store/Reducers/setCurrentEmployeeSlice';
import {useStorageAsync} from '../../Shared/hooks';
import {setInfomationEmployee} from '../../Store/Reducers/setInfomationEmployeeSlice';
import {setAvatarSrc} from '../../Store/Reducers/setAvatarSrcSlice';
import {useNavigation} from '@react-navigation/native';

export const useEmployeeProfile = () => {
  const dispatch = useDispatch();
  const {getItem, removeItem} = useStorageAsync('remember_account');
  const navigation = useNavigation();

  const user = useSelector(state => state.user.value);

  const [profile, setProfile] = useState({
    fullName: '',
    position: '',
    countDays: 0,
  });

  const [avatarSource, setAvatarSource] = useState();

  let employeesRes;
  let positionsRes;

  const getUserInfo = async token => {
    try {
      let response = await fetch(
        `http://backend-timekeeping.herokuapp.com/api/employee/getEmployeeInfo`,
        {
          method: 'GET',
          headers: {
            token: token,
          },
        },
      );

      if (response.status == '200') {
        let resJson = await response.json();
        console.log('resJson', resJson);
        return resJson;
      }
      if (response.status == '500') {
        return {};
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getToken = async () => {
    let token = await getItem();
    if (!token) {
      token = user.token;
    }
    return token;
  };

  const getData = async () => {
    dispatch(setLoading(true));
    const token = await getToken();

    employeesRes = await getUserInfo(token);

    try {
      const avatarSrc = employeesRes[0][0].timekeeping_photo;
      console.log('avt scr', employeesRes[0][0]);
      const dateNow = new Date();
      const dateNowParse = Date.parse(dateNow.toString());
      const countDays =
        (dateNowParse - Date.parse(employeesRes[0][0].createdAt?.updatedAt)) /
        (24 * 60 * 60 * 1000);

      dispatch(setCurrentEmployee(employeesRes[0][0]));
      dispatch(
        setInfomationEmployee({
          fullName: employeesRes[0][0].name,
          position: employeesRes[0][0].department,
          avatar_url: avatarSrc,
        }),
      );

      setProfile({
        fullName: employeesRes[0][0].name,
        position: employeesRes[0][0].department,
        countDays: 1000,
      });
      setAvatarSource(avatarSrc);
      dispatch(setAvatarSrc(avatarSrc));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      removeItem();
      navigation.navigate('LoginScreen');
      console.error('Có lỗi: %o', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    profile,
    avatarSource,
  };
};
