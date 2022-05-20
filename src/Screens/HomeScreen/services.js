import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {setCurrentEmployee} from '../../Store/Reducers/setCurrentEmployeeSlice';
import {useStorageAsync} from '../../Shared/hooks';
import {setInfomationEmployee} from '../../Store/Reducers/setInfomationEmployeeSlice';
// const {getItem} = useStorageAsync('remember_account');

export const useEmployeeProfile = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const userId = {
    token: '',
    id: 0,
  };

  const [profile, setProfile] = useState({
    fullName: '',
    position: '',
    countDays: 0,
  });

  const [avatarSource, setAvatarSource] = useState();

  let employeesRes;
  let positionsRes;

  const getUserInfo = async (id, token) => {
    try {
      let response = await fetch(
        `http://backend-timekeeping.herokuapp.com/api/employee/getEmployeeInfoByUserId?id=${id}`,
        {
          method: 'GET',
          headers: {
            token: token,
          },
        },
      );

      if (response.status == '200') {
        let resJson = await response.json();
        return resJson;
      }
      if (response.status == '500') {
        return {};
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getData = async () => {
    dispatch(setLoading(true));
    const tokenAndId = await getItem();
    if (tokenAndId) {
      let locationOfId = tokenAndId.indexOf(' ');
      const token = tokenAndId.slice(0, locationOfId);
      const ID = tokenAndId.slice(locationOfId + 1);
      console.log('token va id', token, ID, tokenAndId);
      employeesRes = await getUserInfo(ID, token);
    }

    try {
      const avatarSrc = employeesRes[0].timekeeping_photo;
      const dateNow = new Date();
      const dateNowParse = Date.parse(dateNow.toString());
      const countDays =
        (dateNowParse - Date.parse(employeesRes[0].createdAt?.updatedAt)) /
        (24 * 60 * 60 * 1000);

      dispatch(setCurrentEmployee(employeesRes[0]));
      dispatch(
        setInfomationEmployee({
          fullName: employeesRes[0].name?.firstName,
          position: employeesRes[0].position?.department,
          avatar_url: avatarSrc,
        }),
      );

      setProfile({
        fullName: employeesRes[0].name?.firstName,
        position: employeesRes[0].position?.department,
        countDays: Math.floor(countDays),
      });
      setAvatarSource(avatarSrc);
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
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
