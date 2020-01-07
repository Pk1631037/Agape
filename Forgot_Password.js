import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,StatusBar,Platform,ToastAndroid, BackHandler,Dimensions,Alert, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import login from './Images/icon.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AwesomeAlert from 'react-native-awesome-alerts';
import Firebase from './Firebase.js'
import firebase from 'firebase';
import OfflineNotice from './OfflineNotice'



import { widthPercentageToDP as wp, heightPercentageToDP as hp, removeOrientationListener as rol, listenOrientationChange as lor } from 'react-native-responsive-screen';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


class Forgot_Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      username: '',
      password: '',
      confirmPassword:'',
      code: '',
      email: '',
      spinner: false,
      country: 'India',
      showPass: true,
      press: false,
      showPass1: true,
      press1: false,
      invalidCodeValidation: '',
      codeSuccessful: '',
      disable: true,
      phone_number: '',
      toast:'',
      checking_email:'false',
      PIN:'',
      User_ID:'',
      Username:'',
    
      val1:false,
      
    }

  }
  async componentDidMount()
  {
    var user = FirebaseUser.getEmail();
    Console.log(user);
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


  handleLogin = () => {
    if(this.state.val1 == false ){
      this.setState({showAlert1: true})
    }
    else if(!this.validateEmail(this.state.email)){
      this.setState({showAlert2: true})
    } 

    else{
    const { email } = this.state;

  firebase.auth().sendPasswordResetEmail(email)
  .then(() => this.setState({showAlert: true}))
  .catch(error =>  this.setState({showAlert3: true})
    )  

  
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
    validateEmail = (username) => {
      var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
      return email.test(username)
    };
  log = () => {
    this.props.navigation.navigate('Login')
  }
  hideAlert = () => {
    this.setState({showAlert: false});
    this.props.navigation.navigate("Login");
  };
  hideAlert1 = () => {
    this.setState({showAlert1: false});
    this.setState({showAlert2: false});
  };
  hideAlert2 = () => {
    this.setState({showAlert3: false});
    this.props.navigation.navigate("Signup");
  };

  render() {
    const {showAlert,showAlert1,showAlert2,showAlert3} = this.state;
    return (

      <View style={styles.maincontainer}>
        <OfflineNotice/>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
                                <View style={{ top: hp('12%'), position: 'absolute' }}>  
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
             
                     <TouchableOpacity style={styles.Submit} onPress={this.handleLogin}>
                  <Text style={{fontSize:RFValue(16),color:'white',opacity:1}}>Forgot Password</Text>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={this.log} style={styles.Submit1}>
                <Text style={{fontSize:RFValue(16),}}>Did You Get it? Login</Text>
                </TouchableOpacity>
               
                </KeyboardAwareScrollView>
                          <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Password Reset Link"
          message="Sent Successfully to Your Mail Id"
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
            this.hideAlert1();
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
            this.hideAlert1();
          }}
        />
             <AwesomeAlert
          show={showAlert3}
          showProgress={false}
          title="Forgot Password"
          message="Your Mail Id is not SignedUp Please Sign Up"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          // showCancelButton={true}
          showConfirmButton={true}
        
          confirmText="OK"
          confirmButtonColor="#DD6B55"
        
          onConfirmPressed={() => {
            this.hideAlert2();
          }}
        />
            </View>
            
      
           
          );
        }
      }
      
      export default Forgot_Password;
      
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
          marginTop: hp('12%'),
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
          marginTop: hp('35%'),
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
                
//       <View style={styles.maincontainer}>
// <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
//                           <View style={{ top: hp('6%'), position: 'absolute' }}>  
//                           <Image
//                 style={{  width: RFValue(80),
//                   height: RFValue(80),top:hp('2%'),alignSelf:'center'}}
//                 source={login} />
//         </View>

//                         <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
        
//           <View style={styles.CityContainer}>
//             <Icon name={'ios-mail'} size={RFValue(25)} color={'black'}
//               style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder={'Email'}
//               placeholderTextColor={'black'}
//               underlineColorAndroid='transparent'

//               onChangeText={(email) => this.setState({ email })}
//               value={this.state.email} />
//               </View>
//           <TouchableOpacity style={styles.Submit} onPress={this.handleSignUp}>
//             <Text style={{fontSize:RFValue(16),color:'white',opacity:0.8}}>Submit</Text>
//           </TouchableOpacity>
//           </KeyboardAwareScrollView>
//           <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
//           title="Password Reset Link"
//           message="Sent Successful"
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
//       </View>
      

     
//     );
//   }
// }

// export default Forgot_Password;

// const styles = StyleSheet.create({

//   maincontainer: {

//     flex: 1,
//     alignItems: 'center',
//     backgroundColor:'#fff'
//   },
//   container: {
    

//     width: wp('100%'),
//     marginTop: hp('22.5%'),
//   },


//   spinnerTextStyle: {
//     color: '#33A85D'
//   },


//   input: {
  
//     width: wp('65%'),
//     color:'black',
//     fontSize:RFValue(13),
//     left: wp('0%'),
   
//   },
  

 


//   CityContainer: {
//     flexDirection: 'row',
//     width: wp('80%'),
//     fontFamily:'Muli-SemiBold',
//     height: hp('6%'),
//     marginTop: hp('1%'),
//     marginBottom:hp('1%'),
//     borderWidth :1,
//     borderRadius: wp('1%'),
//     alignItems: 'center',
//     justifyContent:'center',
//   },

//   Submit: {
//     flexDirection: 'row',
//     width: wp('80%'),
//     fontFamily:'Muli-SemiBold',
//     height: hp('6%'),
//     marginTop: hp('2%'),
//     borderRadius: wp('1%'),
    
//     alignItems: 'center',
//     justifyContent:'center',
//      fontSize: RFValue(16),
//     backgroundColor: '#82d9b1',
  
  
//   },
 
//   text: {
//     color: 'white',
//     fontSize: RFValue(16),
//     fontFamily:'Muli-SemiBold',
//     textAlign: 'center',
//   },
//   inputIcon: {
//     marginHorizontal: wp('1%'),
//     right:hp('1%')
//   },
// });
