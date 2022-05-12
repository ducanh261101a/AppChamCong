import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
// import { IAddButton } from '../../Types/IAddButton'
import { SvgXml } from '..'
import images from '../../Shared/images'

export default function AddButton({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            {/* <SvgXml
                xml={images.AddIcon}
            /> */}
        </TouchableOpacity>
    )
}