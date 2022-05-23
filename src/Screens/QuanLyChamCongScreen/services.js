import {useEffect, useState} from 'react';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setPopup} from '../../Store/Reducers/setPopupSlice';
import {useStorageAsync} from '../../Shared/hooks';

export const useQuanLyChamCong = () => {
  const dispatch = useDispatch();
  const {getItem} = useStorageAsync('remember_account');
  const navigation = useNavigation();
  const user = useSelector(state => state.user.value);

  const [listChamCong, setListChamCong] = useState();
  const [thongtinchamcong, setThongtinchamcong] = useState({
    total: 0,
    congdu: 0,
    congthieu: 0,
    nghi: 0,
  });

  const nghi = {key: 'nghi', color: '#FF5A5A', selectedDotColor: 'red'};
  const congdu = {key: 'congdu', color: '#30DA88', selectedDotColor: 'green'};
  const congthieu = {
    key: 'congthieu',
    color: '#FFCB76',
    selectedDotColor: 'yellow',
  };

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

  const getThongtinchamcong = listThongtinchamcong => {
    let total = 0;
    let cong_du = 0;
    let cong_thieu = 0;
    let nghi = 0;

    listThongtinchamcong.forEach(element => {
      if (element.status == 'congdu' || element.status == 'congthieu') {
        total++;
        if (element.status == 'congdu') {
          cong_du++;
        } else {
          cong_thieu++;
        }
      } else {
        nghi++;
      }
    });
    let thongtin = {
      total: total,
      congdu: cong_du,
      congthieu: cong_thieu,
      nghi: nghi,
    };
    console.log('thong tin', thongtin);
    setThongtinchamcong(thongtin);
  };

  const getDataChamCong = async () => {
    dispatch(setLoading(true));
    const token = await checkToken();
    console.log('token', token);
    try {
      let response = await fetch(
        'http://backend-timekeeping.herokuapp.com/api/timekeeping/thongtinchamcong',
        {
          method: 'GET',
          headers: {
            token: token,
          },
        },
      );

      console.log(response.status);

      if (response.status == '200' || response.status == '201') {
        let resJson = await response.json();
        convertThongTinChamCong(resJson.thongtinArr);
        getThongtinchamcong(resJson.thongtinArr);
      }
    } catch (error) {
      console.log('Loi khi lay du lieu cham cong', error);
    }
    dispatch(setLoading(false));
  };

  const convertThongTinChamCong = async listThongTin => {
    let listTTCC = new Object();
    listThongTin.forEach(element => {
      element.date = '2022-05-' + element.day;
      if (element.status === 'congdu') {
        listTTCC = {...listTTCC, ...{[element.date]: {dots: [congdu]}}};
      }
      if (element.status === 'congthieu') {
        listTTCC = {...listTTCC, ...{[element.date]: {dots: [congthieu]}}};
      }
      if (element.status === 'nghi') {
        listTTCC = {...listTTCC, ...{[element.date]: {dots: [nghi]}}};
      }
    });
    setListChamCong(listTTCC);
  };

  const getInforOfDate = async date => {
    dispatch(setLoading(true));
    const token = await checkToken();
    try {
      let data = await JSON.stringify(date);
      let response = await fetch(
        'http://backend-timekeeping.herokuapp.com/api/timekeeping/thongtinchamcongbydate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: token,
          },
          body: data,
        },
      );

      if (response.status == '200' || response.status == '201') {
        let resJson = await response.json();
        return resJson;
      }
    } catch (error) {
      console.log('Co loi khi lay thon tin cham cong theo ngay', error);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getDataChamCong();
  }, []);

  return {
    listChamCong,
    thongtinchamcong,
    getInforOfDate,
  };
};
