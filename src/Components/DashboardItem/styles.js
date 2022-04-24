import {StyleSheet} from 'react-native';
import mainColors from '../../Themes/Colors/mainColors';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    height: 87.65,
    backgroundColor: mainColors.backgroundPrimary,
    borderRadius: 12,
  },
  header: {
    width: '100%',
    height: 35.06,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  labelLayout: {
    marginLeft: 10,
  },
  labelText: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    color: textColors.white,
  },
  content: {
    height: 87.65 - 35.06,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontFamily: fontFamilies.primaryBold,
    fontSize: fontSizes.xxl,
    color: textColors.default,
  },
});
