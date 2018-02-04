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
import {Button,Content,Container,Form,Item,Label,Input} from 'native-base'
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
      }
  }
  async componentWillMount(){
    try{
      let user = await firebase.auth().currentUser;
      this.setState({
        uid: user.uid,        
      })
      Alert.alert("udi bien!")
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
        this.state.typedNota) : null
      Alert.alert("Articulo Agregado!")
    }catch(error){
      let errors = error.message
      Alert.alert("error",`${errors}`)
    }
  }
  static navigationOptions ={
    title:"Subir Anuncio.",
    headerTitleStyle:{
      color:"white"
    },
    headerStyle :{
      backgroundColor:"#4285F4",
    },
    headerRight: <Button onPress={this.saveForm} ><Text>Enviar</Text></Button>
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
          <Button 
          onPress={this.saveForm}>
          <Text>
            hola
            </Text>
            </Button>
      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
    Todo:{
      backgroundColor:"white"
    }
})

