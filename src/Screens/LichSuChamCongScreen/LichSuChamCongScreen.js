import { View, Text, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import { CheckInDetail, GeneralLayout, InputAndPicker, LinearGradientCommon, Wrapper } from '../../Components';
import styles from './styles';
import { LICHSUCHAMCONGSCREEN_TITLE } from '../../Shared/text';
import { useTimeKeepingCurrent } from './services';
import {
    getTimeString,
    convertDateToString,
    getStringOfADay
} from '../../Shared/utils';
// import { useDispatch } from 'react-redux';
import { setPopup } from '../../Store/Reducers/setPopupSlice';
// import { FlatList } from 'react-native-gesture-handler';


export default function LichSuChamCongScreen() {
    // const dispatch = useDispatch()
    // const {
    //     timeKeepingHistory,
    //     getTimeKeepingHistoryFilter,
    //     getTimeKeepingHistory
    // } = useTimeKeepingCurrent()

    const [filterFrom, setFilterFrom] = useState('')
    const [filterTo, setFilterTo] = useState('')

    return (
        <Wrapper>
            <GeneralLayout
                headerLeftTitle={LICHSUCHAMCONGSCREEN_TITLE}
            >
                <View style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: "row"
                }}>
                    <View
                        style={{
                            width: "50%",
                            paddingHorizontal: 9
                        }}>
                        <InputAndPicker
                            label="Từ"
                            labelPosition="left"
                            size="small"
                            type="datetime"
                            onPress={(event) => setFilterFrom(event)}
                            datePickerMode="date"
                            maximumDate={new Date()}
                        />
                    </View>
                    <View style={{
                        width: "50%",
                        paddingHorizontal: 9
                    }}>
                        <InputAndPicker
                            label="Đến"
                            labelPosition="left"
                            size="small"
                            type="datetime"
                            onPress={(event) => setFilterTo(event)}
                            datePickerMode="date"
                            maximumDate={new Date()}
                        />
                    </View>
                </View>

                <LinearGradientCommon
                    style={styles.filterButton}
                    onPress={() => {
                        if (filterFrom && filterTo) {
                            if (Date.parse(getStringOfADay(filterFrom).thisDayString) > Date.parse(getStringOfADay(filterTo).thisDayString)) {
                                // dispatch(setPopup({
                                //     isOpen: true,
                                //     title: "Lỗi",
                                //     children: "Vui lòng chọn lại ngày!"
                                // }))
                            } else {
                                // getTimeKeepingHistoryFilter(filterFrom, filterTo)
                            }
                        } else {
                            // getTimeKeepingHistory()
                        }
                    }}
                >
                    <Text style={styles.filterButtonText}>Lọc dữ liệu</Text>
                </LinearGradientCommon>

                <ScrollView
                    style={styles.history}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingBottom: 10
                    }}
                >
                    {/* {
                        timeKeepingHistory && timeKeepingHistory.map((item, index) => <CheckInDetail
                            key={index}
                            date={convertDateToString(item.date).dateStringFull}
                            type='fullday'
                            timesInOut={item.times.length}
                            checkIn={getTimeString(item.times[item.times.length - 1].time)}
                            checkOut={item.times.length > 1 ? getTimeString(item.times[0].time) : ''}
                            inOutTime={item.times.slice(0).reverse().map((i) => {
                                return getTimeString(i.time)
                            })}
                        />)
                    } */}

                </ScrollView>
            </GeneralLayout>
        </Wrapper >
    );
}
