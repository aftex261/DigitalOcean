import React, { Component } from "react";
import { Platform, ScrollView, Text, View, Image, Dimensions, TextInput, TouchableOpacity, Alert, Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FusionCharts from "react-native-fusioncharts";
import DropDownPicker from 'react-native-dropdown-picker';


export default class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      mailid : '',
      status: ''
    }
  }

  ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      return true

    return false
  }


  submitMail= () => {

    Keyboard.dismiss()
    this.setState({status:''});


    let mailid = this.state.mailid;
    if(this.ValidateEmail(mailid)) {

      this.setState({status:'Hold on...'});

      let data = {
        "mailid" : mailid
      }

      fetch(
        "http://139.59.15.84:5000/subscribe",
        {
          method: 'POST',
          headers: {
            Accept: "application/json", 
           "Content-Type": "text/html, application/json"
          },
          body: JSON.stringify(data)
       }
      ).then(response => response.json())
        .then(response => {

          if(response.status) {

            Alert.alert(
              "Hurray!",
              "Thank you, the report will be delivered to your inbox!",
              [
                { text: "OK" }
              ],
              { cancelable: true });

              this.setState({status:'Done!', mailid:''});
              this.textInput.clear();
          }
          
        })
        .catch((error) => { 

          Alert.alert(
            "Oops!",
            "There has been some error. Please contact the developer!",
            [
              { text: "OK" }
            ],
            { cancelable: true });

         this.setState({status:'Try again later!'});

         } );

    }
    else {
      Alert.alert(
        "Oops!",
        "Please provid a valid Email ID!",
        [
          { text: "OK" }
        ],
        { cancelable: true });
    }

  }
 
  render() {
    return (
      <View style={{ flex:1, backgroundColor:'white', justifyContent:'center', paddingBottom:50}}>

        <View style={{justifyContent:'center', alignItems:'center', marginTop:40}}>
            <Image source={require('../assets/email.jpg')}
                style={{ height:220, width:220, borderRadius:10}} />
        </View>

        <View style={{ marginHorizontal:20, paddingHorizontal:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontWeight:'bold', textAlign:'center', fontSize:16, color:"rgba(0,0,0,0.8)"}}>
                Get the {"\n"} COVID-19 ASSESSMENT REPORT {"\n"} delivered to your inbox!
            </Text>
        </View>

        <View style = {{  height:40, width: Dimensions.get('window').width-20, marginTop:30, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
            <Icon style={{ paddingLeft: 20, paddingVertical:10, borderBottomLeftRadius: 10, borderTopLeftRadius:10, height:40, backgroundColor: 'white'}} name="envelope" size={20} color="#000"/>
            <TextInput 
                ref={input => { this.textInput = input }}
                style={{ flex: 1,height: 40, borderBottomRightRadius:10, borderTopRightRadius:10, backgroundColor: 'rgba(21,150,212,.1)',fontSize: 14, paddingLeft:15, marginLeft:10}}
                placeholder="Enter your E-Mail ID"
                placeholderTextColor="black"
                onChangeText={(text) => this.setState({mailid: text})}
            />
        </View>

        <TouchableOpacity onPress={()=> this.submitMail()} style={{ justifyContent:'center', alignItems:'center', marginTop:30, backgroundColor:'rgba(21,150,212,0.8)', marginHorizontal: 80, padding:10, elevation:1, borderRadius:30}}>
            <Text style={{ color:'white', textAlign:'center', fontWeight:'bold'}}>
                Subscribe
            </Text>
        </TouchableOpacity>

        <Text style={{ marginTop:20, textAlign:'center', fontWeight:'bold', color:'green'}}>
          { this.state.status }
        </Text>
        
      </View>
    );
  }
}
