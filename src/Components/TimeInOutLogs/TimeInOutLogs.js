import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Label } from '..'
import textColors from '../../Themes/Colors/textColors'

export default function TimeInOutLogs({
    size,
    timeIn,
    timeOut,
}) {
    if (size === "large") {
        return (
            <View style={[styles.containerCommon, styles.containerLarge]}>
                <View style={[styles.rowContainerCommon, styles.rowContainerLarge]}>
                    <Text style={[
                        {
                            color: timeIn !== '--:--' ? "#F79E61" : textColors.secondary
                        },
                        styles.topLabel
                    ]}>
                        {timeIn ? timeIn : '--:--'}
                    </Text>
                    <Label
                        type="default"
                        layoutStyles={styles.labelContainerLarge}
                        textStyles={styles.textLabelLarge}
                    >
                        VÀO LÀM
                    </Label>
                </View>

                <View style={[styles.rowContainerCommon, styles.rowContainerLarge]}>
                    <Text style={[
                        {
                            color: timeOut !== '--:--' ? "#F79E61" : textColors.secondary
                        },
                        styles.topLabel
                    ]}>
                        {timeOut ? timeOut : '--:--'}
                    </Text>
                    <Label
                        type="secondary"
                        layoutStyles={styles.labelContainerLarge}
                        textStyles={styles.textLabelLarge}
                    >
                        RA VỀ
                    </Label>
                </View>

            </View>
        )
    }

    return (
        <View style={[styles.containerCommon, styles.containerSmall]}>
            <View style={[styles.rowContainerCommon, styles.rowContainerSmall]}>
                <Label
                    type="default"
                    layoutStyles={styles.labelContainerSmall}
                    textStyles={styles.textLabelSmall}
                >
                    VÀO
                </Label>

                <Text style={[
                    {
                        color: timeIn !== '--:--' ? textColors.timeIn : textColors.secondary
                    },
                    styles.bottomLabel
                ]}>
                    {timeIn ? timeIn : '--:--'}
                </Text>
            </View>

            <View style={[styles.rowContainerCommon, styles.rowContainerSmall]}>
                <Label
                    type="secondary"
                    layoutStyles={styles.labelContainerSmall}
                    textStyles={styles.textLabelSmall}
                >
                    RA
                </Label>
                <Text style={[
                    {
                        color: timeOut ? textColors.timeOut : textColors.secondary
                    },
                    styles.bottomLabel
                ]}>
                    {timeOut ? timeOut : '--:--'}
                </Text>
            </View>
        </View>
    )
}