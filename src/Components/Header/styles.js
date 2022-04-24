import {StyleSheet} from 'react-native';
import mainColors from '../../Themes/Colors/mainColors';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  layout: {
    backgroundColor: mainColors.backgroundPrimary,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerLayout: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  drawerIcon: {
    width: 18,
    height: 12,
  },
  notification: {
    width: 25,
    height: 25,
  },
  avatar: {
    marginLeft: 17,
    height: 35,
    width: 35,
  },
  screenName: {
    fontFamily: fontFamilies.primaryBold,
    fontSize: fontSizes.lg,
    color: textColors.default,
  },
});
