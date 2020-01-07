import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, AsyncStorage, Dimensions, TextInput, TouchableOpacity, BackHandler, StatusBar, Platform, ToastAndroid, Alert, KeyboardAvoidingView,ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import login from './Images/icon.png'
import OfflineNotice from './OfflineNotice'
import DeviceInfo from 'react-native-device-info';
import Firebase from './Firebase.js'
import AwesomeAlert from 'react-native-awesome-alerts';
import firebase from 'firebase';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password:'',
      showPass: true,
      press: false,
      showPass1: true,
      press1: false,
      spinner: false,
      disable: true,
      email:'',
      showAlert: false,
      showAlert1: false,
      showAlert2: false,
      showAlert3: false,
      dev:'',
      val1: false,
      val2: false,
  

    };
   
  }
  async componentDidMount()
  {
//     const devid = DeviceInfo.getUniqueId();
//     console.log(devid);

//       firebase.database().ref('DeviceId/').on('value', function (snapshot) {
//             console.log(snapshot.val());
//             snapshot.forEach(function (child){
//               console.log(child.val().deviceid);
            
//             });
            
//         });
//    var user= Firebase.auth().currentUser;
//    console.log(user);

//          if (user) {
//                  }
//                   else {

//  console.log("not signed in");        }
       
  }   
  handleLogin = async() => {
    const { email, password, dev } = this.state
    if(this.state.val1 == false || this.state.val2 == false){
      this.setState({showAlert1: true})
    }
    else if(!this.validateEmail(this.state.email)){
      this.setState({showAlert2: true})
    } 
    else if(this.state.password.length<6){
      this.setState({showAlert3: true})
    } 
    else
    {

      await AsyncStorage.setItem('isLoggedin','1');
      const devid = DeviceInfo.getUniqueId();
      this.setState({dev:devid})
      console.log(dev);
      Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Profile'))
              .catch(error =>  this.setState({showAlert: true})
                ) 
    }
             
}
validateEmail = (username) => {
  var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  return email.test(username)
};

hideAlert = () => {
  this.setState({
    showAlert: false
  });
  this.setState({
    showAlert1: false
  });
  this.setState({
    showAlert2: false
  });
  this.setState({
    showAlert3: false
  });
};


  signup = () => {
    this.props.navigation.navigate("Signup");
}
forgot = () =>{
  this.props.navigation.navigate("Forgot_Password");
}
showPass = () => {

  if (this.state.press == false) {
    this.setState({ showPass: false, press: true })
  }
  else {

    this.setState({ showPass: true, press: false })
  }

}
validate(email){
this.setState({email});
if(this.state.email.length == 0)
{
  this.setState({val1: false})
}
else{
  this.setState({val1: true})
}
}
validate1(password){
  this.setState({password});
if(this.state.password.length == 0)
{
  this.setState({val2: false})
}
else{
  this.setState({val2: true})
}
}
  render() {
    const { navigate } = this.props.navigation;
    const {showAlert,showAlert1,showAlert2,showAlert3} = this.state;
    return (

      <View style={styles.maincontainer}>
        <OfflineNotice />
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
                                <View style={{ top: hp('13%'), position: 'absolute' }}>  
                                <Image
                      style={{  width: RFValue(80),
                        height: RFValue(80),alignSelf:'center',}}
                      source={login} />
              </View>
      
                              <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.NameContainer}>
                  <Icon name={'ios-mail'} size={RFValue(25)} color={'black'}
                    style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder={'Email'}
                    placeholderTextColor={'black'}
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.validate(email)}
                    value={this.state.email} /></View>
             
                <View style={styles.AgeContainer}>
                  <Icon name={'ios-lock'} size={RFValue(25)} color={'black'}
                    style={styles.inputIcon} />
                  <TextInput
                    style={styles.input1}
                    placeholder={'Password'}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'black'}
                    underlineColorAndroid='transparent' 
                    onChangeText={(password) => this.validate1(password)}
                    value={this.state.password}
                  />
                  <TouchableOpacity style={styles.btneye}
                    onPress={this.showPass.bind(this)}>
                    <Icon name={this.state.press == true ? 'ios-eye' : 'ios-eye-off'} size={RFValue(25)} color={'black'} />
                  </TouchableOpacity>
      
                </View>
           
      
                <TouchableOpacity style={styles.Submit} onPress={this.handleLogin}>
                  <Text style={{fontSize:RFValue(16),color:'white',opacity:1}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{top:hp('2.5%')}} onPress={this.forgot}>
                  <Text style={{fontSize:RFValue(16),color:'black',opacity:0.6}}>Forgot your password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signup} style={styles.Submit1}>
                <Text style={{fontSize:RFValue(16),}}>Don't have an account? Create one</Text>
                </TouchableOpacity>
               
                </KeyboardAwareScrollView>
                <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Login"
          message="Invalid Username Or Passwword"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          // showCancelButton={true}
          showConfirmButton={true}
        
          confirmText="OK"
          confirmButtonColor="#DD6B55"
        
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
           <AwesomeAlert
          show={showAlert1}
          showProgress={false}
          title="Mandatory Fields"
          message="Please Enter all Details to Proceed"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          // showCancelButton={true}
          showConfirmButton={true}
        
          confirmText="OK"
          confirmButtonColor="#DD6B55"
        
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
          <AwesomeAlert
          show={showAlert2}
          showProgress={false}
          title="Mandatory Fields"
          message="Please Enter Valid Email Id"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          // showCancelButton={true}
          showConfirmButton={true}
        
          confirmText="OK"
          confirmButtonColor="#DD6B55"
        
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
          <AwesomeAlert
          show={showAlert3}
          showProgress={false}
          title="Mandatory Fields"
          message="Password must be Greater than Six Characters"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          // showCancelButton={true}
          showConfirmButton={true}
        
          confirmText="OK"
          confirmButtonColor="#DD6B55"
        
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
            </View>
            
      
           
          );
        }
      }
      
      export default Login;
      
      const styles = StyleSheet.create({
      
        maincontainer: {
      
          flex: 1,
          alignItems: 'center',
          backgroundColor:'#fff'
        },
        container: {
          
      
          width: wp('100%'),
          marginTop: hp('25%'),
        },
      
        NameContainer:{
          flexDirection: 'row',
          width: wp('80%'),
          color:'white',
          fontSize:RFValue(13),
          height: hp('6%'),
          marginTop: hp('15%'),
          borderRadius: wp('1%'),
          marginBottom:hp('1%'),
          alignItems: 'center',
          justifyContent:'center',
          borderWidth :1,
        },
        AgeContainer: {
          flexDirection: 'row',
          width: wp('80%'),
        
          height: hp('6%'),
          color:'white',
          fontSize:RFValue(13),
          marginTop: hp('1%'),
          marginBottom:hp('1%'),
          borderWidth :1,
          borderRadius: wp('1%'),
          alignItems: 'center',
          justifyContent:'center',
        },
        spinnerTextStyle: {
          color: '#33A85D'
        },
        weightcontainer: {
          flexDirection: 'row',
          width: wp('80%'),
        
          height: hp('6%'),
          marginTop: hp('1%'),
          marginBottom:hp('1%'),
          color:'white',
          fontSize:RFValue(13),
          borderRadius: wp('1%'),
          borderWidth :1,
          alignItems: 'center',
          justifyContent:'center',
        },
        heightcontainer: {
          flexDirection: 'row',
          width: wp('80%'),
          fontFamily:'Muli-SemiBold',
          height: hp('6%'),
          marginTop: hp('1%'),
          borderRadius: wp('1%'),
          marginBottom:hp('1%'),
          borderWidth :1,
          alignItems: 'center',
          justifyContent:'center',
        },
        input: {
          width: wp('65%'),
          color:'black',
          fontSize:RFValue(13),
          left: wp('0%'),
         
        },
        input1: {
          width: wp('60%'),
          color:'black',
          fontSize:RFValue(13),
          left: wp('1%'),
         
        },
      
       
      
        OccupationContainer: {
          flexDirection: 'row',
          width: wp('80%'),
          fontFamily:'Muli-SemiBold',
          height: hp('6%'),
          marginTop: hp('1%'),
          marginBottom:hp('1%'),
          borderWidth :1,
          borderRadius: wp('1%'),
          alignItems: 'center',
          justifyContent:'center',
        },
        CityContainer: {
          flexDirection: 'row',
          width: wp('80%'),
          fontFamily:'Muli-SemiBold',
          height: hp('6%'),
          marginTop: hp('1%'),
          marginBottom:hp('1%'),
          borderWidth :1,
          borderRadius: wp('1%'),
          alignItems: 'center',
          justifyContent:'center',
        },
        NumberContainer: {
          flexDirection: 'row',
          width: wp('80%'),
          fontFamily:'Muli-SemiBold',
          height: hp('6%'),
          marginTop: hp('1%'),
          marginBottom:hp('1%'),
          borderWidth :1,
          borderRadius: wp('1%'),
          alignItems: 'center',
          justifyContent:'center',
        },
        Submit: {
          flexDirection: 'row',
          width: wp('80%'),
          fontFamily:'Muli-SemiBold',
          height: hp('6%'),
          marginTop: hp('2%'),
          borderRadius: wp('1%'),
          
          alignItems: 'center',
          justifyContent:'center',
           fontSize: RFValue(16),
          backgroundColor: '#3498db',
        
        
        },
        Submit1: {
          flexDirection: 'row',
          width: wp('80%'),
          fontFamily:'Muli-SemiBold',
          height: hp('6%'),
          marginTop: hp('20%'),
          borderRadius: wp('1%'),
          
          alignItems: 'center',
          justifyContent:'center',
           fontSize: RFValue(16),
          backgroundColor: '#fff',
        
        
        },
       
        text: {
          color: 'black',
          fontSize: RFValue(16),
          fontFamily:'Muli-SemiBold',
          textAlign: 'center',
        },
        inputIcon: {
          marginHorizontal: wp('1%'),
          right:hp('1%')
        },
      });
      
     
//         <View style={styles.maincontainer}>
    
//     <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
 
           
//             <View style={{height:hp('38%'),backgroundColor:'#fff',opacity:1}}>
             
//             <Image
//                 style={{  width: RFValue(80),
//                   height: RFValue(80),top:hp('8%'),alignSelf:'center'}}
//                 source={login} />
//             </View>
//             <View style={{height:hp('27%'),backgroundColor:'#fff',bottom:hp('10%'),width:wp('90%'),alignSelf:'center',alignItems:'center'}}>
              
//               <View style={styles.inputcontainer1}>
//               <Icon name={'ios-person'} size={RFValue(25)} color={'black'}
//                 style={styles.mailicon} />
//               <TextInput
//                 style={styles.username}
//                 placeholder={'Email ID'}
//                 autoCorrect={false}
//                 autoCapitalize={false}
              
//                 placeholderTextColor={'black'}
//                 underlineColorAndroid='transparent'
//                 onChangeText={(email) => this.setState({email})}
//                 value={this.state.email} /></View>
//                  <View style={styles.inputcontainer2}>
//               <Icon name={'ios-lock'} size={RFValue(25)} color={'black'}
//                 style={styles.passwordicon} />
//               <TextInput
//                 style={styles.Passwordstyle}
//                 placeholder={'Password'}
//                 autoCorrect={false}
//                 secureTextEntry={this.state.showPass}
//                 placeholderTextColor={'black'}
//                 underlineColorAndroid='transparent'
//                 onChangeText={(password) => this.setState({password})}
//                 value={this.state.password}
//               />
//             <TouchableOpacity style={styles.btneye}
//                 onPress={this.showPass.bind(this)}>
//                 <Icon name={this.state.press == true ? 'ios-eye' : 'ios-eye-off'} size={RFValue(25)} color={'black'} />
//               </TouchableOpacity>
//             </View>
//             </View>
           
//               <TouchableOpacity onPress={this.handleLogin} style={{  backgroundColor: '#82d9b1',bottom:hp('15%'),width:wp('80%'),alignSelf:'center',alignItems:'center',height:hp('6%'),justifyContent:'center',    borderRadius: wp('1%'),}}><Text style={{fontSize:RFValue(16),color:'white',opacity:0.8}}>Log In</Text></TouchableOpacity>
//   <TouchableOpacity style={{alignItems:'center',bottom:hp('13%'),}} onPress={this.forgot}><Text style={{fontSize:RFValue(12),color:'black',opacity:0.8}}>Forgot your password ?</Text></TouchableOpacity>
//   <TouchableOpacity style={{alignItems:'center',top:hp('25%'),}} onPress={this.signup}><Text style={{fontSize:RFValue(12),color:'black',opacity:0.8}}>Don't have an account? Create one</Text></TouchableOpacity>
//   <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
//           title="Login"
//           message="Invalid Username Or Passwword"
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           // showCancelButton={true}
//           showConfirmButton={true}
        
//           confirmText="OK"
//           confirmButtonColor="#DD6B55"
        
//           onConfirmPressed={() => {
//             this.hideAlert();
//           }}
//         />
    
//         </View>
      
  
       


//     );
//   }
// }

// export default Login;
// const styles = StyleSheet.create({


//   maincontainer: {
   
//     flex: 1,
//         width: '100%',
   
//     backgroundColor:'#fff',
   
   
//   },
//   inputcontainer1: {
//     flexDirection: 'row',
//     width: wp('80%'),
//     fontFamily: 'Muli-SemiBold',
//     height: hp('6%'),
//    top:hp('3%'),
//     borderRadius: wp('1%'),
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderWidth :1,
  
  

//   },
//   inputcontainer2: {
//     flexDirection: 'row',
//     width: wp('80%'),
//     fontFamily: 'Muli-SemiBold',
//     height: hp('6%'),
//     marginTop:hp('6%'),

//     borderRadius: wp('1%'),
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderWidth :1,

//   },
//   mailicon:{
//     marginLeft:wp('4%'),
//   },
//   passwordicon:{
//     marginLeft:wp('4%'),
//   },
//   username:{
//     marginLeft:wp('3%'),
//     color:'black',
//     fontSize:RFValue(13),
//     width: wp('69%'),
//   },
//   Passwordstyle:{
//     marginLeft:wp('3%'),
//   color:'black',
//   fontSize:RFValue(13),
//     width: wp('60%'),
//   }
 
// });
