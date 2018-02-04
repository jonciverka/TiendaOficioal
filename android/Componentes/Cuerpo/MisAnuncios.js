

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Button,Content,Container,ListItem,List,Card,Body,H3,Thumbnail,Rightpla} from 'native-base'
import Helpers from '../lib/helpers'
import * as firebase from 'firebase';
export default class MisAnucios extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state={
      dataSource : ds.cloneWithRows([]),
      uid:'',
      email:'',
      products:''
    }
  }
  static navigationOptions={
    header: null,
}
async componentWillMount(){
  try{
    let user = await firebase.auth().currentUser;
    this.setState({
      uid: user.uid,        
    })        
    Helpers.getOurProducts(this.state.uid,(Products)=>{
      if(Products){
        this.setState({
          products: Products.productos,
          dataSource: this.state.dataSource.cloneWithRows(Products.productos)
        })
      }else{
        Alert.alert("no hay productos")
      }
    })
  }catch(error){
    Alert.alert("Error al sacar uid1")
  }
}
renderRow(rowData){
  return (
  <View>
    <Content>
          <List>
            <ListItem style={styles.card}>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <H3>{rowData.nombre}</H3>
                <Text note style={styles.precio}>${rowData.precio}</Text>
                <Text note>{rowData.Consola}</Text>
                <Text note>{rowData.Estado}</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
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
        <View style={styles.centrar}>
          <Button rounded block style={styles.boton}
           onPress={()=> this.props.navigation.navigate("subirAnuncio")}>
            <Text style = {{color : 'white'}}>Agregar Anuncio.</Text>
          </Button> 
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
    flex:11,    
    backgroundColor:'white'
  }
})

