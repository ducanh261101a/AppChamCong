import { StyleSheet } from "react-native";
import { fontFamilies, fontSizes } from "../../Themes/font";

export default StyleSheet.create({
    containerCommon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerLarge: {
        height: 117,
    },
    containerSmall: {
        width: "100%",
        height: 60,
    },
    rowContainerCommon: {
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowContainerLarge: {
        width: `${(159.62 / 339.62) * 100}%`,
    },
    rowContainerSmall: {
        width: `${(67.11 / 149.11) * 100}%`,
    },
    labelContainerLarge: {
        width: "100%",
        height: 49.32
    },
    labelContainerSmall: {
        width: "100%",
        height: 28.65
    },
    textLabelLarge: {
        fontFamily: fontFamilies.secondary,
        fontSize: fontSizes.md
    },
    textLabelSmall: {
        fontFamily: fontFamilies.secondary,
        fontSize: fontSizes.sm
    },
    topLabel: {
        fontSize: 40,
        fontFamily: fontFamilies.secondary,
        lineHeight: 55,
    },
    bottomLabel: {
        fontSize: fontSizes.sm,
        fontFamily: fontFamilies.secondary,
        lineHeight: 20,
    },
})