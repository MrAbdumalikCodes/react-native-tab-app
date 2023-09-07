import React from 'react'
import { View,Text,StatusBar,Button } from 'react-native'

export default function Detailed({ navigation }) {
  return (
    <View className='flex-1 items-center justify-center bg-slate-500'>
			<Text>Detailed</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
			<StatusBar style='auto' />
	</View>
  )
}
