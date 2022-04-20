import {Dimensions, StyleSheet} from 'react-native';
import {SAFE_AREA_VIEW_HEIGHT} from '../../Shared/constants';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

const {width} = Dimensions.get('window');
const widthDrawer = width * 0.75;
export default StyleSheet.create({
  container: {
    flex: 1,
    width: widthDrawer,
  },
  layout: {
    height: SAFE_AREA_VIEW_HEIGHT,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  header: {},
  infomation: {
    marginTop: 30,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    width: widthDrawer - 32,
  },
  infomationDetails: {
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 61,
  },
  fullName: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.secondary,
    fontWeight: '700',
    minHeight: 31,
    color: textColors.default,
    display: 'flex',
    flexWrap: 'wrap',
    width: widthDrawer - 32 - 61 - 16,
  },
  position: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.secondary,
    height: 24,
    color: textColors.default,
  },
  listMenu: {
    height: 276,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footer: {
    height: 244,
  },
  footerTop: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  footerBottom: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
  },
});
