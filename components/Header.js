import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Uber Eats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        paddingTop : 25,
        backgroundColor : 'cyan',
        height : 65,
        alignItems : 'center',
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#fff'
    }
})
