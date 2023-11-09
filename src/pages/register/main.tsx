/* eslint-disable react/react-in-jsx-scope */
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './style.scss'

export default function Register() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
