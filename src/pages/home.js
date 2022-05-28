import React from 'react'
import { View, Text, Button, StyleSheet, useColorScheme } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counter'
import Colors from '../theme/Colors'
const s = require('../styles')

const Home = ({navigation}) => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={ [styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }] }>
      <Text style={ [s.fontMedium, { color: isDarkMode ? Colors.white : Colors.black }]}>Home Page</Text>
      <Button onPress={() => navigation.push('Surah')} title="Surah" />

      <Text style={{color: 'red'}}>Redux {count} </Text>
      <Button onPress={() => navigation.push('Book')} title="Book"  />
      <Button onPress={() => dispatch(increment())} title="Increment"  />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
  },
})