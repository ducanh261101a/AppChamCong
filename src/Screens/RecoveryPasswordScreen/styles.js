import {StyleSheet} from 'react-native';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';
import mainColors from '../../Themes/Colors/mainColors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    paddingHorizontal: 38,
    paddingTop: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '700',
    color: textColors.title,
    fontFamily: fontFamilies.secondary,
  },
  description: {
    marginTop: 20,
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.primary,
    color: textColors.default,
    marginBottom: 40,
    width: '100%',
  },
  button: {
    width: '100%',
    height: 56,
    borderRadius: 15,
  },
  buttonLabel: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.secondary,
  },
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
  inputBox: {
    marginTop: 6,
    height: 56,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: mainColors.borderInput,
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.secondary,
  },
  inputError: {
    marginTop: 6,
    height: 22,
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.secondary,
    fontWeight: '400',
    color: textColors.error,
  },
  footer: {
    marginTop: 47,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  footerText: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.secondary,
    color: textColors.default,
    fontWeight: '400',
  },
  footerTextBackLoginScreen: {
    marginLeft: 9,
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.secondary,
    color: textColors.title,
    fontWeight: '700',
  },
});
