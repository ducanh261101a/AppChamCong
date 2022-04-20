import {getStatusBarHeight} from './StatusBarUtil';
import {getBottomBarHeight} from './BottomBarUtil';
import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
export const SAFE_AREA_VIEW_HEIGHT =
  height - getStatusBarHeight() - getBottomBarHeight();
export const BODY_HEIGHT = height - getStatusBarHeight() - 50 - 50 - 31 - 19;
