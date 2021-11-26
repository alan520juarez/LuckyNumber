import React, { useState } from 'react'
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [name, SetName] = useState("");
  const [number, setNumber] = useState(null);

  const validate = () =>{
    let num = number;
    let n1 = 0;
    let n2 = 0;

    if(name=="" || num == null)
    {
      Alert.alert("Error","Please be sure to fill in the fields")
    }
    else
    {
      if(num%1 != 0 || num < 0)
      {
        Alert.alert("Error","Please enter positive integer values")
      }
      else
      {
        if(num>99 || num < 1 )
        {
          Alert.alert("Please enter values ​​less than 100 and greater than 0")
        }
        else
        {
          if(num < 10)
          {
            num = num*7
            do
            {
              n1 = Math.floor(num/10)
              n2 = num%10
              num = n1+n2
            }while (num>10)
            Alert.alert("Congrats", "Welcome "+ name + " your lucky number is: " + num)
          }
          else
          {
            do
            {
              n1 = Math.floor(num/10)
              n2 = num%10
              num = n1+n2
            }while (num>=10)
            Alert.alert("Congrats", "Welcome "+ name + " your lucky number is: " + num)
          }
        }
      }
    }
  }

  return (
    <View style={styles.Body}>
      <Image style={styles.Image}
        source={require("./src/images/siete.jpg")}/>
      <Text style={styles.Title}>LUCKY NUMBER</Text>
      <TextInput
        style={styles.Input}
        placeholder="Enter your name"
        onChangeText={SetName}
      ></TextInput>

      <TextInput
        style={styles.Input}
        placeholder="Enter your age"
        keyboardType="numeric"
        onChangeText={setNumber}
      ></TextInput>

      <TouchableOpacity style={styles.luckybutton}
        onPress={validate}>
        <Text style={styles.luckytext}>Get my number</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Body:{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  Image:{
    width: 300,
    height: 150,
    margin: "2%",
  }, 
  Title:{
    fontSize: 30,
    fontWeight: "400",
    margin: "2%",
  },
  Input:{
    width: "80%",
    borderBottomWidth: 1,
  },
  luckybutton:{
    margin:"2%",
    width:"40%",
    backgroundColor:"#a4c639",
    padding:"2%",
   
  },
  luckytext:{
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
  Result:{
    margin: "2%",
    fontSize: 15,
  }
})

export default App;