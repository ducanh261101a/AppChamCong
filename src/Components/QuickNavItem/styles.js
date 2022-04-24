import {StyleSheet, Dimensions} from 'react-native';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 82,
    marginBottom: 18,
  },
  labelLayout: {
    width: '100%',
    height: 38,
    overflow: 'hidden',
    marginTop: 6,
  },
  labelText: {
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: fontSizes.xs,
    fontFamily: fontFamilies.primary,
    color: textColors.default,
  },
});
