import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { BoxShadow } from '..'
import { fontSizes } from '../../Themes/font'
import { SvgXml } from '..'
import DatePicker from 'react-native-date-picker'
import { convertDateToString, convertTimeToString, getTimeString } from '../../Shared/utils'
import { text } from '../../Themes/color'
import { setPopup } from '../../Store/Reducers/setPopupSlice'
// import { useDispatch, useSelector } from 'react-redux'
import images from '../../Shared/images'

export default function InputAndPicker({
    name,
    size,
    label,
    labelPosition,
    type,
    onPress,
    onChangeText,
    datePickerMode,
    maximumDate,
    margin,
    options,
    value
}) {
    const [date, setDate] = useState()
    const [datePickerOpen, setDatePickerOpen] = useState(false)
    // const clipboard = useSelector((state) => state.clipboard.value)
    // const dispatch = useDispatch()

    const getValue = (key, type, value, defaultValue) => {
        if (key === type) {
            return value
        }

        return defaultValue
    }
    const getValueInput = () => {
        if (date && datePickerMode === "date") {
            return convertDateToString(date?.toISOString()).dateString
        }
        if (date && datePickerMode === "datetime") {
            return convertTimeToString(date?.toISOString()).timeString
        }
        if (type === "select") {
            // const find = clipboard.find((item) => item.name === name)
            const getValue = options?.find((item) => item.value === find?.value)
            return getValue?.label
        }

        if (type === "text" || type === "textarea") {
            return value
        }

        return ''
    }


    const FocusInput = ({ type }) => {

        const InputLayoutTouch = ({ onPress }) => {
            return (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        zIndex: 1000,
                    }}
                    onPress={onPress}
                />
            )
        }

        if (type === "datetime") {
            return (
                <InputLayoutTouch
                    onPress={() => {
                        setDatePickerOpen(true)
                        Keyboard.dismiss()
                    }}
                />
            )
        }

        if (type === "select") {
            return (
                <InputLayoutTouch
                    onPress={() => {
                        // dispatch(setPopup({
                        //     title: label,
                        //     isOpen: true,
                        //     select: {
                        //         name: name ? name : '',
                        //         options: options
                        //     }
                        // }))
                        Keyboard.dismiss()
                    }}
                />
            )
        }

        return (
            <></>
        )
    }

    return (
        <View style={[
            {
                height: size === 'small' ? getValue(type, "textarea", 102, 38) : getValue(type, "textarea", 112, 48),
                marginTop: margin && margin.top ? margin.top : 0,
                marginBottom: margin && margin.bottom ? margin.bottom : 0,
            },
            styles.container
        ]}>

            {
                labelPosition === "left" && <Text style={styles.label}>{label}</Text>
            }

            <BoxShadow
                color="#0000000F"
                distance={8}
                containerStyle={{
                    width: labelPosition === "left" ? "75%" : "100%",

                }}
            >

                <View
                    style={[
                        styles.textInputLayout, {
                            paddingLeft: size === 'small' ? 11 : 22,
                            paddingRight: size === 'small' ? getValue(type, "datetime", 11 + 21, 11) : getValue(type, "datetime", 22 + 21, 22),
                            width: "100%",
                            height: "100%",
                            position: 'relative'
                        }
                    ]}

                >
                    <FocusInput type={type} />
                    <TextInput
                        style={[styles.textInput, {
                            fontSize: size === 'small' ? fontSizes.sm : fontSizes.md
                        }]}
                        placeholder={labelPosition === "inside" ? label : ""}
                        onChangeText={onChangeText}
                        editable={type !== "datetime" && type !== "select"}
                        value={getValueInput()}
                        placeholderTextColor={text.primary}
                        multiline={type === "textarea"}
                        numberOfLines={4}
                    />
                    {
                        type === "datetime" && <SvgXml
                            xml={images.CalendarIcon}
                            style={{
                                position: 'absolute',
                                right: size === 'small' ? 11 : 22,
                                top: size === 'small' ? 9 : 19,
                                bottom: size === 'small' ? 9 : 19,
                            }}
                        />
                    }
                    {
                        type === "select" && <SvgXml
                            width={20}
                            height={20}
                            xml={images.ExpandMoreIcon}
                            style={{
                                position: 'absolute',
                                right: size === 'small' ? 11 : 22,
                                top: size === 'small' ? 9 : 19,
                                bottom: size === 'small' ? 9 : 19,
                            }}
                        />
                    }
                </View>
            </BoxShadow>

            <DatePicker
                mode={datePickerMode}
                maximumDate={maximumDate}
                modal
                open={datePickerOpen}
                date={date || new Date()}
                onConfirm={(date) => {
                    setDatePickerOpen(false)
                    setDate(date)
                    onPress(date)
                }}
                onCancel={() => {
                    setDatePickerOpen(false)
                }}
                textColor="#ffffff"
                theme='dark'
                locale='vi'
                title={`Chọn ngày ${label}`.toLocaleUpperCase()}
                confirmText='Xác nhận'
                cancelText='Hủy'
            />

        </View >
    )
}