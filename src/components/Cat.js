import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Pressable } from 'react-native'

const getFullname = (first, second) => {
    return first + ' ' + second
}

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(false)
    const [text, setText] = useState('')
    const onClick = () => {
        if (isHungry === false)
            setIsHungry(true)
        else 
            setIsHungry(false)
    }

    return (
        <View style={styles.sectionContainer}>
            <Text>Hello, I am cat {getFullname('Moly', 'Anne')}</Text>
            <Text>I am {props.name}, and {isHungry ? 'hungry' : 'full'}</Text>
            <TextInput onChangeText={setText} value={text} style={styles.textInput} placeholder='Please input' />
            
            <Pressable style={styles.button} onPress={onClick}>
                <Text style={styles.text}>{isHungry ? 'Eat' : 'Puasa'}</Text>
            </Pressable>

            <Text>Your input: {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 20,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 16,
        marginTop: 8,
        fontWeight: '400',
        borderRadius: 8,
        paddingHorizontal: 16
    },
    button: {
        borderRadius: 8,
        marginVertical: 8,
        alignItems: 'center', 
        justifyContent: 'center',
        paddingVertical: 8,
        backgroundColor: 'royalblue'
    },
    text: {
        paddingVertical: 4,
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    }
});   

export default Cat