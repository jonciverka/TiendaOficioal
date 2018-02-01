

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {Button,Content,Container} from 'native-base'
import Anuncios  from './anuncios'
import Perfil from './Perfil'
import Guardados from './Guardados'

const RootDrawer = DrawerNavigator({
  Inicio:{screen: Anuncios},
  Perfil:{ screen: Perfil},
  Guardados:{screen:Guardados}
})

export default RootDrawer;