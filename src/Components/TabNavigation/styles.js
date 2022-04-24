import {Dimensions, StyleSheet} from 'react-native';
import {getBottomBarHeight} from '../../Shared/BottomBarUtil';
import {background, text} from '../../Themes/color';
import mainColors from '../../Themes/Colors/mainColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    width: width,
    height: 52,
    bottom: getBottomBarHeight() > 0 ? getBottomBarHeight() : 3,
    alignItems: 'center',
  },
  layout: {
    width: width - 10 * 2,
    backgroundColor: mainColors.backgroundPrimary,
    height: 52,
    borderRadius: 35,
    alignItems: 'center',
    position: 'relative',
  },
  homeIcon: {
    position: 'absolute',
    left: 42,
    top: 14,
    bottom: 14,
  },
  workIcon: {
    position: 'absolute',
    left: ((width - 10 * 2) * 137) / 394,
    top: 14,
    bottom: 14,
  },
  kPIIcon: {
    position: 'absolute',
    right: ((width - 10 * 2) * 137) / 394,
    top: 14,
    bottom: 14,
  },
  salaryIcon: {
    position: 'absolute',
    right: 42,
    top: 14,
    bottom: 14,
  },
  focusLayout: {
    width: 117,
    backgroundColor: '#FFF4ED',
    borderRadius: 31,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelCommon: {
    color: text.labelFocusSeconday,
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.primary,
    marginLeft: 9,
  },
  homeFocus: {
    position: 'absolute',
    left: 4,
    top: 4,
    bottom: 4,
  },
  workFocus: {
    position: 'absolute',
    left: ((width - 10 * 2) * 90) / 394,
    top: 4,
    bottom: 4,
  },
  kPIFocus: {
    position: 'absolute',
    right: ((width - 10 * 2) * 90) / 394,
    top: 4,
    bottom: 4,
  },
  salaryFocus: {
    position: 'absolute',
    right: 4,
    top: 4,
    bottom: 4,
  },
});
