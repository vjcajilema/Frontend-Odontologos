import React, { Component, useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, ImageBackground, Alert } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombres:"",
      apellidos:"",
      cedula:"",
      email:"",
      usuario:"",
      password:""
    };
  }
  Logup=async()=>{
//    Alert.alert("Hola "+this.state.usuario+"  "+this.state.password)
    await fetch('https://40640e4a3ec9.ngrok.io/Odontologos-Unidos/Backend_Odontologos/backend_odontologos/public/api/odontologostore',{
     
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "nombres":this.state.nombres,"apellidos":this.state.apellidos,"cedula":this.state.cedula,
        "usuario":this.state.usuario,"email":this.state.email,"password":this.state.password,"photo":null})
    }).then(res=>res.json())
    .then(resData=>{
      Alert.alert(resData.mensaje);
    })

    
  }
 render() {
    let {nombres}= this.state
    let {apellidos}= this.state
    let {cedula}= this.state
    let {usuario}=this.state
    let {password}= this.state
 return (
   <View style={styles.container}>
     

    <ImageBackground source={require('../../resources/images/fondom.jpg')} 
      style={{
        width: '100%', height: '100%',
        
        alignItems:'center',// afecta de manera horizontal lo que tiene dentro
        justifyContent:'center',//afecta de manera vertical lo que tiene dentro

    }}>
      <View style={styles.fondo}>
        <ScrollView>
        

        <Image source={require('../../resources/images/userlogin.png')} 
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          alignSelf:'center'
        }}>

        </Image>

        <Text style={styles.saludo}>Ingrese su información!</Text>
        <View style={styles.credenciales}>

          <View style={styles.fondoborde}>
            <TextInput style={styles.txtingreso} placeholder='Nombres' placeholderTextColor='white'
              onChangeText={(nombres)=>this.setState({nombres})}
            ></TextInput>
          </View>

          <View style={styles.fondoborde}>
            <TextInput style={styles.txtingreso} placeholder='Apellidos' placeholderTextColor='white'
              onChangeText={(apellidos)=>this.setState({apellidos})}
            ></TextInput>
          </View>

          <View style={styles.fondoborde}>
            <TextInput style={styles.txtingreso} placeholder='Cédula' placeholderTextColor='white'
              onChangeText={(cedula)=>this.setState({cedula})}
            ></TextInput>
          </View>
          <View style={styles.fondoborde}>
            <TextInput style={styles.txtingreso} placeholder='Correo electronico' placeholderTextColor='white'
              onChangeText={(email)=>this.setState({email})}
            ></TextInput>
          </View>          

          <View style={styles.fondoborde}>
            <TextInput style={styles.txtingreso} placeholder='Usuario' placeholderTextColor='white'
              onChangeText={(usuario)=>this.setState({usuario})}
            ></TextInput>
          </View>
          <View style={styles.fondoborde}>
            <TextInput secureTextEntry={true} style={styles.txtingreso} placeholder='Contraseña' placeholderTextColor='white'
                onChangeText={(password)=>this.setState({password})}
            ></TextInput>
          </View>
          <View style={styles.btnborde}>
            <Button title="Registrarse" color='#089A9A'  borderRadius='150/2' style={ {
                fontSize:18,
                width:100,
                height:100,
                backgroundColor:'#089A9A',
                borderRadius:50,
            }} onPress={this.Logup}
            >
              Iniciar
            </Button>
          </View>
        </View>
        <View style={styles.enlaces}>


        </View>
        </ScrollView>
      </View>
    </ImageBackground>

     

</View>
  

 );
 }
}

const styles=StyleSheet.create({
  container:{
    flex:1,  

//    backgroundColor:'#009dab',
  //backgroundColor: 'rgba(54, 246, 227, 0.3)',
    alignItems:'stretch',// afecta de manera horizontal lo que tiene dentro
    justifyContent:'center',//afecta de manera vertical lo que tiene dentro
    
  },
  fondo:{
    backgroundColor:'rgba(148, 250, 250, 0.4)',
      //position:"absolute",
      width: '100%', height: '100%',
    alignSelf:'baseline',
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
    backgroundColor: 'rgba(227, 221, 221, 0.3)',    
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

    marginRight:30,
    marginLeft:30,

  },
  enlaces:{
    
    alignSelf:'stretch',
    marginLeft:30,
    marginRight:30,
    marginTop:40,
    marginBottom:30,
    flexDirection:'row',
    justifyContent:'space-between',
    
    
  }

})

export default Login;