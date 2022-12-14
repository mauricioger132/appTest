// src/navigation/RootNavigator.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

import { ActivityIndicator } from 'react-native';

const RootStack = createNativeStackNavigator();


const linking = {
  prefixes: ['peoplesapp://'],
  config: {
    initialRouteName: 'home',
    screens: {
      Home: {
        path: 'home'
      },
      Details: {
        path: 'details'
      }
    }
  }
};

const RootNavigator = () => {
  return (
    <NavigationContainer  linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;