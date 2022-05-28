import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
const theme = require('../styles')

const Surah = () => {
  const [form, setForm] = useState({
    title: '',
    body: ''
  })

  const sendData = () => {
    console.log('send data: ', form)
  }

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value
    })
  }

  return (
    <View>
      <Text>Surah Page {form.title}</Text>
      <TextInput 
        onChangeText={value => onInputChange(value, 'title')} 
        value={form.title} 
        style={[theme.textInput]} 
        placeholder='Please input' />
      <TextInput 
        onChangeText={value => onInputChange(value, 'body')} 
        value={form.body} 
        style={[theme.textInput]} 
        placeholder='Please input' />

      <Button title='Send Data' onPress={sendData} />
    </View>
  )
}

export default Surah