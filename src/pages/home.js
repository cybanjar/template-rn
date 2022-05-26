import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation: { navigate } }) => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Home Page</Text>
      <Button onPress={() => navigate('Surah')} title="Go Surah" />
      <Button title="Homes" onPress={() => navigate('Profile')} />
    </View>
  )
}

export default Home