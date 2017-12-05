import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Flag from './Flag'

export default class GroupCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { index, routes } = Actions.state
    const { group, teams } = this.props

    let teamsArray = []
    /*
    if (routes[index].params && routes[index].params.groupCode) {
      groupCode = routes[index].params.groupCode
    }*/
      
    teams.forEach(team => {
      if (team.group === group) {
        teamsArray[team.position] = team
      }
    });
    
    return (
      <View style={styles.container}>
        <View style={styles.columnFlag}>  
            <Flag code={teamsArray[1].code} />
            <Flag code={teamsArray[2].code}/>
        </View>
        <View style={styles.columnGroupName}>
          <Text style={styles.textGroupName}>{group}</Text>
        </View>
        <View style={styles.columnFlag}>
            <Flag code={teamsArray[3].code} />
            <Flag code={teamsArray[4].code} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    marginVertical: 2
  },
  columnFlag: {
    flex: 2, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  columnGroupName: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  textGroupName: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  }
})