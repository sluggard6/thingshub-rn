import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native'
import Global from '../util/global'
import FullView from '../util/full_view'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({

  index: 0,

  actions: [NavigationActions.navigate({ routeName: 'Index'})]
})


export default class Guide extends Component {

  _onPressButton() {
    this.props.navigation.dispatch(resetAction)
  }

  render(){
    return(
      <FullView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          bounces={false}
          pagingEnabled={true}
          removeClippedSubviews={true}
          horizontal={true}>
          <ImageBackground source={require('../../resources/image/guide.jpg')} style={styles.backgroundImage}/>
          <ImageBackground source={require('../../resources/image/guide.jpg')} style={styles.backgroundImage}/>
          <ImageBackground source={require('../../resources/image/guide.jpg')} style={styles.backgroundImage}>
            <Button  title="Learn More" color="#841584" onPress={this._onPressButton.bind(this)} style={{margin: 100}}/>
          </ImageBackground>
        </ScrollView>
      </FullView>
    )
  }
}


var styles = StyleSheet.create({
  contentContainer: {
    width: Global.size.width * 3,
    height: Global.size.real_height
  },
  backgroundImage: {
    width: Global.size.width,
    height: Global.size.real_height,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // margin: 5,
    //resizeMode: Image.resizeMode.cover,
    overflow: "hidden"
  },
  indexContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    backgroundColor: "transparent",
    margin: 30
  },
  dian:{
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 10,
    opacity:0.5
  },
  dian2:{
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 10
  }
})