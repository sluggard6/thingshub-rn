import React from 'react';
import {
  Platform
} from 'react-native'
import Dimensions from 'Dimensions';
import {
  PixelRatio
} from 'react-native';
const STATUS_BAR_HEIGHT = 20;
const Global = {
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    status_bar_height: Platform.OS === 'ios'?STATUS_BAR_HEIGHT: 0,
    real_height: Platform.OS==='ios'?(Dimensions.get('window').height-STATUS_BAR_HEIGHT):Dimensions.get('window').height
  },
  urls: {
    profile: "/profile",
    channel: "/group/list/",
    group: "/group/",
    page: "/page/",
    checkPhone: "/user/checkPhone",
    hasUser: "/user/hasUser",
    vcode: "/vcode",
    register: "/user/register",
    forgotPass: "/user/forgotPass",
    login: "/user/login",
    logout: "/logout",
    user: "/user/profile",
    charge: "/charge/do",
    pic: "/pic/"
  },
  user: {
    balance: 0,
    id: 0,
    nick: "",
    phone: "",
    realname: "",
    score: 0,
    status: 0,
    vipend: 0
  },
  isLogin: false,
  buildVersion : '0.1.0',
  default_host : "http://test.api.vogor.cn",
  // default_host : "http://10.172.50.178:8290",
  pr: PixelRatio.get(),
  maxView: 3,
  isAlert: false,
  serverTime: new Date().getTime(),
  navigator: null
};
export default Global;