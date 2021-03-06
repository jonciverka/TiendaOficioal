//-tienda.
//--User.
//---Usuario.
//-----Correo.
//-----Nombre de usuario.
//-------detalles.
//---------fotoUsuario.
//---------NumeroTelefonico.
//-------Productos.
//---------Titulo.
//-----------Precio.
//-----------Lugar.
//-----------Imagenes.
//-----------DescripcionDelProducto.
//-----------NotaDelProducto
//---------Titulo.
//-----------Precio.
//-----------Lugar.
//-----------Imagenes. 
//-----------DescripcionDelProducto.
//-----------NotaDelProducto

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Button,Content,Container,Form,Item,Label,Input,Picker,Right,H3} from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import * as firebase from 'firebase';
import Helpers from '../lib/helpers'
export default class subirAnuncio extends Component {
  constructor(props){
    super(props);
      this.state={
        typedNombre:'',
        typedPrecio:'',
        typedLugar:'',
        typedNota:'',
        typedDescription:'',
        uid:'',
        Key:'',
        get:'',
        selected2: '',
        selected3: ''
      }
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value) {
    this.setState({
      selected3: value
    });
  }
  async componentWillMount(){
    try{
      let user = await firebase.auth().currentUser;
      this.setState({
        uid: user.uid,        
      })
     // Alert.alert("udi bien!")
    }catch(error){
      Alert.alert("Error al sacar uid2")
    }
  }
  getData = () =>{
    Helpers.getName(this.state.uid,(name) =>{
      this.setState({
        get:name
      })
      Alert.alert("contenido", JSON.stringify(this.state.get.descripcion))
    })
  }
  saveForm = () =>{    
    try{
      this.state.typedNombre ? Helpers.setAll(
        this.state.uid,
        this.state.typedNombre,
        this.state.typedPrecio,
        this.state.typedLugar,
        this.state.typedDescription,
        this.state.typedNota,
        this.state.selected2,
        this.state.selected3) : null
      Alert.alert("Articulo Agregado!")
    }catch(error){
      let errors = error.message
      Alert.alert("error",`${errors}`)
    }
  }

  


  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title:"Subir Anuncio.",
    headerTitleStyle:{
      color:"white"
    },
    headerStyle :{
      backgroundColor:"#4285F4",
    },
      headerRight: <Button transparent onPress={() =>params.handleSave()} ><EvilIcons name="sc-telegram" size={34}  style={{color: 'white'}}/></Button>
    };
};


componentDidMount() {
  this.props.navigation.setParams({ handleSave: this.saveForm });
}
  

  render() {
    return (
      <ScrollView style={styles.Todo}>
      <Form>
            <Item inlineLabel>
              <Label >Nombre:</Label>
              <Input onChangeText={
                (text) =>{
                  this.setState({typedNombre:text})
                }
              }/>
            </Item>
            <Picker
                mode="dropdown"
                placeholder="Consola"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label="Xbox One" value="XboxOne" />
                <Item label="PS4" value="PS4" />
                <Item label="Switch" value="Switch" />
                <Item label="PS3" value="PS3" />
                <Item label="Xbox 360" value="Xbox360" />
                
              </Picker>
            <Item inlineLabel last>
              <Label>Precio:</Label>
              <Input onChangeText={
                (text) =>{
                  this.setState({typedPrecio:text})
                }
              }
              keyboardType='numeric'/>
            </Item>
            <Item inlineLabel last>
              <Label >Lugar de entrega:</Label>
              <Input onChangeText={
                (text) =>{
                  this.setState({typedLugar:text})
                }
              }/>
            </Item>
            <Picker
                mode="dropdown"
                placeholder="Estado"
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Item label="Nuevo" value="Nuevo" />
                <Item label="Usado" value="Usado" />
              </Picker>
            <Item inlineLabel last>
              <Label>Nota(detalles visibles):</Label>
              <Input onChangeText={
                (text) =>{
                  this.setState({typedNota:text})
                }
              }/>
            </Item>
            <Item>
              <Label >Descripcion:</Label>
              <Input onChangeText={
                (text) =>{
                  this.setState({typedDescription:text})
                }
              }
                multiline={true}
                numberOfLines={10}/>
            </Item>
          </Form>
      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
    Todo:{
      backgroundColor:"white"
    }
})

