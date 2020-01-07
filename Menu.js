import React from 'react';
import PropTypes from 'prop-types';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, removeOrientationListener as rol, listenOrientationChange as lor } from 'react-native-responsive-screen';
import Firebase from './Firebase.js';
import firebase from 'firebase';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,  
  Text,
  AsyncStorage
} from 'react-native';
import uri from './Images/user.png'
import uri3 from './Images/contact.png'
import uri4 from './Images/logout.png'
import uri1 from './Images/information.png'

// import recieve from './Patient_Detail.js';


_logout = async() =>{

  Firebase.auth().signOut();
await AsyncStorage.clear();
this.props.navigation.navigate('Login');
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  menu: {
    // flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#ededed',
    padding: RFValue(20),
   height:hp('30%')
  },

  avatar: {
    width: RFValue(35),
    height:  RFValue(35),
    top:hp('5%')
  },
  avatar2: {
    width:  RFValue(20),
    height:  RFValue(20),
 
    opacity:0.8
  },

  item: {
    fontSize:RFValue(18),
    left: wp('7.5%'),
    fontWeight: '300',

    fontFamily:'Muli-SemiBold'

  },
  item2:{
    
    left: wp('10%'),
    fontWeight: '300',
    fontFamily:'Muli-SemiBold'
  }
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={{flexDirection:'row', alignItems:'center', marginBottom: hp('6%')}}>
        <Image
          style={styles.avatar}
          source={uri}
        />
        <Text style={styles.item2} style={{fontSize:RFValue(22), left: wp('5%'),  top:hp('5%')}}>Profile</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width:  RFValue(20),
            height:  RFValue(20),
         
            opacity:0.8,
          top:hp('2%')}}
          source={uri1}
        />
        <Text
          onPress={() => onItemSelected('About')}
          style={{fontSize:RFValue(18),
            left: wp('7.5%'), top:hp('2%')}}
        >
          About us
      </Text>
      </View>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={styles.avatar2}
          source={uri2}
        />
        <Text
          onPress={() => onItemSelected('Settings')}
          style={styles.item}
        >
          Settings
      </Text>
      </View> */}
     
      <View style={{flexDirection:'row', alignItems: 'center'}}>
      <Image
          style={{ width:  RFValue(20),
            height:  RFValue(20),
         
            opacity:0.8,
          top:hp('4%')}}
          source={uri4}
        />
         <Text
          onPress={() => _logout()}
          style={{fontSize:RFValue(18),
            left: wp('7.5%'), top:hp('4%')}}
        >
          Sign Out
      </Text>
      </View>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
      <Image
          style={{ width:  RFValue(20),
            height:  RFValue(40),
         
            opacity:0.8,
          top:hp('8%')}}
          source={uri4}
        />
         <Text
          onPress={() => onItemSelected('signout')}
          style={{fontSize:RFValue(18),
            left: wp('7.5%'), top:hp('4%')}}
        >
          Sign Out
      </Text>
      </View>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};