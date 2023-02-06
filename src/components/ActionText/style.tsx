import { StyleSheet } from 'react-native'
import Color from "../../contants/color";

const Style = StyleSheet.create({
    buttonCircle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        lineHeight: 80,
        marginTop: 10,
        backgroundColor: Color.gray20,
        color: Color.gray,
        textAlign: 'center',
        fontSize: 35
    },
    btnCliked: {
        backgroundColor: Color.white,
        color: Color.orange
    }
});

export default Style