import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Routers from './src/Routers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
})

export default class App extends Component {
  constructor(props){
    super(props)
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Routers />
      </View>
    )
  }
}
