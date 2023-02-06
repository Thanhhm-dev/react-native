import { StyleSheet } from 'react-native'
import  Color  from "../../contants/color";

const Style = StyleSheet.create({
    screen: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    number: {
        color: Color.red,
        fontSize: 55
    }
});

export default Style