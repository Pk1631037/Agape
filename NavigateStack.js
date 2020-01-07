
import React, { Component } from 'react';
import { StyleSheet, Text, View,ActivityIndicator,StatusBar, AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import Login from './Login'
import Signup from './Signup'
import Forgot_Password from './Forgot_Password'
import Profile from './Profile'
import Screen from './Screen'
import User_Detail from './User_Detail'
import chat from './chat'


const AppNavigator = createStackNavigator({

  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  Forgot_Password: {
    screen: Forgot_Password,
    navigationOptions: {
      header: null
    }
  },

  Screen: {
    screen: Screen,
    navigationOptions: {
      header: null
    }
  },
  User_Detail:{
    screen: User_Detail,
    navigationOptions: {
      header: null
    }
  },
  chat:{
    screen: chat,
    navigationOptions: {
      header: null
    }
  },
 
},
  {
    // initialRouteName: 'Screen',
  })

  const AuthStack = createStackNavigator({
     Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  })

  class AuthLoadingScreen extends Component{
    constructor(props){
      super(props);
      this._loaData();
    }
    render(){
      return(
<View style={{flex:1,justifyContent:'center',alignItems:'center'
}}>
<ActivityIndicator/>
<StatusBar barStyle="default"/>
</View>
      );
    }
    _loaData = async() => {
        const isLoggedin = await AsyncStorage.getItem('isLoggedin');
        this.props.navigation.navigate(isLoggedin !== '1'? 'Auth' : 'App')
    }
  }
// export default NavigateStack = createAppContainer(AppNavigator);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen: {
      screen: AuthLoadingScreen,
      navigationOptions: {
        header: null
      }
    },
    App: AppNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoadingScreen'
  }
))
