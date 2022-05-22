import { StyleSheet } from "react-native";
import { background, text } from "../../Themes/color";
import mainColors from "../../Themes/Colors/mainColors";
import textColors from "../../Themes/Colors/textColors";
import { fontFamilies, fontSizes } from "../../Themes/font";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",

    },
    textInput: {
        height: "100%",
        fontSize: fontSizes.md,
        fontFamily: fontFamilies.secondary,
        color: textColors.primary
    },
    textInputLayout: {
        backgroundColor: mainColors.backgroundPrimary,
        height: "100%",
        borderRadius: 10,
        position: 'relative'
    },
    label: {
        fontFamily: fontFamilies.secondary,
        color: textColors.primary
    }
})