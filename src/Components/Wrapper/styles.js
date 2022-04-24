import {StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight} from '../../Shared/StatusBarUtil';
import mainColors from '../../Themes/Colors/mainColors';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: mainColors.background,
  },
  layout: {
    width: width,
    height: '100%',
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  backgroundImage: {
    top: -getStatusBarHeight(),
    zIndex: 1,
    width: width,
    height: 268,
    position: 'absolute',
  },
  statusBarColor: {
    height: getStatusBarHeight() + 10,
    top: -getStatusBarHeight() - 10,
    width: width,
    backgroundColor: mainColors.backgroundPrimary,
  },
  container: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
});
