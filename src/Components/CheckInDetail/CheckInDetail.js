import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
// import { ICheckInDetail } from '../../Types/ICheckInDetail'
import { BoxShadow } from '..'
import { COME_TITLE_SHORT, FULL_DAY, GO_OUT_TITLE_SHORT, HALF_DAY, IN_OUT_UNIT } from '../../Shared/text'
import { SvgXml } from '..'
import images from '../../Shared/images'
import TimeInOutLogs from '../TimeInOutLogs/TimeInOutLogs'

export default function CheckInDetail({
    date,
    type,
    timesInOut,
    checkIn,
    checkOut,
    inOutTime,
}) {
    return (
        <BoxShadow
            distance={5}
            color="#0000000F"
            marginTop={15}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.headerDay}>
                            {date}
                        </Text>
                        <Text style={styles.headerTimesInOut}>
                            {type === 'fullday' && FULL_DAY}
                            {type === 'halfday' && HALF_DAY}
                            {`, ${timesInOut} ${IN_OUT_UNIT}`}
                        </Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TimeInOutLogs
                            size="small"
                            timeIn={checkIn}
                            timeOut={checkOut}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <SvgXml
                        xml={images.TimesCheckInIcon}
                    />
                    <View style={styles.bodyContent}>
                        {
                            inOutTime && inOutTime.map((item, index) => (
                                <Text
                                    key={index}
                                    style={styles.bodyContentItem}
                                >{item},</Text>
                            ))
                        }
                    </View>
                </View>
            </View>
        </BoxShadow>
    )
}