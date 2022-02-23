
import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';



const App = () => {
  
  const peticion = () =>{
    var url = 'https://calculadora-server.herokuapp.com/states-control';
    const body={
      accountNumber: 20161164,
      name: 'Cristopher Samuel Wuitron Mendoza',
      age: 21,
    };
    fetch(url, {
        method:'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error', error))
    .then(response => console.log('Success:', response));
  };
  return (
    <View>
      <Button title="Comenzar" onclick={peticion()}></Button>
      
    </View>
  );

};




export default App;