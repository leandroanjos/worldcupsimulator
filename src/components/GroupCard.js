import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Flag from './Flag'

handlePress = (groupCode) => {
  Actions.match({ groupCode: groupCode })
}

export default class GroupCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { index, routes } = Actions.state
    const { groupName, groups, teams } = this.props

    let teamsArray = []

    const groupCode = groups.filter((item) => (item.name === groupName))[0].code
    
    teams.forEach(team => {
      if (team.group === groupCode) {
        teamsArray[team.position] = team
      }
    });

    //
    //    

    return (
      
        <View style={styles.container}>
          <TouchableHighlight onPress={() => handlePress(groupCode)} style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
              <View style={styles.columnFlag}>  
                  <Flag icon={teamsArray[1].icon} />
                  <Flag icon={teamsArray[2].icon}/>
              </View>              
              <View style={styles.columnGroupName}>
                <Text style={styles.textGroupName}>{groupName}</Text>
              </View>
              <View style={styles.columnFlag}>
                  <Flag icon={teamsArray[3].icon} />
                  <Flag icon={teamsArray[4].icon} />
              </View>
            </View>
        </TouchableHighlight>
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
    margin: 10
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
  }
})