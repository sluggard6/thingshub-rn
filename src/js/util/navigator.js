import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Guide from '../page/guide'
import Index from '../page/index'

const RootNavigator = StackNavigator({
  Guide: {screen: Guide,},
  Index: {screen: Index,}
},{
  initialRouteName: 'Guide', // 默认显示界面
  navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
    header: null
  },
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
  onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});

export default RootNavigator;