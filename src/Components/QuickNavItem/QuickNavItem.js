import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from '..';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setPopup} from '../../Store/Reducers/setPopupSlice';

export default function QuickNavItem({width, icon, label, code, onPress}) {
  const navigation = useNavigation();
  const marginIcon = width - 38;
  const dispatch = useDispatch();
  const onPressNavigate = code => {
    switch (code) {
      case 'thong-tin-cham-cong':
        navigation.navigate('QuanLyChamCongScreen');
        break;
      case 'danh-sach-dang-ki-vao-ra':
        navigation.navigate('DanhSachDangKiVaoRaScreen');
        break;
      default:
        dispatch(
          setPopup({
            isOpen: true,
            title: 'Thông báo',
            children: 'Chức năng đang phát triển!',
          }),
        );
        break;
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: width,
        },
      ]}
      onPress={onPress ? onPress : () => onPressNavigate(code)}>
      <SvgXml
        xml={icon}
        width={width < 38 ? width - marginIcon : 38}
        height={width < 38 ? width - marginIcon : 38}
      />
      <View style={styles.labelLayout}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.labelText}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
