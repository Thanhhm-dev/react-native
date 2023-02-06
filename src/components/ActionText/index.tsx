import { Text, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'
import Style from './style'

const arrMath: string[] = ['+', '-', 'x', '÷']
const ActionText = (props: any) => {
    const onPress = (id: number, text: string) => {
        if (arrMath.includes(text)) {
            props.class = Style.btnCliked
            props.onButtonClearScreen(id)
        }
        props.onButtonGetText(text)
    }

    return (
        <TouchableOpacity onPress={() => onPress(props.id, props.text)}>
            <Text style={[Style.buttonCircle, props.class]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default ActionText