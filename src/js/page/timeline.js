import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import Global from '../util/global'
import FullView from '../util/full_view'

export default class TimeLine extends Component {

  render(){
    return(
      <FullView>
        <Text>I'm TimeLine</Text>
      </FullView>
    )
  }
}


var styles = StyleSheet.create({
  contentContainer: {
    width: Global.size.width,
    height: Global.size.height,
  },
})