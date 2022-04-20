import {StyleSheet} from 'react-native';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 24,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.primary,
    paddingLeft: 14,
    lineHeight: 20,
    color: textColors.default,
  },
});
