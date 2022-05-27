import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Home Page</Text>
      <Button onPress={() => navigation.push('Surah')} title="Surah" />
      <Button onPress={() => navigation.push('Book')} title="Book"  />
    </View>
  )
}

export default Home