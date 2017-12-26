import React, { Component } from 'react'
import {
  View, Platform
} from 'react-native'
import Global from './global'

export default class FullView extends Component{

  render(){
    return(
      <View style={{width: Global.size.width, height: Global.size.height}}>
        {this.getStatusBar()}
        <View style={{width: Global.size.width, height: Global.size.height - Global.size.status_bar_height}}>
          {this.props.children}
        </View>
      </View>
    )
  }

  getStatusBar(){
    return (
      Platform.select({
        ios: <View style={{width: Global.size.width, height: Global.size.status_bar_height}} />
      })
    )
  }
}