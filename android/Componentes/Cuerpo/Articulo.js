import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H3,Thumbnail,Separator} from 'native-base'
export default class Articulo extends Component{
   
    render(){
        const { params } = this.props.navigation.state;
        const data = params ? params.data : null;
        return(
            <Content>
                <Separator bordered style={styles.separador}>
                    <Text>Nombre</Text>
                </Separator>
                <ListItem style={styles.texto}>
                    <Text> {JSON.stringify(data.Shownombre)} </Text>
                </ListItem>
                <Separator bordered style={styles.separador}>
                    <Text>Precio</Text>
                </Separator>
                <ListItem style={styles.texto}>
                    <Text> {JSON.stringify(data.Showprecio)} </Text>
                </ListItem>
                <Separator bordered style={styles.separador}>
                    <Text>Consola</Text>
                </Separator>
                <ListItem style={styles.texto}>
                    <Text> {JSON.stringify(data.ShowEstado)} </Text>
                </ListItem>
                <Separator bordered style={styles.separador}>
                    <Text>Estado</Text>
                </Separator>
                <ListItem style={styles.texto}>
                    <Text> {JSON.stringify(data.ShowConsola)} </Text>
                </ListItem>
                <Separator bordered style={styles.separador}>
                    <Text>Nota</Text>
                </Separator>
                <ListItem style={styles.texto}>
                    <Text> {JSON.stringify(data.Shownota)} </Text>
                </ListItem>
                <Separator bordered style={styles.separador}>
                    <Text>Lugar</Text>
                </Separator>
                <ListItem style={styles.texto}>
                    <Text> {JSON.stringify(data.Showlugar)} </Text>
                </ListItem>
            </Content>

        );
    }
}
const styles = StyleSheet.create({
    separador:{
        backgroundColor:'#eeeeee'
    },
    texto:{
        color:'black',
        fontSize:14
    }
  })