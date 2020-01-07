import React, { Component } from 'react';
import {View,Text,TouchableOpacity,FlatList,TextInput,Image,Button,StyleSheet,ToastAndroid} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GiftedChat } from 'react-native-gifted-chat';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/Ionicons'
import DateTimePicker from "react-native-modal-datetime-picker";
// import { Dialogflow_V2 } from 'react-native-dialogflow';
// import { dialogflowConfig } from './env';
import axios from 'axios';
import arrow from './Images/right-arrow.png'
import Modal from "react-native-modal";
import time from './Images/time-left.png'
import moment from 'moment';
import OfflineNotice from './OfflineNotice'

var list1=[];
var list2=[];
var list3=[];
var list4=[];
const BOT_USER = {
  _id: 2,
  name: 'Agape',
  avatar: 'https://firebasestorage.googleapis.com/v0/b/android-b7591.appspot.com/o/nurse.png?alt=media&token=79b82692-a3d9-4ab1-a637-38b8db0da850'
};
class chat extends Component {

  state = {
    quick:false, 
    det:false,  
    val:'', 
    chosentime:'Time Picker',
    chosentime1:'Time Picker',
    chosentime2:'Time Picker',
    chosentime_2:'Time Picker',
    chosentime3:'Time Picker',
    chosentime_3:'Time Picker',
    chosentime_31:'Time Picker',
    chosentime4:'Time Picker',
    chosentime_4:'Time Picker',
    dat:false,
    tim:false,
  pick:'',
    email:'',
    medicine:false,
    date:"Date",
    date:"2020-07-01",
    li:'Done',
    day1:false,
    day2:false,
    day3:false,
    day4:false,
    isDateTimePickerVisible:false,
    isDateTimePickerVisible1:false,
    isDateTimePickerVisible2:false,
    isDateTimePickerVisible_2:false,
    isDateTimePickerVisible3:false,
    isDateTimePickerVisible_3:false,
    isDateTimePickerVisible_31:false,
    isDateTimePickerVisible4:false,
    isDateTimePickerVisible_4:false,
    messages: [
      {
        _id: 1,
        text: 'Hi! I am the Agape .\n\nHow may I help you today?',
         "quickReplies": {
        type: 'radio', // or 'checkbox',
        values: [
          {
            title: 'Create Reminder',
            value: 'Create Reminder',
          },
          {
            title: 'Set Tracker',
            value: 'Set Tracker',
          },
          {
            title: 'Check Symptoms',
            value: 'Check Symptoms',
          },
          {
            title: 'Know about a disease',
            value: 'Know about a disease',
          },
        ],
      },
        createdAt: new Date(),
        user: BOT_USER
      }
    ],
 
  };

  componentDidMount() {
    // axios.post('http://192.168.0.113:5007/get_chat_history', {
    //   "user_id":"USD0001"
    // })
    // .then(async (response) => { 
    //   console.log(response);
    //   // this.handleGoogleResponse(response); 
    // }
    // )
  
    // .catch(function (error) {
    //   console.log(error);
    // });
    
  }
  onQuickReply(quickReply) {
    console.log("Called",quickReply);
   
    this.onSend([
      {        
        _id: Math.round(Math.random() * 1000000),
        text: quickReply[0].value,
        createdAt: new Date(),
        user:{_id:1}
      },
    ])
  
 }
showDateTimePicker = () => {
  this.setState({ isDateTimePickerVisible: true });
};

hideDateTimePicker = () => {
  this.setState({ isDateTimePickerVisible: false });
}
handleDatePicked = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker();
};
showDateTimePicker1 = () => {
  this.setState({ isDateTimePickerVisible1: true });
};

hideDateTimePicker1 = () => {
  this.setState({ isDateTimePickerVisible1: false });
}
handleDatePicked1 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime1: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker1();
};
showDateTimePicker2 = () => {
  this.setState({ isDateTimePickerVisible2: true });
};

hideDateTimePicker2 = () => {
  this.setState({ isDateTimePickerVisible2: false });
}
handleDatePicked2 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime2: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker2();
};
showDateTimePicker_2 = () => {
  this.setState({ isDateTimePickerVisible_2: true });
};

hideDateTimePicker_2 = () => {
  this.setState({ isDateTimePickerVisible_2: false });
}
handleDatePicked_2 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime_2: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker_2();
};
showDateTimePicker3 = () => {
  this.setState({ isDateTimePickerVisible3: true });
};

hideDateTimePicker3 = () => {
  this.setState({ isDateTimePickerVisible3: false });
}
handleDatePicked3 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime3: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker3();
};
showDateTimePicker_3 = () => {
  this.setState({ isDateTimePickerVisible_3: true });
};

hideDateTimePicker_3 = () => {
  this.setState({ isDateTimePickerVisible_3: false });
}
handleDatePicked_3 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime_3: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker_3();
};
showDateTimePicker_31 = () => {
  this.setState({ isDateTimePickerVisible_31: true });
};

hideDateTimePicker_31 = () => {
  this.setState({ isDateTimePickerVisible_31: false });
}
handleDatePicked_31 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime_31: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker_31();
};
showDateTimePicker4 = () => {
  this.setState({ isDateTimePickerVisible4: true });
};

hideDateTimePicker4 = () => {
  this.setState({ isDateTimePickerVisible4: false });
}
handleDatePicked4 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime4: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker4();
};
showDateTimePicker_4 = () => {
  this.setState({ isDateTimePickerVisible_4: true });
};

hideDateTimePicker_4 = () => {
  this.setState({ isDateTimePickerVisible_4: false });
}
handleDatePicked_4 = time => {
  console.log("A date has been picked: ", time);
  this.setState({ chosentime_4: moment(time).format('HH:mm')});
//   var AmOrPm = this.state.chosentime >= 12 ? 'pm' : 'am';
// var hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
  this.hideDateTimePicker_4();
};
 onSend1(messages) {
   this.setState({valu:''});
   console.log(messages);
  this.setState(previousState => ({
    messages: GiftedChat.append(previousState.messages, messages)
  }));
  console.log(messages);
  console.log(messages);
  axios.post('http://192.168.0.113:5007/message_bot', {
    "user_id":"USD0001",  
    "user_name":"Goks",
    "query":messages,
    "time":"09:07 pm"
  })
  .then(async (response) => { 
    console.log(response);
    this.handleGoogleResponse(response); 
  console.log(response); }
    // console.log(response);
   
    // console.log(response.data.fulfilment);
    // let text= response.data.fulfilment;
    // this.sendBotResponse(text);
  )
  
  .catch(function (error) {
    console.log(error);
  });
}

onSended(messages = []) {

  this.setState({dat:false});
  this.setState({quick:false});
  this.setState({tim:false});
  this.setState({day1:false});
      console.log(messages);
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
  this.setState(previousState => ({
    messages: GiftedChat.append(previousState.messages, messages)
  }));
  console.log(messages);
  console.log(messages[0].text.length);
  // var done="Medicine Name- " + messages[0].text[0] + "\nRemind Until- "+ messages[0].text[1];
  // console.log(done);
  axios.post('http://192.168.0.113:5007/message_bot', {
    "user_id":"USD0001",  
    "user_name":"Goks",
    "query":messages[0].text,
    "time" : date+' '+time
  })
  .then(async (response) => { this.handleGoogleResponse(response); 
  console.log(response); }
    // console.log(response);
   
    // console.log(response.data.fulfilment);
    // let text= response.data.fulfilment;
    // this.sendBotResponse(text);
  )
  
  .catch(function (error) {
    console.log(error);
  });


  // let message = messages[0].text;
  // Dialogflow_V2.requestQuery(
  //   message,
  //   result => this.handleGoogleResponse(result),
  //   error => console.log(error)
  // );
}

  onSend(messages = []) {

    this.setState({dat:false});
    this.setState({quick:false});
    this.setState({tim:false});
        console.log(messages);
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    console.log(messages);
    console.log(messages[0].text.length);
    axios.post('http://192.168.0.113:5007/message_bot', {
      "user_id":"USD0001",  
      "user_name":"Goks",
      "query":messages[0].text,
      "time" : date+' '+time
    })
    .then(async (response) => { this.handleGoogleResponse(response); 
    console.log(response); }
      // console.log(response);
     
      // console.log(response.data.fulfilment);
      // let text= response.data.fulfilment;
      // this.sendBotResponse(text);
    )
    
    .catch(function (error) {
      console.log(error);
    });
  

    // let message = messages[0].text;
    // Dialogflow_V2.requestQuery(
    //   message,
    //   result => this.handleGoogleResponse(result),
    //   error => console.log(error)
    // );
  }


  handleGoogleResponse(response) {
    console.log(response);
    let text = response.data.fulfilment;
    console.log(response.data.fulfilment);
    this.setState({val:response.data.options});
    console.log(response.data.options.length);
    this.setState({quick:false});
   
    if(response.data.options.length >0)
    {
      console.log(response.data.options);
      if(response.data.options == 'date_picker'){
        console.log('Check');
        this.setState({quick:false});
        this.setState({dat:true});
        this.setState({quick:false});
      }
      else if(response.data.options == 'time_picker'){
        console.log('Check');
        this.setState({quick:false});
        this.setState({tim:true});
       
      }
      else if(response.data.options == 'medicine_reminder_ui'){
        this.setState({quick:false});
        this.setState({medicine:true});
      }
      else if(response.data.options == 'Once in a day'){
        this.setState({quick:false});
        this.setState({day1:true});
      }
      else if(response.data.options == 'Twice in a day'){
        this.setState({quick:false});
        this.setState({day2:true});
      }
      else if(response.data.options == 'Thrice in a day'){
        this.setState({quick:false});
        this.setState({day3:true});
      }
      else if(response.data.options == 'On regular intervals'){
        this.setState({quick:false});
        this.setState({day4:true});
      }

      else{
      this.setState({quick:true});
      }
    }
    console.log(text);
    this.sendBotResponse(text);
  }
  sendBotResponse(text) {
    console.log(this.state.previousState);
    console.log(this.state.messages);
    console.log(this.state.messages.length);
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
    console.log(this.state.messages);
  }
  sub(){
    
   console.log(this.state.eventCategory);
 console.log(this.state.email.length);
 console.log(this.state.date.length);

 if(this.state.email.length != '' && this.state.date.length != '' && this.state.eventCategory.length != ''){

let list = []; 
list.push(this.state.email,this.state.date,this.state.eventCategory);
this.setState({email:''});

this.setState({medicine:false});
var done="Medicine Name- " + list[0] + "\nRemind Until- "+ list[1]  + "\nReminder Frequency- "+ list[2];

console.log(list);

this.onSended([
  {
    
    _id: Math.round(Math.random() * 1000000),
    text: done,
    createdAt: new Date(),
    user:{_id:1}
  }])
// let kk= JSON.stringify(list);
// console.log(kk);
 }
 else{
  ToastAndroid.show('Please Enter all details to Proceed', ToastAndroid.SHORT);
 }
  }
  sub1(){
    console.log(this.state.eventCategory);
this.setState({day1:false});

    if(this.state.chosentime1.length != ''){   
    
   list1.push(this.state.chosentime1);
   this.setState({medicine:false});
   var done="Time- " + list1[0] ;
   console.log(list1[0]);
   this.onSended([
     {
       
       _id: Math.round(Math.random() * 1000000),
       text: done,
       createdAt: new Date(),
       user:{_id:1}
     }])
   // let kk= JSON.stringify(list);
   // console.log(kk);
    }
    else{
     ToastAndroid.show('Please Enter all details to Proceed', ToastAndroid.SHORT);
    }
     }
     sub2(){
      console.log(this.state.eventCategory);
      this.setState({day2:false});
       
          if(this.state.chosentime2.length != '' && this.state.chosentime_2.length != ''){   
          
         list2.push(this.state.chosentime2,this.state.chosentime_2);
         this.setState({medicine:false});
         var done="Time 1- " + list2[0] + "\nTime 2- " + list2[1];
         console.log(list2[0]);
         this.onSended([
           {
             
             _id: Math.round(Math.random() * 1000000),
             text: done,
             createdAt: new Date(),
             user:{_id:1}
           }])
         // let kk= JSON.stringify(list);
         // console.log(kk);
          }
          else{
           ToastAndroid.show('Please Enter all details to Proceed', ToastAndroid.SHORT);
          }
           }
           sub3(){
            console.log(this.state.eventCategory);
            this.setState({day3:false});
             
                if(this.state.chosentime3.length != '' && this.state.chosentime_3.length != '' && this.state.chosentime_31.length != ''){   
                
               list3.push(this.state.chosentime3,this.state.chosentime_3,this.state.chosentime_31);
               this.setState({medicine:false});
               var done="Time 1- " + list3[0] + "\nTime 2- " + list3[1] + "\nTime 3- " + list3[2];
               console.log(list2[0]);
               this.onSended([
                 {
                   
                   _id: Math.round(Math.random() * 1000000),
                   text: done,
                   createdAt: new Date(),
                   user:{_id:1}
                 }])
               // let kk= JSON.stringify(list);
               // console.log(kk);
                }
                else{
                 ToastAndroid.show('Please Enter all details to Proceed', ToastAndroid.SHORT);
                }
                 }

                 sub4(){
                  console.log(this.state.eventCategory1);
                  this.setState({day4:false});
                   
                      if(this.state.chosentime4.length != '' && this.state.chosentime_4.length != '' && this.state.eventCategory1.length != ''){   
                      
                     list3.push(this.state.chosentime3,this.state.chosentime_3,this.state.eventCategory1);
                   
                     var done="Time 1- " + list3[0] + "\nTime 2- " + list3[1] + "\nTime 3- " + list3[2];
                   
                     this.onSended([
                       {
                         
                         _id: Math.round(Math.random() * 1000000),
                         text: done,
                         createdAt: new Date(),
                         user:{_id:1}
                       }])
                     // let kk= JSON.stringify(list);
                     // console.log(kk);
                      }
                      else{
                       ToastAndroid.show('Please Enter all details to Proceed', ToastAndroid.SHORT);
                      }
                       }

                 setEventCategory(eventCategory){
                    this.setState({eventCategory: eventCategory},()=>{console.log('setEventCategory: eventCategory: ', this.state.eventCategory) })}
                    setEventCategory1(eventCategory1){
                      this.setState({eventCategory1: eventCategory1},()=>{console.log('setEventCategory1: eventCategory1: ', this.state.eventCategory1) })}
             

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <OfflineNotice/>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          // scrollToBottom={false}
          user={{
            _id: 1
          }}
          // showUserAvatar={true}
          // isLoadingEarlier={true}
          onQuickReply={quickReply => this.onQuickReply(quickReply)}
          // textInputStyle={true}
        />
       <Modal isVisible={this.state.quick}  animationType={'slide'}
       backdropColor="white"
       backdropOpacity={0}
       >
       <View style={
                                {
                                    flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    height: hp('7.1%'),
                                  
                                    borderColor: 'transparent',
                                    borderRadius: RFValue(25),
                                    width: wp('100%'),
                                    top: hp('45%'),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    justifycontent:'flex-end'
                                   
                                }
                            }>
 {/* <FlatList
                                    columnWrapperStyle={{ justifyContent: 'flex-start', paddingHorizontal: wp('7%') }}
                                    horizontal={true}
                                  
                                    data={this.state.val}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <View style={{ padding: RFValue(5) }}>
                                            <TouchableOpacity onPress={() => this.addPoint(item)} style={{ height: hp('5%'), justifyContent: 'center', alignItems: 'center', width: wp('22%'), elevation: RFValue(3),borderRadius: RFValue(100) }}>
                                                <Text style={{ color: this.state.TextColor, fontFamily: 'Muli-Bold', fontSize: RFValue(15) }}>{item}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                /> */}
                                <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.val}
                            horizontal={true}
                            initialNumToRender={1}
                            // numColumns={2}
                            //numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ alignSelf: 'center', flex: 1, flexDirection: 'column', backgroundColor: 'transparent', padding: RFValue(7) }}>
                                     <TouchableOpacity onPress={() =>
                                       this.onSend([
                                        {
                                          
                                          _id: Math.round(Math.random() * 1000000),
                                          text: item,
                                          createdAt: new Date(),
                                          user:{_id:1}
                                        }])}
                                     style={{ elevation: RFValue(3), flexDirection: 'row', backgroundColor: "white", borderRadius: RFValue(5), alignItems: 'center', height: hp('4%') ,borderColor:"#3498db",borderWidth:1,borderRadius:RFValue(5)}}>
                                                <Text style={{ padding: RFValue(8), fontSize: RFValue(14), fontFamily: 'Muli-Bold', color:'#3498db' }}>{item}</Text>
                                            </TouchableOpacity>
                                   
                                 
                                </View>
                            )}
                        />
                          </View>
                        </Modal>
                          <Modal isVisible={this.state.dat}  animationType={'slide'}
       backdropColor="white"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    height: hp('7%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                                    borderRadius: RFValue(25),
                                    width: wp('100%'),
                                    top: hp('44%'),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
                              
                                    <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-05-1950"
        maxDate="08-01-2020"
    
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> 
      <TouchableOpacity onPress={() =>
                                       this.onSend([
                                        {
                                          
                                          _id: Math.round(Math.random() * 1000000),
                                          text: this.state.date,
                                          createdAt: new Date(),
                                          user:{_id:1}
                                        }])}
      style={{bottom:hp('4%'),backgrouncolor:'red',left:wp('87%')}}
      ><Image source={arrow}   style={{  width: RFValue(25),
        height: RFValue(25),}}></Image></TouchableOpacity>
                              </View>

                           

        
        </Modal>
        <Modal isVisible={this.state.tim}  animationType={'slide'}
       backdropColor="white"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: 'white',
                                    height: hp('5%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                                   
                                    width: wp('100%'),
                                    top: hp('44%'),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
 <TouchableOpacity onPress={this.showDateTimePicker}
      style={{}}
      ><Image source={time}   style={{  width: RFValue(25),
        height: RFValue(25),}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker} >
      <Text style={{fontSize:RFValue(20),bottom:hp('4%'),left:wp('10%'),color:'#3498db'}}>{this.state.chosentime}</Text>
                               </TouchableOpacity>

                              <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode={'time'}
          is24Hour={false}
        />
      <TouchableOpacity onPress={() =>
                                       this.onSend([
                                        {                                          
                                          _id: Math.round(Math.random() * 1000000),
                                          text: this.state.chosentime,
                                          createdAt: new Date(),
                                          user:{_id:1}
                                        }])}
      style={{bottom:hp('7%'),backgrouncolor:'red',left:wp('87%')}}
      ><Image source={arrow}   style={{  width: RFValue(25),
        height: RFValue(25),}}></Image></TouchableOpacity>
                              </View>

                           

        
        </Modal>
        <Modal isVisible={this.state.medicine}  animationType={'slide'}
       backdropColor="red"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: '#d1d1d1',
                                    height: hp('100%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                              
                                    width: wp('100%'),
                                 alignItems:'center',
                                 borderRadius:RFValue(25),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
                              <View style={{backgroundColor:'#fff',   borderRadius:RFValue(5),height:hp('43%'),width:wp('90%'),top:hp('30%')}}>
                              <Text style={{textAlign:'center',fontSize:RFValue(18),}}>Enter the medicine name, last date to remind and reminder frequency:</Text>
                              <View style={styles.NameContainer}>
            <Icon name={'ios-mail'} size={RFValue(25)} color={'black'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Medicine Name'}
              placeholderTextColor={'#3498db'}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email} /></View>
              <View style={styles.NameContainer1}>
                    <DatePicker
        style={{width: wp('90%'),color:'#3498db',placeholder:'Date'}}
        date={this.state.date}
        mode="date"
        placeholder="Date Reminder"
        format="DD-MM-YYYY"
        minDate="07-01-2020"
        placeholderTextColor={'#3498db'}
        maxDate="08-01-2030"
    
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            color:'#3498db',
            marginLeft: wp('12%')
          },
          dateInput: {
            color:'#3498db',
            placeholder:'Remind',
          
            marginLeft: wp('10%'),
            borderColor:'#3498db',
            borderRadius:RFValue(3),
            
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> 
      </View>
      <View style={styles.NameContainer2}>
               
                <RNPickerSelect
              style={{placeholderTextColor:'#3498db',placeholder:'Range',color:'#3498db',}}
              placeholder={{
                label: 'Reminder Frequency'
              }}
             placeholderTextColor={'#3498db'}
             
        
            onValueChange={(value) => this.setEventCategory(value)}

        
            value={this.state.eventCategory}
           
          
            items={[
                { label: 'Once in a day', value: 'Once in a day' },
                { label: 'Twice in a day', value: 'Twice in a day' },
                { label: 'Thrice in a day', value: 'Thrice in a day' },
                { label: 'On regular intervals', value: 'On regular intervals' },
                
            ]}
        />
        </View>
        <TouchableOpacity style={styles.Submit}onPress={() =>this.sub()}>
            <Text  style={{fontSize:RFValue(20),color:'white'}}
      >Submit</Text>
          </TouchableOpacity>
      
 

                                 {/* <TouchableOpacity onPress={this.showDateTimePicker}
      style={{}}
      ><Image source={time}   style={{  width: RFValue(25),
        height: RFValue(25),}}></Image></TouchableOpacity> */}
                              {/*  <TouchableOpacity onPress={this.showDateTimePicker} > */}
      {/* <Text style={{fontSize:RFValue(20),bottom:hp('4%'),left:wp('10%'),color:'#3498db'}}>{this.state.chosentime}</Text>
                               </TouchableOpacity>

      <TouchableOpacity onPress={() =>
                                       this.onSend([
                                        {
                                          
                                          _id: Math.round(Math.random() * 1000000),
                                          text: this.state.chosentime,
                                          createdAt: new Date(),
                                          user:{_id:1}
                                        }])}
      style={{bottom:hp('7%'),backgrouncolor:'red',left:wp('87%')}}
      ><Image source={arrow}   style={{  width: RFValue(25),
        height: RFValue(25),}}></Image></TouchableOpacity> */}
        </View>

                              </View>

                           

        
        </Modal>
        <Modal isVisible={this.state.day1}  animationType={'slide'}
       backdropColor="red"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: '#d1d1d1',
                                    height: hp('100%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                              
                                    width: wp('100%'),
                                 alignItems:'center',
                                 borderRadius:RFValue(25),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
                              <View style={{backgroundColor:'#fff',   borderRadius:RFValue(5),height:hp('23%'),width:wp('90%'),top:hp('30%'),}}>
                              <Text style={{textAlign:'center',fontSize:RFValue(18),top:hp('1.5%')}}>Select the Time</Text>
                         
                              <TouchableOpacity onPress={this.showDateTimePicker1}
      style={{top:hp('3.5%'),marginLeft:wp('28%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker1} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('27%')}}>{this.state.chosentime1}</Text>
                               </TouchableOpacity>
                           

                              <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible1}
          onConfirm={this.handleDatePicked1}
          onCancel={this.hideDateTimePicker1}
          mode={'time'}
          is24Hour={false}
        />

                             
              
   
        <TouchableOpacity style={styles.Submit1}onPress={() =>this.sub1()}>
            <Text  style={{fontSize:RFValue(20),color:'white'}}
      >Submit</Text>
          </TouchableOpacity>
        </View>

                              </View>

                           

        
        </Modal>
        <Modal isVisible={this.state.day2}  animationType={'slide'}
       backdropColor="red"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: '#d1d1d1',
                                    height: hp('100%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                              
                                    width: wp('100%'),
                                 alignItems:'center',
                                 borderRadius:RFValue(25),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
                              <View style={{backgroundColor:'#fff',   borderRadius:RFValue(5),height:hp('28%'),width:wp('90%'),top:hp('30%'),}}>
                              <Text style={{textAlign:'center',fontSize:RFValue(18),top:hp('1.5%')}}>Select the Time</Text>
                         
                              <TouchableOpacity onPress={this.showDateTimePicker2}
      style={{top:hp('3.5%'),marginLeft:wp('22%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker2} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('23%')}}>Time 1 -{this.state.chosentime2}</Text>
                               </TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_2}
      style={{top:hp('3.5%'),marginLeft:wp('22%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_2} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('23%')}}>Time 2 -{this.state.chosentime_2}</Text>
                               </TouchableOpacity>
                           

                              <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible2}
          onConfirm={this.handleDatePicked2}
          onCancel={this.hideDateTimePicker2}
          mode={'time'}
          is24Hour={false}
        />
               <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible_2}
          onConfirm={this.handleDatePicked_2}
          onCancel={this.hideDateTimePicker_2}
          mode={'time'}
          is24Hour={false}
        />

                             
              
   
        <TouchableOpacity style={styles.Submit1}onPress={() =>this.sub2()}>
            <Text  style={{fontSize:RFValue(20),color:'white'}}
      >Submit</Text>
          </TouchableOpacity>
        </View>

                              </View>

        </Modal>
        <Modal isVisible={this.state.day3}  animationType={'slide'}
       backdropColor="red"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: '#d1d1d1',
                                    height: hp('100%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                              
                                    width: wp('100%'),
                                 alignItems:'center',
                                 borderRadius:RFValue(25),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
                              <View style={{backgroundColor:'#fff',   borderRadius:RFValue(5),height:hp('33%'),width:wp('90%'),top:hp('30%'),}}>
                              <Text style={{textAlign:'center',fontSize:RFValue(18),top:hp('1.5%')}}>Select the Time</Text>
                         
                              <TouchableOpacity onPress={this.showDateTimePicker3}
      style={{top:hp('3.5%'),marginLeft:wp('19%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker3} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('19%')}}>Time 1 -{this.state.chosentime3}</Text>
                               </TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_3}
      style={{top:hp('3.5%'),marginLeft:wp('19%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_3} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('19%')}}>Time 2 -{this.state.chosentime_3}</Text>
                               </TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_31}
      style={{top:hp('3.5%'),marginLeft:wp('19%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_31} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('19%')}}>Time 3 -{this.state.chosentime_31}</Text>
                               </TouchableOpacity>
                           

                              <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible3}
          onConfirm={this.handleDatePicked3}
          onCancel={this.hideDateTimePicker3}
          mode={'time'}
          is24Hour={false}
        />
               <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible_3}
          onConfirm={this.handleDatePicked_3}
          onCancel={this.hideDateTimePicker_3}
          mode={'time'}
          is24Hour={false}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible_31}
          onConfirm={this.handleDatePicked_31}
          onCancel={this.hideDateTimePicker_31}
          mode={'time'}
          is24Hour={false}
        />

                             
              
   
        <TouchableOpacity style={styles.Submit1}onPress={() =>this.sub3()}>
            <Text  style={{fontSize:RFValue(20),color:'white'}}
      >Submit</Text>
          </TouchableOpacity>
        </View>

                              </View>

        </Modal>
        <Modal isVisible={this.state.day4}  animationType={'slide'}
       backdropColor="red"
       backdropOpacity={0}
       >
       <View style={
                                {
                                  flexDirection: 'column',
                                    backgroundColor: '#d1d1d1',
                                    height: hp('100%'),
                                    borderWidth: RFValue(2),
                                    borderColor: 'transparent',
                              
                                    width: wp('100%'),
                                 alignItems:'center',
                                 borderRadius:RFValue(25),
                                    padding: RFValue(10),
                                    alignSelf: 'center',
                                    backdropColor:'red',
                                }
                            }>
                              <View style={{backgroundColor:'#fff',   borderRadius:RFValue(5),height:hp('36%'),width:wp('90%'),top:hp('20%'),}}>
                              <Text style={{textAlign:'center',fontSize:RFValue(18),top:hp('1.5%')}}>Select the Time</Text>
                         
                              <TouchableOpacity onPress={this.showDateTimePicker4}
      style={{top:hp('3.5%'),marginLeft:wp('14%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker4} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('15%')}}>Start Time -{this.state.chosentime4}</Text>
                               </TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_4}
      style={{top:hp('3.5%'),marginLeft:wp('14%')}}
      ><Image source={time}   style={{  width: RFValue(22),
        height: RFValue(22)}}></Image></TouchableOpacity>
                               <TouchableOpacity onPress={this.showDateTimePicker_4} >
      <Text style={{fontSize:RFValue(20),left:wp('10%'),color:'#3498db',marginLeft:wp('15%')}}>End Time -{this.state.chosentime_4}</Text>
                               </TouchableOpacity>
                           

                              <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible4}
          onConfirm={this.handleDatePicked4}
          onCancel={this.hideDateTimePicker4}
          mode={'time'}
          is24Hour={false}
        />
               <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible_4}
          onConfirm={this.handleDatePicked_4}
          onCancel={this.hideDateTimePicker_4}
          mode={'time'}
          is24Hour={false}
        />
              <View style={styles.NameContainer2}>
               
               <RNPickerSelect
             style={{placeholderTextColor:'#3498db',placeholder:'Range',color:'#3498db',}}
             placeholder={{
               label: 'Interval Duration'
             }}
            placeholderTextColor={'#3498db'}
            
       
           onValueChange={(value) => this.setEventCategory1(value)}

       
           value={this.state.eventCategory1}
          
         
           items={[
               { label: '30 minutes', value: '30 minutes' },
               { label: '45 minutes', value: '45 minutes' },
               { label: '1hour', value: '1hour' },
               { label: '2hours', value: '2hours' },
               { label: '3hours', value: '3hours' },
               { label: '4hours', value: '4hours' },
               { label: '5hours', value: '5hours' },
               
           ]}
       />
       </View>

                             
              
   
        <TouchableOpacity style={styles.Submit1}onPress={() =>this.sub4()}>
            <Text  style={{fontSize:RFValue(20),color:'white'}}
      >Submit</Text>
          </TouchableOpacity>
        </View>

                              </View>

        </Modal>
      </View>
    );
  }
}
export default chat;
const styles = StyleSheet.create({
  NameContainer:{
    flexDirection: 'row',
    width: wp('80%'),
    color:'white',
    fontSize:RFValue(13),
    height: hp('6%'),
  alignSelf:'center',
  marginTop:hp('2%'),
    borderRadius: wp('1%'),
    marginBottom:hp('1%'),
    alignItems: 'center',
    justifyContent:'center',
    borderColor:'#3498db',
    color:'#3498db',
    borderWidth :1,
  },
  Submit: {
    flexDirection: 'row',
    width: wp('35%'),
    fontFamily:'Muli-SemiBold',
    height: hp('6%'),
    marginTop: hp('1.5%'),
    borderRadius: RFValue(5),
  
    alignSelf:'center',
    alignItems: 'center',
    color:'white',
    justifyContent:'center',
     fontSize: RFValue(16),
    backgroundColor: '#007AFF',
  
  
  },
  Submit1: {
    flexDirection: 'row',
    width: wp('25%'),
    fontFamily:'Muli-SemiBold',
    height: hp('5%'),
    marginTop: hp('3%'),
    borderRadius: RFValue(5),
  
    alignSelf:'center',
    alignItems: 'center',
    color:'white',
    justifyContent:'center',
     fontSize: RFValue(16),
    backgroundColor: '#007AFF',
  
  
  },
 
  NameContainer1:{
    flexDirection: 'row',
    width: wp('80%'),
    color:'white',
    borderColor:'#3498db',
    fontSize:RFValue(13),
    color:'#3498db',
    height: hp('6%'),
    marginTop:hp('2%'),
    borderRadius: wp('1%'),
    marginBottom:hp('1%'),
    alignItems: 'center',
    justifyContent:'center',
   
  },
  NameContainer2:{
    alignSelf:'center',
    width: wp('80%'),
    color:'#3498db',
    fontSize:RFValue(13),
    height: hp('6%'),
    borderColor:'#3498db',
    borderWidth:1,
    marginTop:hp('2%'),
    borderRadius: wp('1%'),
    marginBottom:hp('1%'),
    alignItems: 'center',
    justifyContent:'center',
   
  },
  inputIcon: {
    marginHorizontal: wp('1%'),
    right:hp('1%'),
    color:'#3498db',
  },
  input: {
    width: wp('65%'),
    color:'#3498db',
    fontSize:RFValue(13),
    left: wp('0%'),
   
  },

});