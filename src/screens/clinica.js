import React, { Component, useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, FlatList, Alert } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';
Geolocation.getCurrentPosition(info => console.log(info));


class Clinica extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre:'',
      descripcion:'',
      latitud:'',
      longitud:'',
      provinciasOptions:[],
      provinciasValues:[],
      ciudadesOptions:[],
      ciudadesValues:[],
      selectedValue:'',
      odontologosesp:'',
      urlback:"https://154ae9037bc6.ngrok.io/Odontologos-Unidos/Backend_Odontologos/backend_odontologos/public/"

    };
  }

  GetData = () => {
    fetch(this.state.urlback+"api/provincias")
      .then(response => response.json())
      .then(json => {
    
    this.setState({
      isLoading: false,
      provinciasOptions:json.valor.provincias
    });


    console.log("provincias... "+ this.state.provinciasOptions)
 
  })

  }

  GetCiudades (provincia) {

    this.setState({
      
      provinciasValues:provincia
    });

    fetch(this.state.urlback+"api/ciudades/"+provincia)
        .then(response => response.json())
        .then(json => {
      
      this.setState({
        isLoading: false,
        ciudadesOptions:json.valor.ciudades
      });


      console.log("ciudades... "+ this.state.ciudadesOptions)
  
    })

  }

  ObtenerEspecialista (value) {
    

    let odontologos=[]
    fetch(this.state.urlback+'api/odontologobyespecialidad/'+value)
    .then(response => response.json())
    .then(json => {
      json.valor.map((items)=>(
        odontologos.push(items)
        
      ))

      this.setState({odontologosesp:odontologos})
      console.log("Odonto"+ this.state.odontologosesp) 
  })
  }


  componentDidMount () {
    this.GetData()
  }


 render() {
    let {nombre}= this.state
    let {descripcion}= this.state
    let {latitud}= this.state
    let {longitud}= this.state
    let {odontologosesp}= this.state
    let {provinciasValues}= this.state
    let {provinciasOptions}= this.state
    let {ciudadesValues}= this.state
    let {ciudadesOptions}= this.state    
    let {urlback} = this.state
    
      

 return (
   <View style={styles.container}>
     
      <View style={styles.fondo}>
        <View style={styles.header}>
          <Text style={styles.saludo}>Clínicas</Text>          
        </View>

        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start',alignSelf:'center', }}>
          <Text style={{alignSelf:'baseline', marginTop:20,color:'gray'}}>Provincia: </Text>
          <CustomPicker
            options={this.state.provinciasOptions.map((items)=>(
              items.value,
              items.label
            ))
            
            }            
            placeholder="Seleccione una provincia"
            //getLabel={item=>item.label}
            onValueChange={value => {

              this.GetCiudades(value)
            }}
          />        
        </View>  
        
        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start',alignSelf:'center', }}>
          <Text style={{alignSelf:'baseline', marginTop:20,color:'gray'}}>Ciudad: </Text>
          <CustomPicker
            options={this.state.ciudadesOptions.map((items)=>(
              items.value,
              items.label
            ))
            
            }            
            placeholder="Seleccione una ciudad"
            //getLabel={item=>item.label}
            onValueChange={value => {

              this.ObtenerEspecialista(value)
            }}
          />        
        </View>

        <ScrollView>
          <View style={styles.contenido}>
            <Text style={{alignSelf:'baseline', marginTop:20,color:'gray'}}>Nombre: </Text>
            <View style={styles.fondoborde}>
              <TextInput style={styles.txtingreso} placeholder='Nombres' placeholderTextColor='white'
                onChangeText={(nombre)=>this.setState({nombre})}
              ></TextInput>
            </View>
            <Text style={{alignSelf:'baseline', marginTop:20,color:'gray'}}>Descripción: </Text>

            <View style={styles.fondoborde}>
              <TextInput style={styles.txtingreso} placeholder='Descripción' placeholderTextColor='white'
                onChangeText={(descripcion)=>this.setState({descripcion})}
              ></TextInput>
            </View>


            <View style={styles.titulo}>
              <Text style={{fontWeight: "bold", fontSize: 15, textDecorationLine: 'underline'}}>
                                  Localzación</Text>
            
            </View>
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
    alignItems:'stretch',// afecta de manera horizontal lo que tiene dentro
    justifyContent:'space-around',//afecta de manera vertical lo que tiene dentro
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
    borderRightColor:'white',
    borderLeftColor:'white',
    borderWidth: 2,
    


  },
  contenido:{
    flex:1, 
    marginLeft:10,
    marginRight:10,

  },
  titulo:{
    alignSelf:'flex-start',
    marginTop:15,
    marginBottom:15,
    marginLeft:4
      
  },
  odontologos:{
    flexDirection:'row',
    marginBottom:12,
    borderTopColor:'white',
    borderRightColor:'white',
    borderLeftColor:'white',
    borderBottomColor:'gray',
    borderWidth: 1,
    marginLeft: 3,
    marginRight: 4 

  },

  infodontologo:{
    
    flexDirection:'column',
    
  },
  imageodonto:{
    width: 100, height: 80,

//    resizeMode: "cover",
     marginBottom: 10, marginRight:10

  },
  credenciales:{
    //flex:0.7
    alignSelf:'stretch',

    justifyContent:"flex-start"
   // backgroundColor:'yellow',

  },
  fondoborde:{

//    marginTop:10,
    marginLeft:10,
    marginRight:30,
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

  }


})

export default Clinica;