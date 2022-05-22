import { StyleSheet } from "react-native";
import { background } from "../../Themes/color";
import mainColors from "../../Themes/Colors/mainColors";
import { fontFamilies, fontSizes } from "../../Themes/font";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: mainColors.background,
        paddingHorizontal: 17,
        paddingTop: 25,
        height: '100%'
    },
    body: {
        paddingHorizontal: 25,
        paddingVertical: 30,
        width: "100%",
        height: "100%"
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32
    },
    button: {
        width: 112,
        height: 37,
        fontSize: fontSizes.sm,
        fontFamily: fontFamilies.primary
    }
})