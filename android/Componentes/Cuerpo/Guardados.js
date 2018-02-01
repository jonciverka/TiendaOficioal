

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Button,Content,Container} from 'native-base'

export default class Guardados extends Component {
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
    Guardados
    </Text>
     </Button>
     </Content>
    </Container>
    );
  }
}

