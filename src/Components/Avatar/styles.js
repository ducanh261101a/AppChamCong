import {StyleSheet} from 'react-native';
import {border} from '../../Themes/color';

export default StyleSheet.create({
  containerCommon: {
    borderRadius: 50,
    borderColor: border.avatar,
  },
  containerSmall: {
    width: 34,
    height: 34,
    borderWidth: 1,
  },
  containerLarge: {
    width: 61,
    height: 61,
    borderWidth: 1,
  },
  containerMedium: {
    width: 46,
    height: 46,
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderColor: border.avatar,
    borderRadius: 50,
  },
});
