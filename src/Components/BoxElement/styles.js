import {Dimensions, StyleSheet} from 'react-native';
import mainColors from '../../Themes/Colors/mainColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
  },
  header: {
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  headerTitle: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.primaryBold,
    color: '#444242',
  },
  background: {
    backgroundColor: mainColors.backgroundPrimary,
    borderRadius: 15,
  },
});
