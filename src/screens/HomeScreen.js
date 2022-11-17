// src/screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  Pressable
} from 'react-native';

import Separator from '../components/Separator';

const HomeScreen = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     
    const dataItems = async ()=>{

      let response = await fetch('https://jsonplaceholder.typicode.com/users').catch((err)=>{
        console.error(err);
      });
      
      response = await response.json();
      setData(response);
      setIsLoading(false);
    }
    
    dataItems();
  
  },[]);



  const renderList = ({ item }) => {
   
    const { name } = item

    return (
      <Pressable
        onPress={() => alert('Vista detalle de navegación')}
        style={{ paddingHorizontal: 10 }}
      >
        <Text style={{ fontSize: 24, color: '#000' }}>{name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <>
          <FlatList
            data={data}
            contentContainerStyle={{
              paddingVertical: 20
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={renderList}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;