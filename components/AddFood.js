import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default function AddFood({submitHandler}) {
    const [inputText, setInputText] = useState("")

    const onChangeHandler = (inputTextValue) => {
        setInputText(inputTextValue)
    }
    return (
        <View>
            <TextInput
             placeholder="enter food name..."
             style={styles.inputField}
             onChangeText={onChangeHandler}
            />
            <Button title="Add Food" color='cyan' onPress={() => submitHandler(inputText)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputField : {
        borderBottomColor : 'grey',
        borderBottomWidth : 1,
        paddingHorizontal : 8,
        paddingVertical : 6,
        marginBottom : 5
    }
})
