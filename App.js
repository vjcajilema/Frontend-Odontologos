import React, { Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class Main extends Component {
 render() {

 return (

  <View style={styles.container}>
    
      <Image source={require('./resources/images/logo.png')} 
      style={{
        width: 100,
        height: 100,
        resizeMode: 'cover',
        alignSelf:'center'
      }}>

      </Image>

      <Text style={styles.saludo}>BIENVENIDO!</Text>
      <View style={styles.credenciales}>
        <View style={styles.fondoborde}>
          <TextInput style={styles.txtingreso} placeholder='E-mail' placeholderTextColor='white'
          
          ></TextInput>
        </View>
        <View style={styles.fondoborde}>
          <TextInput secureTextEntry={true} style={styles.txtingreso} placeholder='password' placeholderTextColor='white'></TextInput>
        </View>
        <View style={styles.btnborde}>
          <Button title="Iniciar" color='#8efffe' borderRadius='150/2' style={ {
              width:100,
              height:100,
              backgroundColor:'#00f2e8',
              borderRadius:50,
          }}>
            Iniciar
          </Button>
        </View>
      </View>
      <View style={styles.enlaces}>
        <Text style={{color: 'white', fontSize:12}} > 
          crear una cuenta
        </Text>
        <Text style={{
          color: 'white', fontSize:12, }} >
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
    backgroundColor:'#009dab',

    alignItems:'center',// afecta de manera horizontal lo que tiene dentro
    justifyContent:'center',//afecta de manera vertical lo que tiene dentro
    
  },
  saludo:{
    //backgroundColor:'gray',
    fontSize:24,
    color:'white',
    marginBottom:9,
    alignSelf:'center',
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
    backgroundColor:'#8efffe',
    marginBottom:7,
    marginRight:30,
    marginLeft:30,
    borderColor:'black',

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
    borderBottomColor:'#00f2e8',
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

export default Main;