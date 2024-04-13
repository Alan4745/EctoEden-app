import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Auth/Login';
import BottomTabsNav from './BottomTabsNav';
import { AuthContext } from '../Context/AuthContext';
import PdfComponent from '../Components/ReportsComponent/PdfComponent';

const Stack = createNativeStackNavigator();



export default function MainNavigation() {

  const { UserLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          UserLoggedIn ? (
            <>
              <Stack.Screen name='BottomTabsNav' component={BottomTabsNav} options={{ headerShown: false }} />
              <Stack.Screen name='PdfComponent' component={PdfComponent} options={{ headerShown: true }} />
            </>

          ) : (
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          )
        }
      </Stack.Navigator>

    </NavigationContainer>

  )
}