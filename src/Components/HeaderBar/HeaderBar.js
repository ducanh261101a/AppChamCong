import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
// import { IHeaderBar } from '../../Types/IHeaderBar';
import {SvgXml} from '..';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetClipboard} from '../../Store/Reducers/setClipboardSlice';
import images from '../../Shared/images';

export default function HeaderBar({
  title,
  right,
  hideBackButton,
  headerTitleFontSize,
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.leftRow}>
        {!hideBackButton && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              dispatch(resetClipboard());
            }}>
            <SvgXml xml={images.BackIcon} />
          </TouchableOpacity>
        )}
        <Text
          style={
            hideBackButton
              ? [
                  styles.titleHideBackButton,
                  {
                    fontSize: headerTitleFontSize,
                  },
                ]
              : styles.title
          }>
          {title}
        </Text>
      </View>
      <View style={styles.rightRow}>
        {right && (
          <TouchableOpacity onPress={right.onPress}>
            <Text style={styles.rightRowTitle}>{right.title}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
