import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../Shared/images';
import {MenuItem, SvgXml, Avatar} from '../index';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../Shared/hooks';
import {setPopup} from '../../Store/Reducers/setPopupSlice';

export default function Drawer(props) {
  const infomationEmployee = useSelector(
    state => state.infomationEmployee.value,
  );
  const dispatch = useDispatch();
  const popup = () => {
    dispatch(
      setPopup({
        isOpen: true,
        title: 'Thông báo',
        children: 'Chức năng đang phát triển!',
      }),
    );
  };
  const {logoutAsync} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.header}>
          <SvgXml xml={images.Logo} width={167.79} height={40} />
          {infomationEmployee && (
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
          )}
          <View style={styles.listMenu}>
            <MenuItem images={images.DangKyCaLamIcon} onPress={() => popup()}>
              Đăng kí ca làm
            </MenuItem>
            <MenuItem
              images={images.GiaoViecIcon}
              onPress={() => {
                popup();
                // props.navigation.navigate('GiaoViecScreen')
              }}>
              Giao việc
            </MenuItem>
            <MenuItem
              images={images.YeuCauIcon}
              onPress={() => props.navigation.navigate('DanhSachYeuCauScreen')}>
              Yêu cầu
            </MenuItem>
            <MenuItem images={images.BangLuongIcon} onPress={() => popup()}>
              Bảng lương
            </MenuItem>
            <MenuItem images={images.BaoCaoIcon} onPress={() => popup()}>
              Báo cáo
            </MenuItem>
            <MenuItem images={images.QuanLyPhepIcon} onPress={() => popup()}>
              Quản lý phép
            </MenuItem>
            <MenuItem images={images.ThietLapIcon} onPress={() => popup()}>
              Thiết lập
            </MenuItem>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerTop}>
            <MenuItem images={images.LogoutIcon} onPress={() => logoutAsync()}>
              Đăng xuất
            </MenuItem>
          </View>
          <View style={styles.footerBottom}>
            <MenuItem images={images.UuDaiIcon} onPress={() => popup()}>
              Ưu đãi
            </MenuItem>
            <MenuItem images={images.BaoLoiIcon} onPress={() => popup()}>
              Báo lỗi
            </MenuItem>
            <MenuItem images={images.LamMoiUngDungIcon} onPress={() => popup()}>
              Làm mới ứng dụng
            </MenuItem>
            <MenuItem
              images={images.KiemTraCapNhatIcon}
              onPress={() => popup()}>
              Kiểm tra cập nhật
            </MenuItem>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
