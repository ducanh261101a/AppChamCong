import { StyleSheet, Dimensions, Platform } from "react-native";
import { getBottomBarHeight } from "../../Shared/BottomBarUtil";
import { BODY_HEIGHT } from "../../Shared/constants";
import { getStatusBarHeight } from "../../Shared/StatusBarUtil";
import { background, button, text } from "../../Themes/color";
import { fontFamilies, fontSizes } from "../../Themes/font";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
    wrapper: {
        backgroundColor: background.primary
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: background.secondary,
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
        fontSize: fontSizes.semi_md,
        color: text.labelWhite
    }
})