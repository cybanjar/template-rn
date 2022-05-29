import React, { useState, useEffect } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  FlatList, 
  ActivityIndicator, 
  ScrollView, SafeAreaView, TouchableHighlight }
from 'react-native'
const theme = require('../styles')
import axios from 'axios'
import { BaseUrl } from '../config/api'

const Surah = () => {
  const [form, setForm] = useState({
    title: '',
    body: ''
  })
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  const sendData = () => {
    console.log('send data: ', form)
  }

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value
    })
  }

  useEffect(() => {
    getSurah()
  }, [])

  const getSurah = async() => {
    try {
      setLoading(true)

      const res = await axios.get(`${BaseUrl}/surah`)
      setData(res.data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const detail = (val) => {
    alert('ok')
  }

  return (
    <View style={theme.container}>
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
      
      { isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ number }, index) => number}
          renderItem={({ item }) => (
            <TouchableHighlight
            key={item.key}
            onPress={detail}>
              <View style={{ backgroundColor: 'white' }}>
                <Text>{item.name.short}, {item.name.translation.id}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  )
}

export default Surah