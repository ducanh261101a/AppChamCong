import { StyleSheet } from "react-native";
import { text } from "../../Themes/color";
import { fontFamilies, fontSizes } from "../../Themes/font";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: 31,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: fontFamilies.defaultBold,
        fontSize: fontSizes.lg,
        color: text.black,
        marginLeft: 10
    },
    titleHideBackButton: {
        fontFamily: fontFamilies.defaultBold,
        color: text.black,
    },
    rightRow: {
        alignItems: 'center'
    },
    rightRowTitle: {
        color: text.labelRightHeader,
        textDecorationLine: 'underline',
        fontSize: fontSizes.sm,
        fontFamily: fontFamilies.primary
    }
})