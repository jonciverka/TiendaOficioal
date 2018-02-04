

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import {Button,Content,Container,Item,Form,Input,Card,CardItem,Body} from 'native-base'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      Email:'',
      Password:'',
      user :''
    }
    firebase.initializeApp({
      apiKey: "AIzaSyCOWcIH1uFCHU6wEGaUCs2WAWAhzJc04XE",
      authDomain: "tienda-74aa8.firebaseapp.com",
      databaseURL: "https://tienda-74aa8.firebaseio.com",
      projectId: "tienda-74aa8",
      storageBucket: "tienda-74aa8.appspot.com",
      messagingSenderId: "1075888284874"
    });
  }
  Login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password)
    .then((LoggedInUser)=>{
      this.setState({user:LoggedInUser})
      Alert.alert("Usuario logueado Correctamente")      
      this.props.navigation.navigate("Index")
    }).catch((error)=>{
      let errors = error.message
      Alert.alert("error",`${errors}`)
    })
  }
  Registro= () =>{
    firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password)
    .then((LoggedInUser)=>{
      this.setState({user:LoggedInUser})
      Alert.alert("Usuario Registrado")
      this.props.navigation.navigate("Index")
    }).catch((error)=>{
      let errors = error.message
      Alert.alert("error",`${errors}`)
    })
  }
  
  
    static navigationOptions={
        header: null,
    }
  render() {
    return (
        <Container>       
        <View style = {styles.formu}>
        <View  style = {styles.anchoCard}>
          <Form >
            <Item>
              <Input
              onChangeText={
                (text) =>{
                  this.setState({Email:text})
                }
              }
              placeholder="Username" />
            </Item>
            <Item last>
              <Input 
              secureTextEntry={true}
              onChangeText={
                (text) =>{
                  this.setState({Password:text})
                }
              }
              placeholder="Password" />
            </Item>
          </Form>
          </View>
        </View>
        <View style = {styles.Boton}>
          <Button
          onPress={this.Login} 
          block primary>
            <Text style = {{color : 'white'}}>Iniciar.</Text>
          </Button> 
          <Button 
          onPress={this.Registro}
          block transparent>
            <Text style = {{color : 'black'}}>Resgistrar.</Text>
          </Button>   
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    anchoCard:{
        width:300,
    }, 
    anchoBoton:{
        width:300,
    },
    Boton:{
        flex: 1,        
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor:'white'
      },
    formu:{
        flex:2,
        flexDirection: 'column',
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor:'white'
    }
    
});

