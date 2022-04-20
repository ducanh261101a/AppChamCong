import DeviceInfo from 'react-native-device-info';
import {Platform, Dimensions} from 'react-native';
import {getStatusBarHeight} from './StatusBarUtil';

export const getBottomBarHeight = () => {
  let deviceId = '';

  if (Platform.OS === 'ios') {
    deviceId = DeviceInfo.getDeviceId();
    if (!DeviceInfo.hasNotch() && deviceId.slice(0, 4) !== 'iPad') return 0; //iPhone không có Notch

    if (DeviceInfo.hasNotch()) return 34; // iPhone có Notch

    if (deviceId.slice(0, 5) === 'iPad8') return 34; //Ipad

    if (parseInt(deviceId.slice(4, 6)) > 12) return 34;

    return 0;
  }

  return 0;
};
