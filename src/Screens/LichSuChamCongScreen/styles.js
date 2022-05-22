import { StyleSheet, Dimensions, Platform } from "react-native";
import { BODY_HEIGHT } from "../../Shared/constants";
import { background, text } from "../../Themes/color";
import mainColors from "../../Themes/Colors/mainColors";
import { fontFamilies, fontSizes } from "../../Themes/font";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: mainColors.background,
        paddingTop: 22,
    },
    history: {
        marginTop: 16,
        width: width,
        left: -17,
        right: -17,
        height: BODY_HEIGHT - 38 - 12 - 38 - 23,
    },
    filterButton: {
        marginTop: 12,
        height: 38,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterButtonText: {
        textTransform: 'uppercase',
        fontSize: fontSizes.md,
        color: text.labelWhite,
        fontFamily: fontFamilies.secondary,
        fontWeight: 'bold'
    }
})