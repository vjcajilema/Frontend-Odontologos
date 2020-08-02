import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foro from './foro';
import Buscar from './buscar';
import Perfil from './perfil';
const Tab = createBottomTabNavigator();


export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Buscar"
      tabBarOptions={{
        activeTintColor: 'skyblue',
      }}
    >
      <Tab.Screen
        name="Foro"
        component={Foro}
        options={{
          tabBarLabel: 'Foro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
//          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
//export default NavigationContainer(MyTabs);