import DeviceInfo from 'react-native-device-info';
import {Platform, StatusBar} from 'react-native';

export const getStatusBarHeight = () => {
  if (Platform.OS == 'android') return StatusBar.currentHeight ?? 0;
  if (Platform.OS != 'ios') return 0;

  if (!DeviceInfo.hasNotch()) return 20;

  const deviceId = DeviceInfo.getDeviceId();

  // https://gist.github.com/adamawolf/3048717

  // https://useyourloaf.com/blog/iphone-13-screen-sizes/
  if (deviceId == 'iPhone14,4') return 50; // iPhone 13 Mini
  if (deviceId == 'iPhone14,2') return 47; // iPhone 13 Pro
  if (deviceId == 'iPhone14,3') return 47; // iPhone 13 Pro Max
  if (deviceId == 'iPhone14,5') return 47; // iPhone 13

  if (deviceId == 'iPhone13,1') return 50; //iPhone 12 Mini
  if (deviceId == 'iPhone13,2') return 47; //iPhone 12
  if (deviceId == 'iPhone13,3') return 47; //iPhone 12 Pro
  if (deviceId == 'iPhone13,4') return 47; //iPhone 12 Pro Max

  // https://developer.apple.com/forums/thread/662466
  const systemVersion = DeviceInfo.getSystemVersion().split('.');
  const major = parseInt(systemVersion[0]);
  if (deviceId == 'iPhone12,1' && major >= 14) return 48; // iPhone 11
  if (deviceId == 'iPhone12,5' && major >= 14) return 40; // iPhone 11 Pro Max

  return 32;
};
