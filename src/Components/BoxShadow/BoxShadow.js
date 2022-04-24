import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {Shadow} from 'react-native-shadow-2';

export default function BoxShadow({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  containerStyle,
  children,
  color,
  distance,
}) {
  return (
    <View
      style={[
        containerStyle,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
        },
      ]}>
      <Shadow
        startColor={color}
        distance={distance ? distance : 8}
        viewStyle={[
          {
            width: '100%',
          },
        ]}>
        {children}
      </Shadow>
    </View>
  );
}
