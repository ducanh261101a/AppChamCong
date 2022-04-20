import {StyleSheet} from 'react-native';
import {text, textInput} from '../../Themes/color';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCheckBox: {
    borderWidth: 0,
    justifyContent: 'center',
    marginLeft: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  title: {
    color: text.primary,
  },
});
