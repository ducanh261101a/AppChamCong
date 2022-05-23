import {StyleSheet} from 'react-native';
import {text, textInput} from '../../Themes/color';
import {fontFamily, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 300,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },
  topContent: {
    marginTop: 4,
    width: '92%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeftContent: {
    flexDirection: 'row',
  },
  topRightContent: {
    flexDirection: 'row',
    backgroundColor: '#F79E61',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 130,
    borderRadius: 6,
    height: 30,
  },
  image: {
    width: 50,
    height: '100%',
    resizeMode: 'stretch',
  },
  timeText: {
    // fontFamily: fontFamily.defaultBold,
    fontSize: fontSizes.md,
  },
  topText: {
    color: '#fff',
    // fontFamily: fontFamily.default,
    fontSize: fontSizes.sm,
  },
  titleText: {
    color: '#757575',
    // fontFamily: fontFamily.default,
    fontSize: fontSizes.md,
  },
  middleContent: {
    width: '92%',
    height: 170,
  },
  workView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  contentText: {
    // fontFamily: fontFamily.default,
    fontSize: fontSizes.md,
    marginLeft: 10,
  },
  closeBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    top: -50,
  },
});
