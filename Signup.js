import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,StatusBar,Platform,ToastAndroid, BackHandler,Dimensions,Alert, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import login from './Images/icon.png'
import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Firebase from './Firebase.js';
import DeviceInfo from 'react-native-device-info';
import AwesomeAlert from 'react-native-awesome-alerts';
import OfflineNotice from './OfflineNotice'




import { widthPercentageToDP as wp, heightPercentageToDP as hp, removeOrientationListener as rol, listenOrientationChange as lor } from 'react-native-responsive-screen';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      dev:'',
      showAlert: false,
      showAlert1: false,
      showAlert2: false,
      showAlert3: false,
      showAlert4: false,
      showAlert5: false,
      val1:'',
      val2:'',
      val3:'',
      val4:'',
      check: false,
    }

  }
 
  async componentDidMount(){	
  
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   // var ref = firebase.database().ref().child('Users_Login/');
	//console.log(ref);
	//ref.once('value', function (snapshot) {
	//	console.log('ff');
   //   console.log(snapshot.val());
    //  snapshot.forEach(function (child){
    //    console.log(child.val().deviceid);
      
   //   });
      
 // });
 // console.log('Done');
 // var ref = firebase.database().ref('Users_Login/');

//ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
//}, function (error) {
  // console.log("Error: " + error.code);
//});
  //console.log('Done');
    //var deviceid = DeviceInfo.getUniqueId();
    //console.log(deviceid);

    //this.setState({ dev: deviceid });
    //console.log('Done');
 
  }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
// }
// handleBackButton = () => {
//   Alert.alert(
//     'Exit App',
//     'Exiting the application?', [{
//       text: 'Cancel',
//       style: 'cancel'
//     }, {
//       text: 'OK',
//       onPress: () => BackHandler.exitApp()
//     },], {
//     cancelable: false
//   }
//   )
//   return true;
// }
hideAlert = () => {
  this.setState({
    showAlert4: false
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
hideAlert1 = () => {
  this.setState({
    showAlert5: false
  });
  this.props.navigation.navigate("Login");
};
hideAlert2 = () => {
  this.setState({showAlert: false});
  this.props.navigation.navigate('Login');
 
};

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    }
    else {
      this.setState({ showPass: true, press: false })
    }
  }
  showPass1 = () => {
    if (this.state.press1 == false) {
      this.setState({ showPass1: false, press1: true })
    }
    else {
      this.setState({ showPass1: true, press1: false })
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
  
  handleSignUp = () => {
    const { email, password, dev, username } = this.state
    if(this.state.val1 == false || this.state.val2 == false || this.state.val3 == false || this.state.val4 == false){
      this.setState({showAlert1: true})
    }
    else if(!this.validateEmail(this.state.email)){
      this.setState({showAlert2: true})
    } 
    else if(this.state.password.length<=6){
      this.setState({showAlert3: true})
    } 
    else if(this.state.password != this.state.confirmPassword){
      this.setState({showAlert4: true})
    }
    else{
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.setState({showAlert: true}))
        .catch(error =>this.setState({showAlert5: true}))

        console.log(this.state.check)
      // if(this.state.check == true){
          firebase.database().ref('Users_Login/').push({
              email,
              password,
              dev,
              username
          }).then((data)=>{
              //success callback
              // this.setState({showAlert: true})
              console.log('data ' , data)
          }).catch((error)=>{
              //error callback
              console.log('error ' , error)
          })

        // }
        //   firebase.database().ref('Users/').on('value', function (snapshot) {
        //     console.log(snapshot.val());
        //     snapshot.forEach(function (child){
        //       console.log(child.val().email);
        //       console.log(child.val().password);
        //     });
            
        // });
            
}
  }



validateEmail = (username) => {
  var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  return email.test(username)
};

  log = () => {
    this.props.navigation.navigate('Login')
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
  validate2(confirmPassword){
    this.setState({confirmPassword});
  if(this.state.confirmPassword.length == 0)
  {
    this.setState({val3: false})
  }
  else{
    this.setState({val3: true})
  }
  }
  validate3(username){
    this.setState({username});
  if(this.state.username.length == 0)
  {
    this.setState({val4: false})
  }
  else{
    this.setState({val4: true})
  }
  }

  render() {
    const {showAlert,showAlert1,showAlert2,showAlert3,showAlert4,showAlert5} = this.state;
    return (
                
      <View style={styles.maincontainer}>
        <OfflineNotice/>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
                          <View style={{ top: hp('10%'), position: 'absolute' }}>  
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

          <View style={styles.OccupationContainer}>
            <Icon name={'ios-lock'} size={RFValue(25)} color={'black'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input1}
              placeholder={'Confirm Password'}
              secureTextEntry={this.state.showPass1}
              placeholderTextColor={'black'}
              underlineColorAndroid='transparent' 
              onChangeText={(confirmPassword) => this.validate2(confirmPassword)}
              value={this.state.confirmPassword}
            />
            <TouchableOpacity style={styles.btneye}
              onPress={this.showPass1.bind(this)}>
              <Icon name={this.state.press1 == true ? 'ios-eye' : 'ios-eye-off'} size={RFValue(25)} color={'black'} />
            </TouchableOpacity>

          </View>
          <View style={styles.CityContainer}>
            <Icon name={'ios-person'} size={RFValue(25)} color={'black'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'black'}
              underlineColorAndroid='transparent'

              onChangeText={(username) => this.validate3( username )}
              value={this.state.username} />
              </View>

            

     
         

          <TouchableOpacity style={styles.Submit} onPress={this.handleSignUp}>
            <Text style={{fontSize:RFValue(16),color:'white',opacity:1}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.log} style={styles.Submit1}>
          <Text style={{fontSize:RFValue(16),}}>Already an User? Login</Text>
          </TouchableOpacity>
         
          </KeyboardAwareScrollView>
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
         <AwesomeAlert
          show={showAlert4}
          showProgress={false}
          title="Password"
          message="Password and Confirm Password did not Match "
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
          show={showAlert5}
          showProgress={false}
          title="Sign Up"
          message="Email Id Already Registered Please Login"
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
          show={showAlert}
          showProgress={false}
          title="Sign Up"
          message="Sign Up Successful"
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

export default Signup;

const styles = StyleSheet.create({

  maincontainer: {

    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  container: {
    

    width: wp('100%'),
    marginTop: hp('20%'),
  },

  NameContainer:{
    flexDirection: 'row',
    width: wp('80%'),
    color:'white',
    fontSize:RFValue(13),
    height: hp('6%'),
    marginTop: hp('8%'),
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
    marginTop: hp('23%'),
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
