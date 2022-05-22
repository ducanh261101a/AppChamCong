import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
// import { ILinearGradientCommon } from '../../Types/ILinearGradientCommon';
import { TouchableOpacity } from 'react-native';

export default function LinearGradientCommon({
    style,
    children,
    onPress
}) {
    return (
        <TouchableOpacity onPress={onPress} disabled={onPress === undefined}>
            <LinearGradient
                style={style}
                colors={["#F07F7E", "#F9A857"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
            >

                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}