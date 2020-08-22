import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/screens/login';
import Home from './src/screens/home'
import Logup from './src/screens/logup'

import Foro from './src/screens/foro'
import Clinica from './src/screens/clinica'
import Perfil from './src/screens/perfil'
import Buscar from './src/screens/buscar'
const Tab = createBottomTabNavigator();


export default function MyTabs() {
  let logeado=true
  



/*  const getLogeado = async() => {
  try { 

    logeado = await AsyncStorage.getItem ('valor'); 
    Alert.alert("log"+logeado)
  } catch (error) { 

    console.log (error.message); 
  }
    return logeado
  }*/



  return (

    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        activeTintColor: 'skyblue',
      }}
    >

{
  logeado ?(

    <>
        <Tab.Screen
          name="Foros"
          component={Foro}
          options={{
            tabBarLabel: 'Foro',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
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
        <Tab.Screen
          name="Buscar"
          component={Buscar}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="eye" color={color} size={size} />
            ),
          }}
        />
                

      <Tab.Screen
        name="Clinica"
        component={Clinica}
        options={{
          tabBarLabel: 'Clinica',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="stethoscope" color={color} size={size} />
          ),
        }}
      />
      </>
  ):(

    <>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Iniciar Sesion',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Logup"
        component={Logup}
        options={{
          tabBarLabel: 'Registrarse',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </>
  )
}
 



     



    </Tab.Navigator>
    </NavigationContainer>
  );
}
//export default NavigationContainer(MyTabs);