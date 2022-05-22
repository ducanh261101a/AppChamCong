import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import buttonColors from '../../Themes/Colors/buttonColors'
import { SvgXml } from '..'
import images from '../../Shared/images'
import styles from './styles'

export default function Button({
    onPress,
    layoutStyles,
    textStyle,
    type,
    children,
    textBold
}) {
    if (type === 'add') {
        return (
            <TouchableOpacity
                style={styles.addButton_container}
                onPress={onPress}
            >
                <SvgXml
                    xml={images.AddIcon}
                />
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                layoutStyles,
                type === "primary" && {
                    backgroundColor: buttonColors.primary.backgroundColor,
                    borderColor: buttonColors.primary.borderColor,
                    borderWidth: 1
                },
                type === "secondary" && {
                    backgroundColor: buttonColors.secondary.backgroundColor,
                    borderColor: buttonColors.secondary.borderColor,
                    borderWidth: 1
                }
            ]}
        >
            <Text style={[
                textStyle,
                type === "primary" && {
                    color: buttonColors.primary.textColor,
                },
                type === "secondary" && {
                    color: buttonColors.secondary.textColor,
                },
                textBold && {
                    fontWeight: "700"
                }
            ]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}