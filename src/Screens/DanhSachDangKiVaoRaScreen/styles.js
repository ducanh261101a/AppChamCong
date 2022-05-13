import { StyleSheet, Dimensions } from "react-native";
import mainColors from "../../Themes/Colors/mainColors";

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
        paddingHorizontal: 18,
        paddingVertical: 11,
    },

})