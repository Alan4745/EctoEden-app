import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import MachineLearning from '../Screens/MachineLearning';
import Notifications from '../Screens/Notifications';
import Reports from '../Screens/Reports';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabsNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Tab.Screen name='MachineLearning' component={MachineLearning} />
      <Tab.Screen name='Reports' component={Reports} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Notifications' component={Notifications} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}