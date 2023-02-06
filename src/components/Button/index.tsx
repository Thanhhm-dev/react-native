import { View } from 'react-native'
import { useRef, useState } from 'react'
import Style from './style'
import ActionText from '../ActionText/index'

let items: { style: {}, text: string }[] = [
  { style: Style.firstRow, text: 'C' },
  { style: Style.firstRow, text: '+/-' },
  { style: Style.firstRow, text: '%' },
  { style: Style.lastChild, text: '÷' },
  { style: {}, text: '7' },
  { style: {}, text: '8' },
  { style: {}, text: '9' },
  { style: Style.lastChild, text: 'x' },
  { style: {}, text: '4' },
  { style: {}, text: '5' },
  { style: {}, text: '6' },
  { style: Style.lastChild, text: '-' },
  { style: {}, text: '1' },
  { style: {}, text: '2' },
  { style: {}, text: '3' },
  { style: Style.lastChild, text: '+' },
  { style: Style.buttonZero, text: '0' },
  { style: {}, text: ',' },
  { style: Style.lastChild, text: '=' },
];

const Button = (props: any) => {
  const [itemList, setItemList] = useState(items)
  let flgClear = useRef(false);

  const getText = (data: string) => {
    props.onDisplay(data)
    if (flgClear.current) {
      setItemList(items)
    }
  }

  const clearScreen = (id: number) => {
    flgClear.current = true
    props.setFlagClearScreen(flgClear.current)
    let tmpItems: { style: {}, text: string }[] = [...items]
    let element = {
      style: Style.btnCliked,
      text: tmpItems[id].text
    }
    tmpItems.splice(id, 1, element)
    setItemList(tmpItems)
  }

  let itemsView = items.map((item, index) => {
    return <ActionText onButtonGetText={getText}
      onButtonClearScreen={clearScreen}
      key={index}
      id={index}
      text={item.text}
      class={itemList[index].style} />
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