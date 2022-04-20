import {StyleSheet} from 'react-native';
import textColors from '../../Themes/Colors/textColors';
import mainColors from '../../Themes/Colors/mainColors';
import {text, textInput} from '../../Themes/color';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 114,
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabelContainer: {
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.secondary,
    fontWeight: '500',
    color: textColors.default,
  },
  inputImportant: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.secondary,
    fontWeight: '400',
    color: textColors.important,
    marginLeft: 5,
  },
  inputBoxContainer: {
    width: '100%',
    position: 'relative',
    marginTop: 6,
    borderWidth: 1,
    borderColor: mainColors.borderInput,
    justifyContent: 'center',
  },
  inputBox: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.primary,
    color: textColors.default,
  },
  inputError: {
    marginTop: 6,
    height: 22,
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.secondary,
    fontWeight: '400',
    color: textColors.error,
  },
  icon: {
    zIndex: 2,
    position: 'absolute',
    left: 16,
  },

  iconShowPassword: {
    zIndex: 2,
    position: 'absolute',
    right: 16,
  },
});
