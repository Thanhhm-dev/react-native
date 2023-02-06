import { StyleSheet } from 'react-native'
import Color from "../../contants/color";

const Style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    firstRow: {
        backgroundColor: Color.gray1,
        color: Color.black1
    },
    lastChild: {
        backgroundColor: Color.orange
    },
    buttonZero: {
        width: 180
    },
    btnCliked: {
        backgroundColor: Color.white,
        color: Color.orange
    }
});

export default Style