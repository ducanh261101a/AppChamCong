import {Dimensions, StyleSheet} from 'react-native';
import {fontFamilies, fontSizes} from '../../Themes/font';
import {dotCircle} from '../../Themes/color';
import {getStatusBarHeight} from '../../Shared/StatusBarUtil';
import textColors from '../../Themes/Colors/textColors';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  background: {
    position: 'relative',
    width: '100%',
  },
  onboardingBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 377,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    shadowColor: '#FFDEC8',
    zIndex: 2,
    paddingHorizontal: 24,
    paddingTop: 33,
    paddingBottom: 22,
    display: 'flex',
    justifyContent: 'space-between',
  },
  onboardingImage1: {
    position: 'absolute',
    width: 364.03,
    height: 287.49,
    bottom: 349.51,
    zIndex: 1,
  },
  onboardingImage2: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 236,
    bottom: 345.31,
    zIndex: 1,
    resizeMode: 'contain',
  },
  onboardingImage3: {
    position: 'absolute',
    height: 308,
    bottom: 345,
    zIndex: 1,
    resizeMode: 'contain',
  },
  imageContainer: {
    position: 'absolute',
    width: width,
    height: '100%',
  },
  imageLayout: {
    position: 'absolute',
    width: width * 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  imageView: {
    position: 'relative',
    width: width,
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 20 + getStatusBarHeight(),
    height: 58.65,
    zIndex: 1,
  },
  panigation: {
    bottom: 0,
    width: '100%',
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  panigationDot: {
    width: 66,
    height: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  panigationDotNotFocus: {
    width: 12,
    height: 12,
    backgroundColor: dotCircle.notFocus,
    borderRadius: 50,
  },
  nextIcon: {
    width: 36,
    height: 36,
  },
  startBtn: {
    position: 'relative',
    width: 75,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startBtnIcon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  startBtnTitle: {
    position: 'absolute',
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.sm,
    color: textColors.white,
    zIndex: 2,
  },
  content: {
    alignItems: 'center',
  },
  header: {
    height: 32,
    width: 170,
  },
  contentCommon: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.lg,
    fontStyle: 'normal',
    color: textColors.secondary,
    textAlign: 'center',
  },
  contentBold: {
    fontFamily: fontFamilies.secondaryBold,
    fontWeight: 'bold',
  },
  contentTab: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 278,
    alignItems: 'center',
  },
});
