import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import MachineLearning from '../Screens/MachineLearning';
import Notifications from '../Screens/Notifications';
import Reports from '../Screens/Reports';
import Settings from '../Screens/Settings';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Icon } from '@rneui/base';
import iconLogo from "./../../assets/icon.png"
const Tab = createBottomTabNavigator();


interface MyTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}



const MyTabBar: React.FC<MyTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles({}).V2}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };


        if (label === 'Home') {
          return (
            <View key={route.key} style={styles({}).LabelView1}>

              <TouchableOpacity
                onPress={onPress}
                style={styles({}).TO1}>
                {/* <Text>Hola</Text> */}

                {/* <GradientIcon
                  focused={isFocused}
                  name="globe-outline"
                  type="ionicon"
                /> */}

                <View style={{
                  height: 40,
                  width: 80,
                  bottom: 30,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  position: 'absolute',
                  backgroundColor: '#660000',
                  borderColor: '#F9D48B',
                  borderWidth: 5,
                  borderBottomColor: '#660000',
                  zIndex: -9999
                }}>

                  <View style={{ width: 80, height: 20, backgroundColor: '#660000', position: 'absolute', bottom: -10 }}></View>


                </View>
                <Image source={iconLogo} style={{ width: 65, height: 65, position: 'absolute', bottom: 0 }} />

              </TouchableOpacity>
            </View>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles({}).TO1}>
            {label === 'MachineLearning' ? (
              <Icon
                name="codesquare"
                type="antdesign"
                color={isFocused ? '#F9D48B' : 'white'}
                size={24}
              />
            ) : (
              <></>
            )}

            {label === 'Reports' ? (
              <Icon
                name="list-alt"
                type="material"
                color={isFocused ? '#F9D48B' : 'white'}
                size={24}
              />
            ) : (
              <></>
            )}

            {label === 'Notifications' ? (
              <Icon
                name="notifications"
                type="ionicon"
                color={isFocused ? '#F9D48B' : 'white'}
                size={24}
              />
            ) : (
              <></>
            )}



            {label === 'Settings' ? (
              <Icon
                name="settings-outline"
                type="ionicon"
                color={isFocused ? '#F9D48B' : 'white'}
                size={24}
              />
            ) : (
              <></>
            )}

            {/* <Text style={styles({ isFocused }).Text1}> {label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default function BottomTabsNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }} initialRouteName='Home'
      tabBar={(props: any) => <MyTabBar {...props} />}
    >
      <Tab.Screen name='MachineLearning' component={MachineLearning} />
      <Tab.Screen name='Reports' component={Reports} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Notifications' component={Notifications} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}


const styles = (props: any) => {
  return StyleSheet.create({
    LG1: {
      height: 65,
      width: 65,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      position: 'absolute',
      borderColor: '#1B1464',
      borderWidth: props.focused ? 2 : 0,
      shadowColor: props.focused ? '#0000FF' : '#ffffff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 24,
    },
    V1: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      height: 65,
      width: 65,
      borderRadius: 50,
    },
    V2: {
      flexDirection: 'row',
      backgroundColor: '#660000',
      paddingBottom: 20,
      paddingTop: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
      borderTopColor: '#F9D48B',
      borderTopWidth: 5
    },
    TO1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    TO1Text: { color: props.isFocused ? 'blue' : 'gray', fontSize: 10 },
    LabelView1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'relative',
    },
    LabelView2: {
      backgroundColor: '#fff',
      width: 40,
      height: 40,
      position: 'absolute',
      zIndex: 4,
      top: -65,
      left: -30,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },

    LabelView4: {
      backgroundColor: '#fff',
      width: 40,
      height: 40,
      position: 'absolute',
      zIndex: 4,
      top: -65,
      right: -30,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },

    Lottie1: { width: '70%', height: '70%' },
    LabelView3: {
      backgroundColor: '#fff',
      width: 40,
      height: 40,
      position: 'absolute',
      zIndex: 4,
      top: -90,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },

    Text1: {
      color: props.isFocused ? 'blue' : 'gray',
      textAlign: 'center',
      fontSize: 10,
    },
  });
};