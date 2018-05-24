import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default Header = () => (
  <View style={styles.header} >
    <Text style={styles.headerTitle}>FIFA World Cup</Text>
    <Text style={styles.headerSubtitle}>2018</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    flex: 3, 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4682B4'
  },
  headerTitle: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold'
  },
  headerSubtitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold'
  }
})