import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Header from '../../components/Header'
import GroupCard from '../../components/GroupCard'
import store from '../../data/store'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.column}>
            <GroupCard groupName='A' groups={store.groups} teams={store.teams} />
            <GroupCard groupName='C' groups={store.groups} teams={store.teams} />
            <GroupCard groupName='E' groups={store.groups} teams={store.teams} />
            <GroupCard groupName='G' groups={store.groups} teams={store.teams} />
          </View>
          <View style={styles.column}>
            <GroupCard groupName='B' groups={store.groups} teams={store.teams} />
            <GroupCard groupName='D' groups={store.groups} teams={store.teams} />
            <GroupCard groupName='F' groups={store.groups} teams={store.teams} />
            <GroupCard groupName='H' groups={store.groups} teams={store.teams} />
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
  content: {
    padding: 10,
    flex: 9, 
    flexDirection: 'row', 
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  column: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})