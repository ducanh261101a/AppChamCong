// import mushroom, { Employee_request } from "pmcc-api"
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { RootState } from "../../Store/configureStore"
import {setPopup} from '../../Store/Reducers/setPopupSlice';
import {useStorageAsync} from '../../Shared/hooks';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';

export const useEmployeeRequest = () => {
  const dispatch = useDispatch();
  const [requestWaitingForApproval, setRequestWaitingForApproval] = useState();
  const [requestAccept, setRequestAccept] = useState();
  const [requestRefuse, setRequestRefuse] = useState();

  const user = useSelector(state => state.user.value);
  const {getItem} = useStorageAsync('remember_account');

  let employeeRequestRes;

  const getToken = async () => {
    let token = await getItem();
    if (!token) {
      token = user.token;
    }
    return token;
  };

  const getEmpoloyeeRequest = async token => {
    try {
      let response = await fetch(
        'http://backend-timekeeping.herokuapp.com/api/donxinnghi/userGetList',
        {
          method: 'GET',
          headers: {
            token: token,
          },
        },
      );

      if (response.status === 201) {
        const resJson = await response.json();
        console.log('resJson', resJson);
        return resJson;
        // let waitingForApproval = [];
        // let accept = [];
        // let refuse = [];
        // resJson.listDonxinnghi.forEach(item => {
        //   if (item.status === 'wait') {
        //     waitingForApproval.push(item);
        //   } else if (item.status === 'accept') {
        //     accept.push(item);
        //   } else {
        //     refuse.push(item);
        //   }
        // });
        // const waitingForApproval = resJson.listDonxinnghi.filter(
        //   item => item.status === 'wait',
        // );
        // const accept = resJson.listDonxinnghi.filter(
        //   item => item.status === 'accept',
        // );
        // const refuse = resJson.listDonxinnghi.filter(
        //   item => item.status === 'refuse',
        // );
        // setRequestWaitingForApproval(waitingForApproval);
        // setRequestAccept(accept);
        // setRequestRefuse(refuse);
      }
    } catch (e) {
      console.error('Có lỗi: %o', e);
    }
  };

  const getData = async () => {
    dispatch(setLoading(true));
    const token = await getToken();

    employeeRequestRes = await getEmpoloyeeRequest(token);

    try {
      let waitingForApproval = [];
      let accept = [];
      let refuse = [];
      employeeRequestRes.listDonxinnghi[0].forEach(item => {
        if (item.status === 'wait') {
          waitingForApproval.push(item);
        } else if (item.status === 'accept') {
          accept.push(item);
        } else {
          refuse.push(item);
        }
      });
      setRequestWaitingForApproval(waitingForApproval);
      setRequestAccept(accept);
      setRequestRefuse(refuse);
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      console.error('Có lỗi: %o', e);
    }
  };

  const deleteRequest = async id => {
    dispatch(setLoading(true));
    const token = await getToken();
    try {
      let response = await fetch(
        `http://backend-timekeeping.herokuapp.com/api/donxinnghi/deleteDonxinnghi/${id}`,
        {
          method: 'DELETE',
          headers: {
            token: token,
          },
        },
      );
      if (response) {
        dispatch(
          setPopup({
            isOpen: true,
            title: 'Thông báo!',
            children: 'Hủy yêu cầu thành công!',
          }),
        );
        dispatch(setLoading(false));
      }
    } catch (e) {
      console.error('Có lỗi: %o', e);
    }
  };

  const editRequest = async id => {
    dispatch(setLoading(true));
    const token = await getToken();
    try {
      let response = await fetch(
        `http://backend-timekeeping.herokuapp.com/api/donxinnghi/editDonxinnghi/id=${id}`,
        {
          method: 'PUT',
          headers: {
            token: token,
          },
        },
      );
      if (response) {
        dispatch(
          setPopup({
            isOpen: true,
            title: 'Thông báo!',
            children: 'Cập nhật yêu cầu thành công!',
          }),
        );
        dispatch(setLoading(false));
      }
    } catch (e) {
      console.error('Có lỗi: %o', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return {
    requestWaitingForApproval,
    requestAccept,
    requestRefuse,
    deleteRequest,
  };
};
