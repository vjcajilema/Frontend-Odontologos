import React, { Component, useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, FlatList, Alert } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class Buscar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      especialidadesOptions:[],
      especialidadesValues:[],
      selectedValue:'',
      odontologosesp:'',
      urlback:"https://e0b31d61b78c.ngrok.io/Odontologos-Unidos/Backend_Odontologos/backend_odontologos/public/"

    };
  }

  GetData = () => {
    fetch(this.state.urlback+"api/especialidades")
//      fetch('https://localhost/Odontologos-Unidos/Backend_Odontologos/backend_odontologos/public/api/especialidades')
      .then(response => response.json())
      .then(json => {
//    console.log(json.valor.especialidades)

    
    this.setState({
      isLoading: false,
      especialidadesOptions:json.valor.especialidades/*.map((items)=>(
        label=items.nombre
      )),
    */
    });

/*    this.setState({
      especialidadesValues:json.valor.especialidades.map((items)=>(
        values=items.id
      )),    
    });*/
    console.log("especialidades... "+ this.state.especialidadesOptions)
 
  })

  }

  ObtenerEspecialista (value) {
    
    this.setState({
      
      especialidadesValues:value
    });
    let odontologos=[]
    fetch(this.state.urlback+'api/odontologobyespecialidad/'+value)
    .then(response => response.json())
    .then(json => {
//      Alert.alert("asa"+json.valor)
      json.valor.map((items)=>(
        odontologos.push(items)
        
      ))

      this.setState({odontologosesp:odontologos})
      console.log("Odonto"+ this.state.odontologosesp) 
  })
  }

  Llamar(){
    Alert.alert("video llamada en curso")
  }

  
  componentDidMount () {
    this.GetData()
  }


 render() {
    let {titulo}= this.state
    let {odontologosesp}= this.state
    let {especialidadesValues}= this.state
    let {especialidadesOptions}= this.state
    let {urlback} = this.state
    
      

 return (
   <View style={styles.container}>
     
      <View style={styles.fondo}>
        <View style={styles.header}>
          <Text style={styles.saludo}>Odontólogos</Text>          
        </View>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start',alignSelf:'center', }}>
          <CustomPicker
            options={this.state.especialidadesOptions.map((items)=>(
              items.value,
              items.label
            ))
            
            }
            
            placeholder="Seleccione una especialidad"
            //getLabel={item=>item.label}
            onValueChange={value => {

              this.ObtenerEspecialista(value)
            }}
          />        
        </View>  



        <ScrollView>

          <View style={styles.titulo}>
            <Text style={{fontWeight: "bold", fontSize: 15, textDecorationLine: 'underline'}}>
                                Especialistas en {this.state.especialidadesValues}</Text>
          
          </View>
          <View>
            <FlatList
                  data={this.state.odontologosesp}
                  renderItem={({item}) =>(
                          <View style={styles.odontologos}>
                            <View style={styles.imageodonto}>
                              <Image style={{width: 100, height: 80,    borderRadius: 20/*, resizeMode: "contain"*/}}
                                source={{uri: this.state.urlback+item.path}}
                              />
                            </View>
                            <View style={styles.infodontologo}>
                              <Text style={{fontWeight: "bold", fontSize: 20}}>
                                {item.nombre + " "+ item.apellido}</Text>
                              
                                <View>

                                </View>  
                                <View style={styles.btnborde}>
                                  <Button title="+" color='#089A9A'  borderRadius='150/2' style={ {
                                      fontSize:18,
                                      width:30,
                                      height:30,
                                      backgroundColor:'#089A9A',
                                      borderRadius:50,
                                  }} onPress={this.Llamar}
                                  >
                                    {/*<MaterialCommunityIcons name="login" color={color} size={size} />*/}
                                  </Button>
                                </View>
                              
                            </View>

                          </View>
                      )
                  }
              /> 


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

export default Buscar;