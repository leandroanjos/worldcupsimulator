import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import MatchCard from './MatchCard'

export default class MatchList extends Component {
  constructor(props){
    super(props)
  }

  getMatchCode = (groupCode, round, gameNumber) => {
    console.log('************')
    console.log('dados: ', groupCode, round, gameNumber)
    const matchNumber = ((groupCode - 1) * 2) + ((round -1) * 16) + gameNumber
    
    console.log('result:..... ' + matchNumber)
    return matchNumber
  }

  render() {
    const { group, teams, matches } = this.props

    let matchesArray = []

    matches.forEach(match => {
        matchesArray[match.code] = match
    });
    
    return (
      <View style={styles.container}>
        <MatchCard matchCode={this.getMatchCode(group.code, 1, 1)} teams={teams} matches={matches} />
        <MatchCard matchCode={this.getMatchCode(group.code, 1, 2)} teams={teams} matches={matches} />
        <MatchCard matchCode={this.getMatchCode(group.code, 2, 1)} teams={teams} matches={matches} />
        <MatchCard matchCode={this.getMatchCode(group.code, 2, 2)} teams={teams} matches={matches} />
        <MatchCard matchCode={this.getMatchCode(group.code, 3, 1)} teams={teams} matches={matches} />
        <MatchCard matchCode={this.getMatchCode(group.code, 3, 2)} teams={teams} matches={matches} />
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