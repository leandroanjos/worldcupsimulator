import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TrickButton extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Icon.Button name="diamond" backgroundColor="#FFF" color="#ff0000">Expert</Icon.Button>
    )
  }
}
