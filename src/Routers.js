import React from 'react'
import { Router, Stack, Scene, Reducer } from 'react-native-router-flux'
import Home from './modules/home/Home'

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
      <Scene key="teste" component={Home} />    
    </Stack>
  </Router>
)
