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

import * as firebase from 'firebase';
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


class Helpers{
    static setAll(userId,typedNombre,typedPrecio,typedLugar,typedDescribcion,typedNota,selected2,selected3){
        let userNamePath ="/user/"+userId+"/productos"
        return firebase.database().ref(userNamePath).push().set({
            nombre:typedNombre,
            precio:typedPrecio,
            nota:typedNota,
            descripcion: typedDescribcion,
            lugar:typedLugar,
            Consola:selected2,
            Estado:selected3
        })
    }
    
    static getOurProducts(userId, callback){
        let userNamePath = "/user/"+userId
        firebase.database().ref(userNamePath).on('value',(snapshot)=>{
            let data = snapshot.val()        
            if(snapshot){
               let obj = {
                   productos : data.productos
               }
               callback(obj)
            }
            
        })
    }
    static getAllProducts(callback){
        let Path ="/user/"
        firebase.database().ref(Path).on('value',(snapshot)=>{
            let data = snapshot.val()
            let arrayOfProducts =[]
            if(data){
                for(let key in data){
                    let obj = data[key]
                    let name = obj.details.name

                    for(let prop in obj){
                        let Products = obj[prop]
                        for(let rc in Products){
                            if(Products[rc].descripcion && Products[rc].lugar && Products[rc].nombre && Products[rc].nota && Products[rc].precio){
                                arrayOfProducts.push({
                                    userName : name,
                                    Shownombre : Products[rc].nombre,
                                    Showprecio : Products[rc].precio,
                                    Shownota : Products[rc].nota,
                                    Showlugar : Products[rc].lugar,
                                    Showdescripcion : Products[rc].descripcion
                                })
                            }
                        }
                    }

                }
            }
            callback(arrayOfProducts)
        })
    }
}

module.exports = Helpers