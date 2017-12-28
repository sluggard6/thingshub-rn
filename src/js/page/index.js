import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Global from '../util/global'
import FullView from '../util/full_view'

export default class TimeLine extends Component {

  render(){
    return(
      <FullView>
        <ScrollableTabView>
          <TimeLine/>
        </ScrollableTabView>
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