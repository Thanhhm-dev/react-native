import { View } from 'react-native'
import { useRef, useState } from 'react'
import AppStyles from './App.components.style'
import Display from './src/components/Display'
import Button from './src/components/Button'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/redux/reducers/index'

const store = createStore(reducers)

export default function App() {
  const [value, setValue] = useState('');
  const [total, setTotal] = useState('');
  let flgClear = useRef(false)
  let flgClearAll = useRef(false)
  let clearTotal = useRef(false)
  let calc: any = {
    '+': '+',
    '-': '-',
    'x': '*',
    '÷': '/'
  }

  const clearCalculator = () => {
    if (flgClearAll.current) {
      setTotal('')
      setValue('')
      flgClearAll.current = false
    }
  }

  const showText = (data: any) => {
    if (['+', '-', 'x', '÷'].includes(data)) {
      if (clearTotal.current) {
        setTotal(value.toString().concat(calc[data]))
        clearTotal.current = false;
      } else {
        setTotal(total.toString().concat(value.toString().concat(calc[data])))
      }
      return
    }
    if (!isNaN(data) || data == ',') {
      if (flgClear.current) {
        flgClear.current = false
      } else {
        data = value.concat(data)
      }
    }
    if (data == '=') {
      console.log(total)
      data = eval(total + value)
      clearTotal.current = true
    }
    if (data == 'C') {
      flgClearAll.current = true
    }
    if (data == '%') {
      data = parseFloat(value) / 100
    }
    if (data == '+/-') {
      data = 0 - parseFloat(value)
    }

    setValue(data)
    clearCalculator()
  }

  const clearScreen = (flag: boolean) => {
    flgClear.current = flag
  }

  return (
    <Provider store={store}>
      <View style={AppStyles.container}>
        <Display textDisplay={value} />
        <Button onDisplay={showText} setFlagClearScreen={clearScreen} />
      </View>
    </Provider>
  )
}
