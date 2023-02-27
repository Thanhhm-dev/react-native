import { View } from 'react-native'
import { useRef } from 'react'
import Style from './style'
import ActionText from '../ActionText/index'
import { INIT_STATE } from '../../contants/redux'

const Button = (props: any) => {
  let flgClear = useRef(false);

  const getText = (data: string) => {
    props.onDisplay(data)
  }

  const clearScreen = (id: number) => {
    flgClear.current = true
    props.setFlagClearScreen(flgClear.current)
  }

  let itemsView = INIT_STATE.map((item, index) => {
    return <ActionText onButtonGetText={getText}
      onButtonClearScreen={clearScreen}
      key={index}
      id={index}
      text={item.text}
      class={INIT_STATE[index].style} />
  })

  return (
    <View>
      <View style={Style.row}>{itemsView.slice(0, 4)}</View>
      <View style={Style.row}>{itemsView.slice(4, 8)}</View>
      <View style={Style.row}>{itemsView.slice(8, 12)}</View>
      <View style={Style.row}>{itemsView.slice(12, 16)}</View>
      <View style={Style.row}>{itemsView.slice(16)}</View>
    </View>
  )
}

export default Button