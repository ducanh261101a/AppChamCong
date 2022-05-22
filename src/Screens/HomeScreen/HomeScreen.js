import {View, Text, ScrollView, TouchableOpacity, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BoxElement,
  DashboardItem,
  QuickNav,
  TabPanel,
  Wrapper,
} from '../../Components';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Avatar} from '../../Components';
import {
  HOMESCREEN_CALENDAR_AND_WORK_TITLE,
  HOMESCREEN_QUICK_NAVIGATION_TITLE,
  HOMESCREEN_SALARY_HEADER_TITLE,
  HOMESCREEN_SALARY_HEADER_UNIT,
  DIEMDANH_BUTTON,
  WELCOME,
} from '../../Shared/text';
import {SvgXml} from '../../Components';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import LinearGradient from 'react-native-linear-gradient';
import {useEmployeeProfile} from './services';
import {setNav} from '../../Store/Reducers/setNavSlice';
import images from '../../Shared/images';
// import {useAuth} from '../../Shared/hooks';
import mainColors from '../../Themes/Colors/mainColors';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const defaultAvatarSource =
    'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';

  const {profile, avatarSource} = useEmployeeProfile();

  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(setNav('home'));
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    console.log('profile', profile);
  }, []);

  // const {logoutAsync} = useAuth();
  const [showSalary, setShowSalary] = useState(false);

  const Infomation = () => {
    return (
      <View style={styles.personal}>
        <Avatar size="medium" uri={avatarSource ?? defaultAvatarSource} />
        <View style={styles.infomation}>
          <Text style={styles.name}>
            {WELCOME} {profile.fullName}
          </Text>
          <Text style={styles.position}>{profile.position}</Text>
        </View>
      </View>
    );
  };
  const SalaryInfo = () => {
    return (
      <BoxElement
        marginTop={28}
        marginHorizontal={25}
        hasBackground={false}
        hasHeader={true}
        headerContent={{
          title: HOMESCREEN_SALARY_HEADER_TITLE,
          right: (
            <View style={styles.salaryHeaderWorkingDays}>
              <SvgXml xml={images.TotalWorkingsDayIcon} />
              <Text style={styles.salaryHeaderWorkingDaysUnit}>
                {'10.000.000'} {HOMESCREEN_SALARY_HEADER_UNIT}
              </Text>
            </View>
          ),
        }}>
        <LinearGradient
          style={styles.salaryTotal}
          colors={['#F07F7E', '#F9A857']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}>
          <TouchableOpacity
            style={styles.salaryTotalInfomation}
            onPress={() => navigation.navigate('FaceCheck')}>
            <Text style={styles.salaryTotalTitle}>{DIEMDANH_BUTTON}</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.salaryDetail}>
          <DashboardItem
            icon={images.TotalWorksIcon}
            width="31.6%"
            header={{
              line1: 'Tổng',
              line2: 'Công chuẩn',
            }}
            headerBackgroundColor={mainColors.headerBackgroundPrimary}>
            {23 && 23}
            {18 && '/' + 18}
          </DashboardItem>
          <DashboardItem
            icon={images.TotalWorksIcon}
            width="31.6%"
            header={{
              line1: 'Số lần đi',
              line2: 'làm muộn',
            }}
            headerBackgroundColor={mainColors.headerBackgroundSecondary}>
            {10 && 10}
          </DashboardItem>
          <DashboardItem
            icon={images.TotalWorksIcon}
            width="31.6%"
            header={{
              line1: 'Số lần',
              line2: 'nghỉ làm',
            }}
            headerBackgroundColor={mainColors.headerBackgroundTertiary}>
            {12 && 12}
          </DashboardItem>
        </View>
      </BoxElement>
    );
  };

  const QuickNavigation = () => {
    return (
      <BoxElement
        marginTop={28}
        marginHorizontal={25}
        hasBackground={true}
        hasHeader={true}
        headerContent={{
          title: HOMESCREEN_QUICK_NAVIGATION_TITLE,
        }}
        contentStyles={styles.quickNavigationContainer}>
        <QuickNav />
      </BoxElement>
    );
  };

  const CalendarAndWork = () => {
    return (
      <BoxElement
        marginTop={28}
        marginBottom={100}
        marginHorizontal={25}
        hasBackground={true}
        hasHeader={true}
        headerContent={{
          title: HOMESCREEN_CALENDAR_AND_WORK_TITLE,
        }}
        contentStyles={styles.calendarAndWorkContainer}>
        <View style={styles.calendarAndWork_moreButtonContainer}>
          <TouchableOpacity style={styles.calendarAndWork_moreButton}>
            <Text
              style={[
                styles.calendarAndWork_moreButtonLabel,
                {
                  textDecorationLine: 'underline',
                },
              ]}>
              Xem thêm
            </Text>
            <Text style={styles.calendarAndWork_moreButtonLabel}>{' >>'}</Text>
          </TouchableOpacity>
        </View>
        {/* <CalendarOneLine onPressDay={e => console.log(e)} /> */}
        {/* <TabPanel
                  hasCheckBox={true}
                  defaultIndex={1}
                  headerItems={[
                      {
                          index: 1,
                          label: 'Công việc',
                          quantity: 2,
                          content: [
                              {

                              },
                          ]
                      },
                      {
                          index: 2,
                          label: 'Lịch họp',
                          quantity: 3,
                          content: []
                      }, {
                          index: 3,
                          label: 'Yêu cầu',
                          quantity: 4,
                          content: []
                      }
                  ]}
              /> */}

        {/* <CalendarTask /> */}
      </BoxElement>
    );
  };

  return (
    <Wrapper isInHomeScreen={true} bottomNav="home">
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <Infomation />
        <SalaryInfo />
        <QuickNavigation />
        {/* <CalendarAndWork /> */}
      </ScrollView>
    </Wrapper>
  );
}
