import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GeneralLayout, Wrapper} from '../../Components';
import styles from './styles';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {fontSizes, fontFamilies} from '../../Themes/font';
import {text} from '../../Themes/color';
import Dot from '../../Components/Dot/Dot';
import Modal from '../../Components/Modal/Modal';
import {useQuanLyChamCong} from './services';

LocaleConfig.locales['vi'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Th 1',
    'Th 2',
    'Th 3',
    'Th 4',
    'Th 5',
    'Th 6',
    'Th 7',
    'Th 8',
    'Th 9',
    'Th 10',
    'Th 11',
    'Th 12',
  ],
  dayNames: [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sau',
    'Thứ Bảy',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm nay',
};

LocaleConfig.defaultLocale = 'vi';

export default function QuanLyChamCongScreen({navigation, route}) {
  const [timekeepingMonth, setTimekeepingMonth] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const {listChamCong, thongtinchamcong, getInforOfDate} = useQuanLyChamCong();
  const [dataOfDate, setDataofDate] = useState({});

  const getCurrentMonth = () => {
    var today = new Date();
    var currentMonth = (today.getMonth() + 1).toString();
    setTimekeepingMonth(currentMonth);
  };

  useEffect(() => {
    getCurrentMonth();
  }, []);

  const closeModal = value => {
    setOpenModal(value);
  };

  return (
    <Wrapper>
      <GeneralLayout
        headerLeftTitle={'Quản lý chấm công'}
        bodyStyle={styles.body}
        hasBackgroundBody={true}>
        <Calendar
          firstDay={1}
          theme={{
            dayTextColor: text.black,
            todayTextColor: text.labelFocusSeconday,
            arrowColor: text.labelFocusSeconday,
            textDayFontFamily: fontFamilies.secondary,
            textMonthFontFamily: fontFamilies.defaultBold,
            textDayHeaderFontFamily: fontFamilies.secondary,
            textDayFontSize: fontSizes.xs,
            textMonthFontSize: fontSizes.sm,
            textDayHeaderFontSize: fontSizes.xs,
          }}
          markingType={'multi-dot'}
          markedDates={listChamCong}
          // hideExtraDays={true}
          onDayPress={async day => {
            console.log(day);
            let data = await getInforOfDate(day);
            console.log({data});
            await setDataofDate(data);
            setOpenModal(true);
          }}
          onMonthChange={month => {
            setTimekeepingMonth(month.month.toString());
          }}
        />
        <View>
          <View style={styles.dashedView}>
            <View style={styles.infoTimekeepingView}>
              <Text
                style={{
                  fontFamily: fontFamilies.defaultBold,
                  color: text.black,
                  fontSize: fontSizes.md,
                }}>
                Công tháng {timekeepingMonth}:
              </Text>
              <View
                style={{
                  width: '94%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <Text
                  style={{
                    fontFamily: fontFamilies.secondary,
                    fontSize: fontSizes.sm,
                    color: text.black,
                  }}>
                  Tổng ngày công thực tế:
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamilies.defaultBold,
                    fontSize: fontSizes.sm,
                  }}>
                  {thongtinchamcong.total}
                </Text>
              </View>

              <View
                style={{
                  width: '94%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Dot size={14} type="green" />
                  <Text
                    style={{
                      fontFamily: fontFamilies.secondary,
                      fontSize: fontSizes.sm,
                      color: text.black,
                      marginLeft: 4,
                    }}>
                    Công đủ:
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: fontFamilies.defaultBold,
                    fontSize: fontSizes.sm,
                    color: text.black,
                  }}>
                  {thongtinchamcong.congdu}
                </Text>
              </View>

              <View
                style={{
                  width: '94%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Dot size={14} type="yellow" />
                  <Text
                    style={{
                      fontFamily: fontFamilies.secondary,
                      fontSize: fontSizes.sm,
                      color: text.black,
                      marginLeft: 4,
                    }}>
                    Công thiếu:
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: fontFamilies.defaultBold,
                    fontSize: fontSizes.sm,
                    color: text.black,
                  }}>
                  {thongtinchamcong.congthieu}
                </Text>
              </View>

              <View
                style={{
                  width: '94%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 8,
                  marginBottom: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Dot size={14} type="red" />
                  <Text
                    style={{
                      fontFamily: fontFamilies.secondary,
                      fontSize: fontSizes.sm,
                      color: text.black,
                      marginLeft: 4,
                    }}>
                    Nghỉ:
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: fontFamilies.defaultBold,
                    fontSize: fontSizes.sm,
                    color: text.black,
                  }}>
                  {thongtinchamcong.nghi}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </GeneralLayout>
      {openModal ? (
        <Modal
          showing={openModal}
          closeFunction={closeModal}
          data={dataOfDate}></Modal>
      ) : null}
    </Wrapper>
  );
}
