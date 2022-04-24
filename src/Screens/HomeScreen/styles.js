import {StyleSheet} from 'react-native';
import {background, text} from '../../Themes/color';
import mainColors from '../../Themes/Colors/mainColors';
import textColors from '../../Themes/Colors/textColors';
import {fontFamilies, fontSizes} from '../../Themes/font';

export default StyleSheet.create({
  backgroundImage: {
    width: '100%',
    top: 0,
    right: 0,
    height: 258,
  },
  container: {
    paddingTop: 20,
  },
  personal: {
    marginHorizontal: 25,
    width: '100%',
    height: 45,
    display: 'flex',
    flexDirection: 'row',
  },
  infomation: {
    marginLeft: 15,
  },
  name: {
    height: 24,
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.primaryBold,
    color: textColors.default,
  },
  position: {
    height: 21,
    fontSize: fontSizes.xs,
    fontFamily: fontFamilies.primary,
    color: textColors.default,
  },
  salary: {
    paddingTop: 28,
  },
  salaryHeader: {
    width: '100%',
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salaryHeaderTitle: {
    fontFamily: fontFamilies.primaryBold,
    fontSize: fontSizes.sm,
    color: textColors.default,
  },
  salaryHeaderWorkingDays: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  salaryHeaderWorkingDaysUnit: {
    marginLeft: 5,
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    color: textColors.default,
  },
  salaryTotal: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 11,
    alignItems: 'center',
  },
  salaryTotalInfomation: {
    marginLeft: 15,
    height: 67,
    justifyContent: 'center',
  },
  salaryTotalTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  salaryTotalTitleText: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    color: textColors.white,
    marginRight: 8,
  },
  salaryTotalValue: {
    fontFamily: fontFamilies.primaryBold,
    fontSize: fontSizes.xxl,
    color: textColors.white,
  },
  salaryDetail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 34,
    width: '100%',
    height: 87.65,
  },
  commonTitle: {
    height: 24,
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.primaryBold,
  },
  quickNavigationContainer: {
    width: '100%',
    minHeight: 210,
    backgroundColor: mainColors.backgroundPrimary,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 16,
  },
  calendarAndWorkContainer: {
    paddingVertical: 6,
    width: '100%',
    height: 444,
  },
  calendarAndWork_moreButtonContainer: {
    width: '100%',
    height: 19.35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  calendarAndWork_moreButton: {
    height: 19.35,
    display: 'flex',
    flexDirection: 'row',
  },
  calendarAndWork_moreButtonLabel: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    color: text.labelFocusPrimary,
    lineHeight: 17.3,
  },
  calendarAndWork_tab: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },
  calendarAndWork_tabWork: {
    width: '33%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarAndWork_tabMeetingSchedule: {
    width: '33%',
    height: 40,
    borderColor: '#A2A4B9',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarAndWork_tabRequest: {
    width: '33%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarAndWork_tabLabel: {
    fontFamily: fontFamilies.primaryBold,
    fontSize: fontSizes.sm,
    lineHeight: 20,
  },
});
