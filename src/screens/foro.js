import React, { Component, useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, ImageBackground, Alert } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titulo:"",
      descripcion:"",

    };
  }
  Ingresar=async()=>{

    await fetch('https://d3abe8f4d765.ngrok.io/Odontologos-Unidos/Backend_Odontologos/backend_odontologos/public/api/forostore',{
     
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "titulo":this.state.titulo,"descripcion":this.state.descripcion})
    }).then(res=>res.json())
    .then(resData=>{
      Alert.alert(resData.mensaje);
    })

    
  }
 render() {
    let {titulo}= this.state
    let {descripcion}= this.state

 return (
   <View style={styles.container}>
     
      <View style={styles.fondo}>
        <View style={styles.header}>
          <Text style={styles.saludo}>Foro</Text>          
        </View>

        <ScrollView>

          <View style={styles.titulo}>


              <Text style={{
                fontSize:18,

              }}>Titulo: </Text>          
              <View style={styles.fondoborde}>
                <TextInput style={styles.txtingreso} placeholder='Titulo                   ' placeholderTextColor='white'
                  onChangeText={(titulo)=>this.setState({titulo})}
                ></TextInput>
              </View>

              <View style={styles.btnborde}>
                <Button title="+" color='#089A9A'  borderRadius='150/2' style={ {
                    fontSize:18,
                    width:30,
                    height:30,
                    backgroundColor:'#089A9A',
                    borderRadius:50,
                }} onPress={this.Ingresar}
                >
                  Iniciar
                </Button>
              </View>
            </View>
        <View style={styles.credenciales}>

            <Text style={{
                fontSize:18,
                alignSelf:"flex-start",

              }}>Descripcion: </Text>          

          <View style={styles.fondoborde}>
            <TextInput style={styles.txtingreso} placeholder='Descripcion                    ' placeholderTextColor='white'
              onChangeText={(descripcion)=>this.setState({descripcion})}
            ></TextInput>
          </View>


        </View>
        <View style={styles.enlaces}>


        </View>
        </ScrollView>
      </View>


     

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
    backgroundColor:'white',
      //position:"absolute",
      width: '100%', height: '100%',
    alignSelf:'baseline',
    alignItems:'center',// afecta de manera horizontal lo que tiene dentro
    justifyContent:'center',//afecta de manera vertical lo que tiene dentro
  },
  saludo:{
    //backgroundColor:'gray',
    fontSize:24,
    color:'black',
    marginBottom:9,
    alignSelf:'center',
//    fontFamily: 'Time New Romans',
//    alignSelf:'center' // afecta de manera horizontal lo que tiene dentro
    
  },
  header:{

    alignSelf:'stretch',
//    backgroundColor:'red',
    borderBottomColor:'gray',
    borderWidth: 2,


  },
  titulo:{
    flexDirection:'row',
    alignItems:"center",
    alignContent:"stretch",
    marginTop:15,

  },
  credenciales:{
    //flex:0.7
    alignSelf:'stretch',

    justifyContent:"flex-start"
   // backgroundColor:'yellow',

  },
  fondoborde:{

//    marginTop:10,

    borderBottomColor:'gray',
    borderWidth: 2,
    

  },
  txtingreso:{
    fontSize:18,
    color:'black',


  },
  btnborde:{
    borderRadius: 150/2,
    width:40,
    marginLeft:10,
//    marginTop:35,
 //   marginRight:70,
  //  marginLeft:70,

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