/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import chat from './Images/icon.png'
import DeviceInfo from 'react-native-device-info';


// import Spinner from 'react-native-spinkit';
// import { Overlay } from 'react-native-elements'


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, removeOrientationListener as rol, listenOrientationChange as lor } from 'react-native-responsive-screen';




class Screen extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        // spinner:false,
        // overlayVisible:false
      }
  }

   
  

  async componentDidMount() {
    setTimeout(() => { 
        this.props.navigation.navigate('Login')
    },
        3000
      )
    // const devid = DeviceInfo.getUniqueID();


    // console.log(data1)
    // this.setState({overlayVisible:true})
    // this.setState({spinner:true})

    // StatusBar.setHidden(false);
    // StatusBar.setBarStyle('dark-content');
    // if (Platform.OS == 'android') {
    //   StatusBar.setBackgroundColor('#ffffff');
    // }
    // const data = await this.performTimeConsumingTask();
    // if (data !== null && Devid == null) {
    //   this.props.navigation.navigate('Login');
    // }
    // else if (Devid != null) {
    //   this.props.navigation.navigate('PIN', {
    //     "UserId": userid
    //   })
    // }
    // this.setState({overlayVisible:false})
    // this.setState({spinner:false})
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.viewStyles}>
        <View>
          <Image
            style={styles.chat}
            source={chat}
          />
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    width: WIDTH - 0,
    height: HEIGHT - 0,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',


  },
  chat:{
width:RFValue(200),
height:RFValue(200),
  },

}
);
export default Screen;
