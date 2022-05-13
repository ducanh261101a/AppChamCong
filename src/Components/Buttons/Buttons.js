// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// // import { IButton, IButtons } from '../../Types/IButtons'
// import styles from './styles'
// import { button } from '../../Themes/color'
// import { fontSizes } from '../../Themes/font'

// export default function Buttons({
//     buttons,
//     size,
// }) {
//     return (
//         <View style={styles.container}>
//             {buttons.map((item, index) => (
//                 <View
//                     key={index}
//                     style={[styles.layout, {
//                         width: `${(100 / buttons.length) - 3}%`
//                     }]}
//                 >
//                     {
//                         item.header && <Text style={[
//                             styles.headerTitleCommon,
//                             item.header.color === 'default' && {
//                                 color: button.default.headerTitle
//                             },
//                             item.header.color === 'secondary' && {
//                                 color: button.secondary.headerTitle
//                             },
//                             item.header.color === 'primary' && {
//                                 color: button.primary.headerTitle
//                             },
//                         ]}>
//                             {item.header.title}
//                         </Text>
//                     }
//                     <TouchableOpacity
//                         disabled={item.body.onPress === undefined}
//                         onPress={item.body.onPress}
//                         style={[
//                             styles.buttonCommon,
//                             size === 'large' && {
//                                 height: 49.5
//                             },
//                             size === 'small' && {
//                                 height: 28.65
//                             },
//                             size === 'medium' && {
//                                 height: 37,
//                                 width: 112
//                             },
//                             item.color === 'default' && {
//                                 backgroundColor: button.default.background
//                             },
//                             item.color === 'secondary' && {
//                                 backgroundColor: button.secondary.background
//                             },
//                             item.color === 'primary' && {
//                                 backgroundColor: button.primary.background
//                             },
//                             item.color === 'primary_2' && {
//                                 backgroundColor: button.primary_2.background,
//                                 borderColor: button.primary_2.border,
//                                 borderWidth: 1
//                             },
//                         ]}
//                     >
//                         <Text
//                             style={[
//                                 styles.buttonTitleCommon,
//                                 size === 'large' && {
//                                     fontSize: fontSizes.md
//                                 },
//                                 size === 'small' && {
//                                     fontSize: fontSizes.xs
//                                 },
//                                 item.color === 'default' && {
//                                     color: button.default.label
//                                 },
//                                 item.color === 'secondary' && {
//                                     color: button.secondary.label
//                                 },
//                                 item.color === 'primary' && {
//                                     color: button.primary.label
//                                 },
//                                 item.color === 'primary_2' && {
//                                     color: button.primary_2.label
//                                 },
//                                 item.body.bold === true && {
//                                     fontWeight: 'bold'
//                                 },
//                             ]}
//                         >
//                             {item.body.title}
//                         </Text>
//                     </TouchableOpacity>
//                     {
//                         item.footer && <Text style={[
//                             styles.footerTitleCommon,
//                             item.footer.title !== '' && item.color === 'default' && {
//                                 color: button.default.footerTitle
//                             },
//                             item.footer.title !== '' && item.color === 'secondary' && {
//                                 color: button.secondary.footerTitle
//                             },
//                             item.footer.title !== '' && item.color === 'primary' && {
//                                 color: button.primary.footerTitle
//                             },
//                             item.footer.title === '' && {
//                                 color: button.default.footerTitle
//                             }
//                         ]}>
//                             {item.footer.title === '' ? '--:--' : item.footer.title}
//                         </Text>
//                     }
//                 </View>
//             ))}
//         </View>
//     )
// }