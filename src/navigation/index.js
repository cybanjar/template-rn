import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { home, surah, book } from '../pages'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home" 
                screenOptions={{ animationEnabled: false }} 
                detachInactiveScreens="false" >
                <Stack.Screen 
                    name="Home" 
                    component={home} 
                    options={{ headerShown: false }} />
                <Stack.Screen 
                    name="Surah" 
                    component={surah}
                    options={{ headerShown: false }} />
                <Stack.Screen 
                    name="Book" 
                    component={book} 
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;