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
  ListView,ScrollView, TouchableNativeFeedback,Alert,TouchableOpacity,TouchableWithoutFeedback
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H3,Thumbnail,Rightpla} from 'native-base'
import { TabNavigator } from 'react-navigation';
import Mensajes from './Mensajes'
import MisAnuncios from './MisAnuncios'
import {Icon} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Helpers from '../lib/helpers'
import * as firebase from 'firebase';
class anuncios extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state={
      dataSource : ds.cloneWithRows([]),
      uid:'',
      email:'',
      rawProducts:''
    }
  }
  async componentWillMount(){
    try{
      let user = await firebase.auth().currentUser;
      this.setState({
        uid: user.uid,        
      })        
      Helpers.getAllProducts((Products)=>{        
        if(Products){
          this.setState({
            rawProducts: Products,
            dataSource: this.state.dataSource.cloneWithRows(Products)
          })
        }else{
          Alert.alert("no hay productos")
        }
      })
    }catch(error){
      Alert.alert("Error al sacar uid1")
    }
  }
  static navigationOptions={
    header: null,
}
renderRow(rowData){
  return (
  <View>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('articulo',{data: rowData})}>
    <Content>
     
          <List>
            <ListItem style={styles.card}>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <H3>{rowData.Shownombre}</H3>
                <Text note style={styles.precio}>${rowData.Showprecio}</Text>
                <Text note>{rowData.ShowConsola}</Text>
                <Text note>{rowData.ShowEstado}</Text>
              </Body>
            </ListItem>
          </List>
         
        </Content>
   </TouchableOpacity  >
  </View>
  )
}
render() {
  return ( 
    <View style={{flex:1}}>
      <View style={styles.scroll}>
        <ScrollView>          
          <ListView
          enableEmptySections={true}
          renderRow={this.renderRow.bind(this)}
          dataSource={this.state.dataSource}
          />     
        </ScrollView>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  boton:{
    marginRight:70,
    marginLeft:70
  },
  precio:{
    color:'#EA4335'
  }, 
  card:{    
    backgroundColor:'white'
  } ,
  centrar:{
    flex: 1,        
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems:'center',
    backgroundColor:'white'
  },
  scroll:{  
    backgroundColor:'white'
  }
})


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


