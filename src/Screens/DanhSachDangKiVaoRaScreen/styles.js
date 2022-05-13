import { StyleSheet, Dimensions } from "react-native";
import { background } from "../../Themes/color";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: background.primary
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: background.secondary,
        paddingHorizontal: 17,
        paddingTop: 25,
        height: '100%'
    },
    body: {
        paddingHorizontal: 18,
        paddingVertical: 11,
    },
    addButton: {
        
    }
})