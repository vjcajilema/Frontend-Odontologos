import React, { Component, useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, ImageBackground, Alert, AsyncStorage } from 'react-native';
//import App from '.';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario:"",
      password:"",
      valor:false,
      urlback:"https://e0b31d61b78c.ngrok.io/Odontologos-Unidos/Backend_Odontologos/backend_odontologos/public/"
    };
  }

  async GetData () {
    try { 
//      url=(await AsyncStorage.getItem ('@url:key'));
      Alert.alert("ASla"+ await AsyncStorage.getItem ('@url:key'));
      this.setState({url}); 
      Alert.alert("log "+ log)
      
    } catch (error) { 
      // Error al recuperar los datos 
      console.log (error.message); 
    }
      return log    

  }

  componentDidMount () {
    this.GetData()
  }


  logeado=true
  async getLogeado() {
    try { 
  
      logeado = await AsyncStorage.getItem ('valor'); 
      
    } catch (error) { 
      // Error al recuperar los datos 
      console.log (error.message); 
    }
      return JSON.parse(logeado)
    }

  Logear=async()=>{
//    Alert.alert("Hola "+this.state.usuario+"  "+this.state.password)
//    Alert.alert("Direccion API" + this.url)
    await fetch(this.state.urlback+"api/loginodontologo",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({"email":this.state.usuario,"password":this.state.password})
    }).then(res=>res.json())
    .then(resData=>{
      if(resData.valor){
        this.state.valor = true;
        const saveUserId = async() => {
          try {
            await AsyncStorage.setItem('valor', this.state.valor);
          } catch (error) {
            // Error retrieving data
            console.log(error.message);
          }
        };
        Alert.alert('Enviar a pantalla'+this.getLogeado());
      }else{
        Alert.alert(resData.mensaje);
      }

    })

    
  }
  render() {
    let {usuario}=this.state
    let {password}= this.state
    let {valor}= this.state
    let {urlback}=this.state
        //const userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';

 return (
   <View style={styles.container}>
     

    <ImageBackground source={require('../../resources/images/fondom.jpg')} 
      style={{
        width: '100%', height: '100%',
        
        alignItems:'center',// afecta de manera horizontal lo que tiene dentro
        justifyContent:'center',//afecta de manera vertical lo que tiene dentro

    }}>
      <View style={styles.fondo}>

        <Image source={require('../../resources/images/logo.png')} 
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
            <TextInput style={styles.txtingreso} placeholder='usuario' placeholderTextColor='white'
              onChangeText={(usuario)=>this.setState({usuario})}
            ></TextInput>
          </View>
          <View style={styles.fondoborde}>
            <TextInput secureTextEntry={true} style={styles.txtingreso} placeholder='contraseña' placeholderTextColor='white'
                onChangeText={(password)=>this.setState({password})}
            ></TextInput>
          </View>
          <View style={styles.btnborde}>
            <Button title="Iniciar" color='#089A9A'  borderRadius='150/2' style={ {
                fontSize:18,
                width:100,
                height:100,
                backgroundColor:'#089A9A',
                borderRadius:50,
            }} onPress={this.Logear}
            >
              Iniciar
            </Button>
          </View>
        </View>
        <View style={styles.enlaces}>
          <Text  style={{color: 'white', fontSize:12}} 
          onPress={() => Linking.openURL('https://www.facebook.com')}
          > 
            crear una cuenta
          </Text>
          <Text style={{
            color: 'white', fontSize:12, }} >
            recuperar contraseña 
          </Text>
        </View>
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
    flexDirection:'row',
    justifyContent:'space-between',
    
    
  }

})

export default Login;