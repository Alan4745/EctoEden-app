import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Auth/Login';
import BottomTabsNav from './BottomTabsNav';

const Stack = createNativeStackNavigator();



export default function MainNavigation() {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        {
          login ? (
            <Stack.Screen name='BottomTabsNav' component={BottomTabsNav} options={{headerShown: false}}/>
          ) : (
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
          )
        }


      </Stack.Navigator>

    </NavigationContainer>

  )
}