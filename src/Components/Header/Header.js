import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {SvgXml, Avatar} from '../index';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import images from '../../Shared/images';
import {useSelector} from 'react-redux';
import {RootState} from '../../Store/configureStore';
// import { getScreenName } from '../../Shared/utils'
import {useRoute} from '@react-navigation/native';
export default function Header({isInHomeScreen}) {
  const route = useRoute();
  const navigation = useNavigation();
  // const infomationEmployee = useSelector(
  //   state => state.infomationEmployee.value,
  // );
  return (
    <View style={[!isInHomeScreen && styles.layout, styles.container]}>
      <TouchableOpacity
        style={styles.drawerLayout}
        onPress={() => {
          if (route?.name === 'GiaoViecScreen') {
            navigation.goBack();
          } else {
            navigation.dispatch(DrawerActions.openDrawer());
          }
        }}>
        <SvgXml
          style={styles.drawerIcon}
          xml={
            route?.name === 'GiaoViecScreen'
              ? images.BackIcon
              : images.DrawerIcon
          }
        />
      </TouchableOpacity>
      {/* {
                route?.name === "GiaoViecScreen" && <Text style={styles.screenName}>
                    {getScreenName(route?.name)}
                </Text>
            } */}
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.notification}
          onPress={() => navigation.navigate('NotificationScreen')}>
          <SvgXml xml={images.NotificationIcon} />
        </TouchableOpacity>

        {!isInHomeScreen && (
          <TouchableOpacity style={styles.avatar}>
            <Avatar
              size="small"
              uri={
                'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
