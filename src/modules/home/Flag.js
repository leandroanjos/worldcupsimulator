import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import * as flags from './../../flags'

export default class GroupCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { code } = this.props

    const flag = flags[code]
    const unknownFlag = flags['unknown']

    return (
      <View style={styles.container}>
        <Image source={flag || unknownFlag} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})