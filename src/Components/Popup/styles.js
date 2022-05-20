import {StyleSheet} from 'react-native';
import mainColors from '../../Themes/Colors/mainColors';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 99,
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  layout: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: mainColors.backgroundBlack,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    left: 25,
    right: 25,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: mainColors.backgroundPrimary,
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    top: -30,
    height: 20,
    width: 20,
  },
  title: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.secondary,
    fontWeight: 'bold',
    lineHeight: 21,
    marginBottom: 21,
    color: textColors.default,
  },
  chidlrenText: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.secondary,
    color: textColors.default,
  },
});
