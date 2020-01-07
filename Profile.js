import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,StatusBar,Platform,ToastAndroid, BackHandler,Dimensions,Alert, TextInput, TouchableOpacity ,ScrollView, AsyncStorage} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Firebase from './Firebase.js';
import firebase from 'firebase';
import OfflineNotice from './OfflineNotice'
import chat from './Images/chatbot.png'
import chat1 from './Images/chat.png'
import chat2 from './Images/menu.png'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, removeOrientationListener as rol, listenOrientationChange as lor } from 'react-native-responsive-screen';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword:'',
      code: '',
      email: '',
      name:'',
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
      id:'',
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);

  }
async componentDidMount(){
  
	 var ref = firebase.database().ref('Users_Login/');

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
  var pname = this.props.navigation.getParam("DeviceId")
  this.setState({ id: pname })
  console.log(this.state.id); 
  var user= Firebase.auth().currentUser;
  console.log(user);
  user.updateProfile({
    displayName: "Prem",
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(function() {
    console.log('Updated')
  }).catch(function(error) {
    // An error happened.
  });
var name, email, photoUrl, uid, emailVerified;


if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });

}
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen,
  });
  this.send
}

updateMenuState(isOpen) {
  this.setState({ isOpen });
}

onMenuItemSelected = (item) => {
  console.log(item)
  if (item == 'SignOut')
    this.SignOut()
  else if (item == 'About')
    this.props.navigation.navigate("About_Us")
  else if (item == 'Contact')
    this.props.navigation.navigate("Contact")
}
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

  handleSignUp = () => {
    const { name,password } = this.state;
           firebase.database().ref('Users/').push({
              name,
              password,
            
          }).then((data)=>{
              //success callback
              console.log('data ' , data)
          }).catch((error)=>{
              //error callback
              console.log('error ' , error)
          })
}



validateEmail = (username) => {
  var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  return email.test(username)
};
 validatePassword = (password) =>{
   var te;
    var Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{8,16}$/;
    return Password.test(password)
  
  }


_logout = async() =>{

        Firebase.auth().signOut();
  await AsyncStorage.clear();
  this.props.navigation.navigate('Login');
}

chatpage = async() =>{
  this.props.navigation.navigate('chat');
}


  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
      menu={menu}
      isOpen={this.state.isOpen}
      onChange={isOpen => this.updateMenuState(isOpen)}
    >         
      <View style={styles.maincontainer}>
      <TouchableOpacity
            onPress={this.toggle}
            style={{ 
              position: 'absolute',
              justifyContent: 'center',
              top: hp('5%'),
              left: wp('6%'),
              width: wp('5%'),
            
            }}
          >
            <Image
              source={chat2}
              style={{ width: RFValue(26), height: RFValue(26), opacity: 0.7 }}
            />
            </TouchableOpacity>
        <OfflineNotice/>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
                   

                        <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                        {/* <View style={styles.NameContainer}>
            <Icon name={'ios-mail'} size={RFValue(25)} color={'black'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Name'}
              placeholderTextColor={'black'}
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}
              value={this.state.name} /></View>
       
          <View style={styles.AgeContainer}>
            <Icon name={'ios-lock'} size={RFValue(25)} color={'black'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input1}
              placeholder={'Age'}
              secureTextEntry={this.state.showPass}
              placeholderTextColor={'black'}
              underlineColorAndroid='transparent' onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
        

          </View> */}

   

     
         
{/* 
          <TouchableOpacity style={styles.Submit} onPress={this._logout}>
            <Text style={{fontSize:RFValue(16),color:'white',opacity:0.8}}>Logout</Text>
          </TouchableOpacity> */}
<View style={{top:hp('8%'),marginLeft:wp('8%'),marginRight:wp('3%')}}><Text style={{fontSize:RFValue(16),color:'#3498db',textAlign:'center'}}><Text style={{textAlign:'center',fontSize:RFValue(38)}}>Agape</Text> {"\n"}<Text style={{color:'#000'}}>Healthcare Assistant</Text>{"\n"}{"\n"}{"\n"}</Text>
<Text style={{fontSize:RFValue(20),textAlign:'justify',color:'#3498db'}}>I am a healthcare assistant.
I can help you in maintain your health activities and provide you information about health management.</Text></View>
        <TouchableOpacity style={styles.submit_faq}><Text style={{fontSize:RFValue(16),color:'#fff'}}>Health FAQ</Text></TouchableOpacity>
          <TouchableOpacity style={styles.Submit} onPress={this.chatpage}>
          <Image
                      style={{  width: RFValue(80),
                        height: RFValue(80),alignSelf:'center',}}
                      source={chat1} />
            {/* <Text style={{fontSize:RFValue(16),color:'white',opacity:0.8,top:hp('10%')}}>Chat</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.Submit_p} onPress={this.chatpage}>
          
            <Text style={{fontSize:RFValue(20),color:'black',opacity:0.8,}}>Chat</Text>
          </TouchableOpacity>
          

       


            

     
          </KeyboardAwareScrollView>
          
      </View>
      
      </SideMenu>
     
    );
  }
}

export default Profile;

const styles = StyleSheet.create({

  maincontainer: {

    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  container: {
    

    width: wp('100%'),
    
  },

  NameContainer:{
    flexDirection: 'row',
    width: wp('80%'),
    color:'white',
    fontSize:RFValue(13),
    height: hp('6%'),
    marginTop: hp('2%'),
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
    width: wp('65%'),
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
    width: wp('23%'),
    fontFamily:'Muli-SemiBold',
    height: hp('13%'),
    marginTop: hp('26%'),
    borderRadius: wp('50%'),
    
    alignItems: 'center',
    justifyContent:'center',
     fontSize: RFValue(16),
    backgroundColor: '#3498db',
  
  
  },
  submit_faq: {
    flexDirection: 'row',
    width: wp('60%'),
    fontFamily:'Muli-SemiBold',
    height: hp('6%'),
  marginTop:hp('20%'),    
    alignItems: 'center',
    justifyContent:'center',
     fontSize: RFValue(16),
    backgroundColor: '#3498db',
  
  
  },
  Submit_p: {
    flexDirection: 'row',
    width: wp('20%'),
    fontFamily:'Muli-SemiBold',
    height: hp('4.5%'),

    
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
