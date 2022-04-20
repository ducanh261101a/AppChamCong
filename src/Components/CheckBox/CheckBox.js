import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {CheckBox} from 'react-native-elements';
const IconTick = require('../../Assets/Images/Icon-Tick.png');
const IconUntick = require('../../Assets/Images/Icon-Untick.png');

export default function CheckBoxElement({
  name,
  title,
  size,
  checked,
  onPress,
  textStyle,
  textComponent,
}) {
  return (
    <View style={styles.container}>
      <CheckBox
        containerStyle={[
          styles.containerCheckBox,
          {
            height: size,
            width: size,
          },
        ]}
        checkedIcon={
          <Image
            source={IconTick}
            style={{
              width: size,
              height: size,
            }}
          />
        }
        uncheckedIcon={
          <Image
            source={IconUntick}
            style={{
              width: size,
              height: size,
            }}
          />
        }
        checked={checked}
        onPress={onPress}
      />
      {textComponent ? (
        textComponent
      ) : (
        <Text style={[textStyle, styles.title]}>{title}</Text>
      )}
    </View>
  );
}
