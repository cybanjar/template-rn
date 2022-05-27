import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter'

const Home = ({navigation}) => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Home Page</Text>
      <Button onPress={() => navigation.push('Surah')} title="Surah" />

      <Text style={{color: 'red'}}>Redux {count} </Text>
      <Button onPress={() => dispatch(increment())} title="Increment"  />
      <Button onPress={() => dispatch(decrement())} title="Decrement"  />
    </View>
  )
}

export default Home