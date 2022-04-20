import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SvgXml} from '..';
import images from '../../Shared/images';
export default function InputElement({
  label,
  placeholder,
  name,
  onChangeText,
  icon,
  error,
  textAlign,
  type,
  important,
  containerHeight,
  inputBoxHeight,
  borderRadius,
  backgroundColor,
  iconSize,
}) {
  const [isHidePassword, setIsHidePassword] = useState(true);

  const Label = () => {
    if (!label) return <></>;
    return (
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        {important && <Text style={styles.inputImportant}>*</Text>}
      </View>
    );
  };

  const Icon = () => {
    if (!icon) return <></>;
    return (
      <SvgXml
        xml={icon}
        width={iconSize}
        height={iconSize}
        style={styles.icon}
      />
    );
  };

  const IconShowPassword = () => {
    if (type !== 'password') return <></>;
    return (
      <TouchableOpacity
        onPress={() => setIsHidePassword(!isHidePassword)}
        style={[
          styles.iconShowPassword,
          {
            width: iconSize,
            height: iconSize,
          },
        ]}>
        <SvgXml
          xml={
            !isHidePassword ? images.HidePasswordIcon : images.ShowPasswordIcon
          }
          width="100%"
          height="100%"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {
          height: containerHeight,
        },
      ]}>
      <Label />
      <View
        style={[
          styles.inputBoxContainer,
          {
            height: label ? inputBoxHeight : containerHeight,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
          },
        ]}>
        <TextInput
          style={[
            styles.inputBox,
            {
              paddingLeft: icon ? 55 : 16,
              paddingRight: type === 'password' ? 55 : 16,
            },
          ]}
          placeholder={placeholder}
          textAlign={textAlign}
          onChangeText={onChangeText}
          autoCapitalize="none"
          secureTextEntry={type === 'password' && isHidePassword}
          multiline={false}
          placeholderTextColor="#C8C8C8"
        />
        <Icon />
        <IconShowPassword />
      </View>
      <Text style={styles.inputError}>{error}</Text>
    </View>
  );
}
