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

    const teamA = teams[match.teams[0] - 1]
    const teamB = teams[match.teams[1] - 1]
    return (
      <View style={styles.container}>
        <View style={styles.columnFlag}>  
          <Text style={styles.textTeamName}>{teamA.name}</Text>
          <Flag icon={teamA.icon}/>
        </View>
        <View style={styles.columnGroupName}>
          <Text style={styles.textGroupName}>x</Text>
          <Text style={styles.textDate}>{match.day} {match.hour}</Text>
        </View>
        <View style={styles.columnFlag}>
          <Text style={styles.textTeamName}>{teamB.name}</Text>
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
    backgroundColor: '#fff',
    marginVertical: 10
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
    color: '#483D8B',
    fontSize: 22,
    fontWeight: 'bold'
  },
  textTeamName: {
    textAlign: 'center',
    color: '#483D8B',
    fontSize: 14
  },
  textDate: {
    textAlign: 'center',
    color: '#483D8B',
    fontSize: 10
  }
})