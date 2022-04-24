import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export default function FoodItem({item, deleteHandler}) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(item.key)}>
            <View style={styles.individualFoodItem}>
                <MaterialIcons name="delete" size={18} color={'#333'}/>
                <Text style={styles.foodName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    individualFoodItem : {
        padding : 10,
        borderRadius : 10,
        borderWidth : 1,
        borderColor: 'grey',
        borderStyle: 'dashed',
        marginBottom : 10,
        flexDirection : 'row'
      },
      foodName : {
        paddingLeft : 10
      }
})
