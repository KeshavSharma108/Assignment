import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Home';


const Stack = createNativeStackNavigator();




export default function RootNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator> 
        <Stack.Screen name='Home' component={Home}/>
  
    </Stack.Navigator>
  </NavigationContainer>
  )
}


