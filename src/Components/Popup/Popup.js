import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import commonStyles from '../../Shared/commonStyles';
import {SvgXml} from '..';
import {useDispatch, useSelector} from 'react-redux';
import {closePopup} from '../../Store/Reducers/setPopupSlice';
import CheckBoxElement from '../CheckBox/CheckBox';
import {setClipboard} from '../../Store/Reducers/setClipboardSlice';
import images from '../../Shared/images';

export default function Popup() {
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popup.value);

  const clipboard = useSelector(state => state.clipboard.value);

  const select = clipboard.find(item => item.name === popup.select?.name);

  const ListCheckBox = () => {
    if (popup.select && popup.select?.options?.length < 10) {
      return (
        <View>
          {popup.select?.options &&
            popup.select?.options?.map((item, index) => (
              <CheckBoxElement
                key={index}
                title={item.label}
                size={20}
                checked={item.value === select?.value}
                onPress={() => {
                  dispatch(
                    setClipboard({
                      name: popup.select ? popup.select.name : '',
                      value: item.value,
                    }),
                  );
                  dispatch(closePopup());
                }}
              />
            ))}
        </View>
      );
    }
    return (
      <ScrollView
        style={{
          height: 330,
        }}>
        {popup.select?.options &&
          popup.select?.options?.map((item, index) => (
            <CheckBoxElement
              key={index}
              title={item.label}
              size={20}
              checked={item.value === select?.value}
              onPress={() => {
                dispatch(
                  setClipboard({
                    name: popup.select ? popup.select.name : '',
                    value: item.value,
                  }),
                );
                dispatch(closePopup());
              }}
            />
          ))}
      </ScrollView>
    );
  };

  if (!popup.isOpen) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <TouchableOpacity
          style={styles.background}
          onPress={() => dispatch(closePopup())}
        />
        <View style={[styles.content, commonStyles.boxShadow]}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => dispatch(closePopup())}>
            <SvgXml xml={images.CloseIcon} />
          </TouchableOpacity>
          {popup.title && <Text style={styles.title}>{popup.title}</Text>}
          {popup.select && <ListCheckBox />}
          <Text style={styles.chidlrenText}>
            {popup.children && popup.children}
          </Text>
        </View>
      </View>
    </View>
  );
}
