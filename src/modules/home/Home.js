import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import GroupCard from './GroupCard'
import store from '../../data/store'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerTitle}>FIFA World Cup 2018</Text>
          <Text style={styles.headerSubtitle}>*** Simulator ***</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.column}>
            <GroupCard group='A' teams={store.teams} />
            <GroupCard group='C' teams={store.teams} />
            <GroupCard group='E' teams={store.teams} />
            <GroupCard group='F' teams={store.teams} />
          </View>
          <View style={styles.column}>
            <GroupCard group='B' teams={store.teams} />
            <GroupCard group='D' teams={store.teams} />
            <GroupCard group='F' teams={store.teams} />
            <GroupCard group='H' teams={store.teams} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  header: {
    flex: 3, 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  headerTitle: {
    fontSize: 32
  },
  headerSubtitle: {
    fontSize: 28
  },
  content: {
    padding: 20,
    flex: 9, 
    flexDirection: 'row', 
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  column: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 10
  }
})