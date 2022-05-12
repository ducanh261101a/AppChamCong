import { Dimensions, StyleSheet } from "react-native";
import { background, text } from "../../Themes/color";
import { fontFamilies, fontSizes } from "../../Themes/font";

const width = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        padding: 12,
        width: width - 15 * 2,
        backgroundColor: background.primary,
        borderRadius: 12
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        width: '55%'
    },
    headerRight: {
        width: '41%'
    },
    headerDay: {
        fontFamily: fontFamilies.primary,
        fontWeight: "bold",
        fontSize: fontSizes.semi_md,
        lineHeight: 22,
        color: text.black
    },
    headerTimesInOut: {
        marginTop: 7,
        fontFamily: fontFamilies.primary,
        fontSize: fontSizes.semi_md,
        lineHeight: 20,
        color: text.primary
    },
    body: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignContent: "center"
    },
    bodyContent: {
        marginLeft: 9,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    bodyContentItem: {
        width: 50,
        fontFamily: fontFamilies.primary,
        fontSize: fontSizes.semi_sm,
        lineHeight: 18,
        color: text.primary
    }
})