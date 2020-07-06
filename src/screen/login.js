import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class Login extends Component {
 render() {
 return (
  <View style={styles.container}>

    <Text style={styles.saludo}>Hola React Native!</Text>
    <View style={styles.credenciales}>
      <View style={styles.fondoborde}>
        <TextInput style={styles.txtingreso} placeholder='E-mail' placeholderTextColor='white'></TextInput>
      </View>
      <View style={styles.fondoborde}>
        <TextInput style={styles.txtingreso} placeholder='password' placeholderTextColor='white'></TextInput>
      </View>
      <View style={styles.btnborde}>
        <Button title="Iniciar" color='gray' borderRadius='150/2' style={ {
            width:100,
            height:100,
            backgroundColor:'#fff',
            borderRadius:50,
        }}>
          Iniciar
        </Button>
      </View>
    </View>
    <View style={styles.enlaces}>
      <Text style={{color: 'white', fontSize:12, alignSelf:'flex-start'}} > 
        crear una cuenta
      </Text>
      <Text style={{
        color: 'white', fontSize:12, alignSelf:'flex-end' }} >
        recuperar contraseña 
      </Text>
    </View>

    
  </View>
 );
 }
}

const styles=StyleSheet.create({
  container:{
    flex:1,  
    backgroundColor:'#404040',

    alignItems:'center',// afecta de manera horizontal lo que tiene dentro
    justifyContent:'center',//afecta de manera vertical lo que tiene dentro
    
  },
  saludo:{
    //backgroundColor:'gray',
    fontSize:24,
    color:'white',
    marginBottom:9,
//    fontFamily: 'Time New Romans',
//    alignSelf:'center' // afecta de manera horizontal lo que tiene dentro
    
  },
  credenciales:{
    //flex:0.7
    alignSelf:'stretch',
   // backgroundColor:'yellow',
    
  },
  fondoborde:{
    //flex:0.1,
    borderRadius: 150/1,
    marginTop:10,
    backgroundColor:'gray',
    marginBottom:7,
    marginRight:30,
    marginLeft:30,

  },
  txtingreso:{
    fontSize:18,
    color:'white',
    marginLeft:15,
    marginRight:15,
    alignSelf:'center',
  },
  btnborde:{
    borderRadius: 150/2,
    marginTop:35,
    borderBottomColor:'gray',
    marginRight:30,
    marginLeft:30,

  },
  enlaces:{
    
    alignSelf:'stretch',
    marginLeft:30,
    marginRight:30,
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    
    
  }

})

export default Login;