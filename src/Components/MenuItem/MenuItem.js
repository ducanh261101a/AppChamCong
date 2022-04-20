import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from '..';
import styles from './styles';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export default function MenuItem({onPress, images, children}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        navigation.dispatch(DrawerActions.closeDrawer());
      }}
      style={styles.container}>
      {images ? <SvgXml xml={images} width={24} height={24} /> : null}
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
}
