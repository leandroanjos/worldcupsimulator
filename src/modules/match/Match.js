import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Header from '../../components/Header'
import MatchList from '../../components/MatchList'
import store from '../../data/store'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {

    const { index, routes } = Actions.state

    if (routes[index].params && routes[index].params.groupCode) {
      groupCode = routes[index].params.groupCode
    } else {
      groupCode = 1
    }

    const group = store.groups.filter(group => group.code === groupCode)[0]

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textGroupName}>{group.name}</Text>
        </View>
        <View style={styles.content}>
          <MatchList group={group} teams={store.teams} matches={store.matches}/>
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