import { View, Text } from 'react-native'
import { useState, } from 'react'

import Style from './style'

const Display = (props: any) => {
  const [value, setValue] = useState(props.textDisplay);
  return (
    <View style={Style.screen}>
      <Text style={[Style.number]}>{props.textDisplay}</Text>
    </View>
  )
}

export default Display