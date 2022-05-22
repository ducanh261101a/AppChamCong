import { Dimensions, StyleSheet } from "react-native";
import { background, text } from "../../Themes/color";
import { fontFamilies, fontSizes } from "../../Themes/font";

const width = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerItemCommon: {
        width: '30%',
        borderBottomColor: text.labelNotFocusPrimary,
        borderBottomWidth: 1.5,
    },
    headerItemBorderRight: {
        borderRightColor: text.labelNotFocusPrimary,
        borderRightWidth: 1.5,
    },
    headerItemCommonLabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 54,
    },
    headerItemCommonLabelStyle: {
        fontFamily: fontFamilies.defaultBold,
        fontSize: fontSizes.semi_md,
        lineHeight: 22,
        color: text.labelNotFocusPrimary
    },
    headerItemFocus: {
        borderBottomColor: text.labelFocusPrimary,
    },
    headerItemFocusLabelStyle: {
        color: text.labelFocusPrimary
    },
    banner: {
        width: 238,
        height: 151.19,
        top: 115
    },
    bannerImage: {
        width: 238,
        height: 151.19,
    },
    bannerText: {
        fontFamily: fontFamilies.default,
        marginTop: 20,
        fontSize: fontSizes.md,
        textAlign: 'center',
        color: text.black
    },
    layout: {
        width: width - 33 * 2,
        marginTop: 32,
    },
    contentContainer: {
        display: "flex",
        alignItems: 'center',
        paddingVertical: 10,
    },
    contentItem: {
        width: width - 42 - 44,
        height: 74,
        borderRadius: 15,
        backgroundColor: background.primary,
    },
    contentItemLayout: {
        position: 'relative',
        width: "100%",
        height: "100%",
    },
    userIcon: {
        left: 19,
        top: 21,
        right: 22.57,
        position: 'absolute'
    },
    action: {
        top: 27,
        right: 11,
        position: 'absolute',
        width: 52,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentItemBody: {
        height: "100%",
        top: 16,
        left: 70,
        right: 80,
        position: 'absolute',
    },
    contentItemAuthor: {
        width: "100%",
        fontFamily: fontFamilies.defaultBold,
        fontSize: fontSizes.md,
        color: text.black,
        lineHeight: 19
    },
    contentItemMessage: {
        overflow: 'hidden',
        fontFamily: fontFamilies.default,
        fontWeight: '300',
        fontSize: fontSizes.sm,
        color: text.black,
        lineHeight: 16
    },
    listTask: {
        height: 171.92,
        width: width - 25 * 2,
    },
    checkBoxItemContainer: {
        paddingHorizontal: 19,
        marginBottom: 12
    },
    checkBoxItemLayout: {
        display: 'flex',
        justifyContent: 'center',
        width: width - 25 * 2 - 19 - 18.17,
        position: 'relative'
    },
    checkBoxAndLabelLayout: {
        width: width - 25 * 2 - 80.57 - 19
    },
    checkBoxLabelLayout: {
        width: width - 25 * 2 - 53 - 80.57,
    },
    checkBoxLabelCommon: {
        fontFamily: fontFamilies.primary,
        fontSize: fontSizes.semi_sm,
        lineHeight: 14,
        color: text.black,
    },
    checkBoxTagNumber: {
        color: "#017EFA",
        lineHeight: 12,
    },
    checkBoxItemActions: {
        position: 'absolute',
        right: 0,
        width: 52,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    }
})