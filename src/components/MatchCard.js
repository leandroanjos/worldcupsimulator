import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Flag from './Flag'

export default class MatchCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { matchCode, teams, matches } = this.props

    let teamsArray = []
    
    teams.forEach(team => {
      teamsArray[team.code] = team
    });
    
    const match = matches.filter((match) => match.code === matchCode)[0]

    const teamA = teams[match.teams[0]]
    const teamB = teams[match.teams[1]]
    return (
      <View style={styles.container}>
        <View style={styles.columnFlag}>  
            <Flag icon={teamA.icon}/>
            <Text>{teamA.name}</Text>
        </View>
        <View style={styles.columnGroupName}>
          <Text style={styles.textGroupName}>x</Text>
        </View>
        <View style={styles.columnFlag}>
          <Text>{teamB.name}</Text>  
          <Flag icon={teamB.icon}/>
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