import React from 'react'
import { Router, Stack, Scene, Reducer } from 'react-native-router-flux'
import Home from './modules/home/Home'
import Match from './modules/match/Match'

const reducerCreate = params => {
  const defaultReducer = Reducer(params)
  return (state, action) => {
      console.log("ACTION:", action)
      return defaultReducer(state, action)
  }
}

export default Routers = () => (
  <Router createReducer={reducerCreate} sceneStyle={{ backgroundColor: '#fff' }} >
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar={true} />
      <Scene key="match" component={Match} />    
    </Stack>
  </Router>
)
