/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import Login from './android/Componentes/Login'
import Index from './android/Componentes/Cuerpo/Index'
import subirAnuncio from './android/Componentes/Cuerpo/subirAnuncio'
import MisAnuncios from './android/Componentes/Cuerpo/MisAnuncios'
import articulo from './android/Componentes/Cuerpo/Articulo'

const RootNavigator = StackNavigator({
    Login :{screen:Login},
    Index : {screen: Index,
      navigationOptions:{
        header: null,
    }},
    articulo:{screen:articulo},
    subirAnuncio : {screen: subirAnuncio},
    MisAnuncios : {screen: MisAnuncios},

});

export default RootNavigator;