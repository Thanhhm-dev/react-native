import { Text, TouchableOpacity } from 'react-native'
import Style from './style'
import { connect } from 'react-redux';
import { changeStyleAction } from '../../redux/actions/calculatorAction'

const arrMath: string[] = ['+', '-', 'x', '÷']
const ActionText = (props: any) => {
    const onPress = (id: number, text: string) => {
        if (arrMath.includes(text)) {
            props.changeStyleComponent({id: id, style: Style.btnCliked})
            props.onButtonClearScreen(id)
        } else {
            props.changeStyleComponent({id: 0, style: {}})
        }
        props.onButtonGetText(text)
    }

    return (
        <TouchableOpacity onPress={() => onPress(props.id, props.text)}>
            <Text style={[Style.buttonCircle, props.calculatorReducer[props.id].style]}>{props.calculatorReducer[props.id].text}</Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (reducer: any) => ({
    calculatorReducer: reducer.calculatorReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
    changeStyleComponent: changeStyleAction(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionText);
