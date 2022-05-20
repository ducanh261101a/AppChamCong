import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../Shared/images';
import {MenuItem, SvgXml, Avatar} from '../index';
// import {useDispatch, useSelector} from 'react-redux';
// import {useAuth} from '../../Shared/hooks';
// import {setPopup} from '../../Store/Reducers/setPopupSlice';

export default function Drawer(props) {
  // const infomationEmployee = useSelector(
  //   state => state.infomationEmployee.value,
  // );
  // const dispatch = useDispatch();
  // const popup = () => {
  //   dispatch(
  //     setPopup({
  //       isOpen: true,
  //       title: 'Thông báo',
  //       children: 'Chức năng đang phát triển!',
  //     }),
  //   );
  // };
  // const {logoutAsync} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.header}>
          <SvgXml xml={images.Logo} width={167.79} height={40} />
          {/* {infomationEmployee && (
            <View style={styles.infomation}>
              <Avatar size="large" uri={infomationEmployee?.avatar_url} />
              <View style={styles.infomationDetails}>
                <Text style={styles.fullName}>
                  {infomationEmployee?.fullName}
                </Text>
                <Text style={styles.position}>
                  {infomationEmployee?.position}
                </Text>
              </View>
            </View>
          )} */}
          <View style={styles.listMenu}>
            <MenuItem>Yêu cầu</MenuItem>
            <MenuItem>Quản lý phép</MenuItem>
            <MenuItem>Thiết lập</MenuItem>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerTop}>
            <MenuItem>Đăng xuất</MenuItem>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
