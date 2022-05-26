import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { home, surah, book } from '../pages'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={home} />
                <Stack.Screen name="Surah" component={surah} />
                <Stack.Screen name="book" component={book} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;