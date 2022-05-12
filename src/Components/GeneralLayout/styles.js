import { StyleSheet, Dimensions } from "react-native";
// import { getStatusBarHeight } from "../../Shared/StatusBarUtil";
import { background } from "../../Themes/color";
import { BODY_HEIGHT } from "../../Shared/constants"

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 17,
        paddingVertical: 25
    },
    body: {
        marginTop: 19,
        width: "100%",
        height: BODY_HEIGHT,
        borderRadius: 15
    },
    backgroundBody: {
        backgroundColor: background.primary,
    }
})