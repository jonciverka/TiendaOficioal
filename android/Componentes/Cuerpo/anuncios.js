//-tienda.
//--User.
//---Usuario.
//-----Correo.
//-----Nombre de usuario.
//-------detalles.
//---------fotoUsuario.
//---------NumeroTelefonico.
//-------Productos
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
  View
} from 'react-native';
import {Button,Content,Container} from 'native-base'
import { TabNavigator } from 'react-navigation';
import Mensajes from './Mensajes'
import MisAnuncios from './MisAnuncios'
import {Icon} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
class anuncios extends Component {
  static navigationOptions={
    header: null,
}
  render() {
    return (
      <Container>
      <Content>
    <Button
      onPress={()=>this.props.navigation.navigate('subirAnuncio')}
    >
    <Text>
    Anuncios
    </Text>
     </Button>
     </Content>
    </Container>
    );
  }
}

const RootTab = TabNavigator({
  anuncios : {
    screen:anuncios,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Entypo name="clipboard" style={{color: tintColor}} size={24}/>
      )
    }
  },
  MisAnuncios:{screen:MisAnuncios,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Feather name="clipboard" style={{color: tintColor}} size={24}/>
      )
    }},
    Mensajes : {screen:Mensajes,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
          <MaterialIcons name="chat" style={{color: tintColor}} size={24}/>
        )
      }},

},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
      activeTintColor: '#4285F4',
      inactiveTintColor: '#d1cece',
      showIcon: true,
      showLabel: true,
      upperCaseLabel:true,
      pressColor:'#4285F4',
      indicatorStyle : {
        backgroundColor:'white'
      },
      style:{
        backgroundColor:'white'
      },
      labelStyle:{
        height:10,
        fontSize : 8
      }
  }
})

export default RootTab;


