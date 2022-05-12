// import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import styles from './styles'
// import { SvgXml } from '..'
// import { EMPTY } from '../../Shared/text'
// // import commonStyles from '../../Shared/commonStyles'
// // import { getNameEmployee } from '../../Shared/utils'
// // import { useSelector } from 'react-redux'
// // import { RootState } from '../../Store/configureStore'
// import { BoxShadow } from '..'
// import CheckBoxElement from '../CheckBox/CheckBox'
// import images from '../../Shared/images'

// const BannerEmpty = require('../../Assets/Images/Banner-Empty.png')

// const TabPanelItems = ({
//     key,
//     item
// }) => {

//     const [fullName, setFullName] = useState<any>('')
//     // useEffect(() => {
//     //     (async () => {
//     //         const result = await getNameEmployee(item.employee_id)
//     //         setFullName(result)
//     //     })()
//     // }, [])

//     return (
//         <BoxShadow
//             color="#0000000F"
//             distance={8}
//             marginBottom={17}
//             key={key}
//         >
//             <View
//                 style={[styles.contentItem]}
//             >
//                 <View style={styles.contentItemLayout}>
//                     <SvgXml
//                         style={styles.userIcon}
//                         xml={images.UserBWIcon}
//                     />
//                     <TouchableOpacity style={styles.contentItemBody}>
//                         <Text style={styles.contentItemAuthor}>{fullName}</Text>
//                         <Text
//                             style={styles.contentItemMessage}
//                             numberOfLines={1}
//                             ellipsizeMode={'tail'}
//                         >{item.content}</Text>
//                     </TouchableOpacity>
//                     <View style={styles.action}>
//                         <TouchableOpacity>
//                             <SvgXml
//                                 xml={images.EditIcon}
//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <SvgXml
//                                 xml={images.DeleteIcon}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </BoxShadow>
//     )
// }

// const DATA = [
//     {
//         id: '0',
//         title: 'Tạo video học tập cho khách hàng trong phiếu sau',
//         tag: '82372'
//     },
//     {
//         id: '1',
//         title: 'Tạo video học tập cho khách hàng trong phiếu sau # 82372',
//         tag: '82372'
//     },
//     {
//         id: '2',
//         title: 'Tạo video học tập cho khách hàng trong phiếu sau # 82372',
//         tag: '82372'
//     },
//     {
//         id: '3',
//         title: 'Tạo video học tập cho khách hàng trong phiếu sau # 82372',
//         tag: '82372'
//     },
//     {
//         id: '4',
//         title: 'Tạo video học tập cho khách hàng trong phiếu sau # 82372',
//         tag: '82372'
//     },
//     {
//         id: '5',
//         title: 'Tạo video học tập cho khách hàng trong phiếu sau # 82372',
//         tag: '82372'
//     },
// ];


// const RenderTaskWork = ({ item }) => {

//     return (<View style={styles.checkBoxItemContainer}>
//         <View style={styles.checkBoxItemLayout}>
//             <View style={styles.checkBoxAndLabelLayout}>
//                 <CheckBoxElement
//                     onPress={() => console.log('a')}
//                     checked={false}
//                     size={20}
//                     textComponent={<View style={styles.checkBoxLabelLayout}>
//                         <Text style={styles.checkBoxLabelCommon}>{item.title} <Text style={styles.checkBoxTagNumber}> #{item.tag}</Text></Text>
//                     </View>}
//                 />
//             </View>

//             <View style={styles.checkBoxItemActions}>
//                 <TouchableOpacity>
//                     <SvgXml
//                         xml={images.EditIcon}
//                     />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <SvgXml
//                         xml={images.DeleteIcon}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     </View>)
// };

// export default function TabPanel({
//     defaultIndex,
//     headerItems,
//     hasCheckBox,
// }) {
//     const [focusIndex, setFocusIndex] = useState(defaultIndex)

//     const Header = () => {
//         if (hasCheckBox) {
//             return <View style={[
//                 styles.header,
//                 {
//                     height: 40,
//                     marginBottom: 26
//                 }
//             ]}>
//                 {
//                     headerItems.map((item, index) => (
//                         <View
//                             key={index}
//                             style={[
//                                 item.index !== headerItems.length && styles.headerItemBorderRight,
//                                 focusIndex === item.index && styles.headerItemFocus,
//                                 {
//                                     width: `${100 / headerItems.length}%`
//                                 }
//                             ]}
//                         >
//                             <TouchableOpacity
//                                 style={styles.headerItemCommonLabel}
//                                 onPress={() => setFocusIndex(item.index)}
//                             >
//                                 <Text style={[
//                                     styles.headerItemCommonLabelStyle,
//                                     focusIndex === item.index && styles.headerItemFocusLabelStyle
//                                 ]}>{item.label}</Text>
//                                 <Text style={[
//                                     styles.headerItemCommonLabelStyle,
//                                     focusIndex === item.index && styles.headerItemFocusLabelStyle
//                                 ]}>({item.quantity < 10 ? `0${item.quantity}` : item.quantity})</Text>
//                             </TouchableOpacity>
//                         </View>
//                     ))
//                 }
//             </View>
//         }

//         return <View
//             style={{
//                 width: "100%"
//             }}
//         >
//             <View style={[
//                 styles.header,
//                 {
//                     height: 64
//                 }
//             ]}>
//                 {
//                     headerItems.slice(0, 3).map((item, index) => (
//                         <TouchableOpacity
//                             key={index}
//                             style={[
//                                 styles.headerItemCommon,
//                                 focusIndex === item.index && styles.headerItemFocus,
//                             ]}
//                             onPress={() => setFocusIndex(item.index)}
//                         >
//                             <View style={styles.headerItemCommonLabel}>
//                                 <Text style={[
//                                     styles.headerItemCommonLabelStyle,
//                                     focusIndex === item.index && styles.headerItemFocusLabelStyle
//                                 ]}>{item.label}</Text>
//                                 <Text style={[
//                                     styles.headerItemCommonLabelStyle,
//                                     focusIndex === item.index && styles.headerItemFocusLabelStyle
//                                 ]}>({item.quantity < 10 ? `0${item.quantity}` : item.quantity})</Text>
//                             </View>
//                         </TouchableOpacity>
//                     ))
//                 }
//             </View>
//             {
//                 headerItems.length > 3 && <View style={[
//                     styles.header,
//                     {
//                         height: 64,
//                         marginTop: 24
//                     }
//                 ]}>
//                     {
//                         headerItems.slice(3, headerItems.length).map((item, index) => (
//                             <TouchableOpacity
//                                 key={index}
//                                 style={[
//                                     styles.headerItemCommon,
//                                     focusIndex === item.index && styles.headerItemFocus,
//                                 ]}
//                                 onPress={() => setFocusIndex(item.index)}
//                             >
//                                 <View style={styles.headerItemCommonLabel}>
//                                     <Text style={[
//                                         styles.headerItemCommonLabelStyle,
//                                         focusIndex === item.index && styles.headerItemFocusLabelStyle
//                                     ]}>{item.label}</Text>
//                                     <Text style={[
//                                         styles.headerItemCommonLabelStyle,
//                                         focusIndex === item.index && styles.headerItemFocusLabelStyle
//                                     ]}>({item.quantity < 10 ? `0${item.quantity}` : item.quantity})</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         ))
//                     }
//                 </View>
//             }
//         </View>
//     }

//     return (
//         <View style={[styles.container, {
//             height: hasCheckBox ? 237.92 : '100%',
//         }]}>

//             <Header />
//             {
//                 !hasCheckBox
//                 && headerItems[focusIndex - 1].content?.length !== 0
//                 && <ScrollView
//                     style={styles.layout}
//                     contentContainerStyle={styles.contentContainer}
//                 >
//                     {
//                         headerItems[focusIndex - 1].content?.map((item, index) => {
//                             return (
//                                 <TabPanelItems
//                                     key={index}
//                                     item={item}
//                                 />
//                             )
//                         })
//                     }
//                 </ScrollView>
//             }
//             {
//                 !hasCheckBox && headerItems[focusIndex - 1].content?.length === 0 &&
//                 <View style={styles.banner}>
//                     <Image
//                         source={BannerEmpty}
//                         style={styles.bannerImage}
//                     />
//                     <Text style={styles.bannerText}>
//                         {EMPTY}
//                     </Text>
//                 </View>
//             }
//             {/* 
//             {
//                 hasCheckBox && <View style={styles.listTask}>
//                     <FlatList
//                         nestedScrollEnabled
//                         data={DATA}
//                         renderItem={renderItem}
//                         keyExtractor={item => item.id}
//                     />
//                 </View >
//             } */}

//             {
//                 hasCheckBox
//                 && headerItems[focusIndex - 1].content?.length !== 0
//                 && <ScrollView
//                     style={styles.listTask}
//                 >
//                     {
//                         DATA.map((item, index) => {
//                             return (
//                                 <RenderTaskWork
//                                     key={index}
//                                     item={item}
//                                 />
//                             )
//                         })
//                     }
//                 </ScrollView>
//             }
//         </View >
//     )
// }