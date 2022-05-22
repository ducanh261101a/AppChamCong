import { StyleSheet } from "react-native";
import { fontFamilies, fontSizes } from "../../Themes/font";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    layout: {
        alignItems: 'center',
    },
    headerTitleCommon: {
        fontFamily: fontFamilies.primary,
        fontSize: fontSizes.xxxxxl,
        marginBottom: 12
    },
    buttonCommon: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    buttonTitleCommon: {
        fontFamily: fontFamilies.primary,
    },
    footerTitleCommon: {
        fontSize: fontSizes.semi_md,
        fontFamily: fontFamilies.primary,
        marginTop: 12
    }
})