import {useState} from 'react';
import { FlatList, StyleSheet, View, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import AddFood from './components/AddFood';
import FoodItem from './components/FoodItem';
import Header from './components/Header';


export default function App() {
  const [food, setFood] = useState([
    {name : 'Burger', key : 1},
    {name : 'Pizza', key : 2},
    {name : 'Veg Momo', key : 3},
    {name : 'Chowmen', key : 4},
  ])

  const deleteHandler = (key) => {
    setFood((prevFood) => (
      prevFood.filter((eachFoodItem) => eachFoodItem.key !== key)
    )) 
  }


  const submitHandler = (name) => {
    if(name.length > 3) {
      setFood((prevFood) => (
        [
          {name : name, key : Math.random().toString()},
          ...prevFood
        ]
      ))
    } else {
      Alert.alert('OOPS!', 'Food name must be 3 character long.', [
        {text : "understood", onPress : () => console.log("alert closed")}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddFood submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={food}
              renderItem={({item}) => (
                <FoodItem item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content : {
    flex: 1,
    borderColor : "black",
    marginTop : 40,
    padding : 20,
  },
  list : {
    flex : 1,
    marginTop : 35
  }
});
