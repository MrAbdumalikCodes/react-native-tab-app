import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from '../screens/home'
import Detailed from '../screens/detailed'
import IonIcon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon:({focused, color, size}) => {
                let iconName;
                if(route.name === "Home"){
                    iconName = focused ? "home" : 'home-outline'
                }else if(route.name === "Details"){
                    iconName = focused ? "settings" : "settings-outline"
                }
                return (<IonIcon name={iconName} size={size} color={color}/>)
            },
            tabBarActiveTintColor:"red"
        })}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Details' component={Detailed}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
