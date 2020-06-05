import React, { Component } from "react";
import { Platform, ScrollView, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ActivityIndicator, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GlobalGDP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    }
  }

  async fetchValues()  {

    try {
      const response = await fetch("http://139.59.15.84:5000/getGDPs",
      {
        method: 'POST',
        headers: {
          Accept: "application/json", 
         "Content-Type": "text/html, application/json"
        }
      });

      const json = await response.json();
      this.setState({data: json.data});

      this.setState({loading:'false'})
      console.log(this.state.loading, this.state.data);

      t
    }
    catch (error) {
      console.log(error);
    }

  }

  async componentDidMount() {
    this.fetchValues();
  }

  render() {
     const { loading } = this.state.loading;
     let count =0;

    return (
      <View style={{ flex:1, backgroundColor:'white'}}>

          <View style={{ elevation:2, backgroundColor:'rgba(21,150,212,0.8)', justifyContent:'center', alignItems:'center', paddingBottom:0, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                <Image source={require('../assets/gdp.png')}
                    style={{ height:80, width:80, marginTop:20}} />
                <Text style={{ textAlign:'center', marginTop:10, color:'white', fontWeight:'bold', fontSize:18}}>
                    Gross Domestic {"\n"} Product
                </Text> 
                <View style = {{  height:40, width: Dimensions.get('window').width-40, marginTop:15, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                    <Icon style={{ paddingLeft: 20, paddingVertical:10, borderBottomLeftRadius: 10, borderTopLeftRadius:10, height:40, backgroundColor: 'white'}} name="search" size={16} color="#000"/>
                    <TextInput 
                    style={{ flex: 1,height: 40, borderBottomRightRadius:10, borderTopRightRadius:10, backgroundColor: '#fff',fontSize: 14, paddingLeft:15}}
                    placeholder="Search for any country"
                    placeholderTextColor="#8d959c"
                    // onChangeText={(text) => this.searchText(text)}
                    />
                </View>
          </View>

          

          { loading ?
            <ActivityIndicator style={{ alignItems:'center', justifyContent:'center', flex:1, marginBottom:50}} size="large"/> :
           
            <FlatList
            data={this.state.data}
            renderItem={({ item: row }) => (

              <View style={{ marginTop:20, marginHorizontal:20, flexDirection:'row', justifyContent:'space-between', borderRadius:5, backgroundColor: 'white', elevation:2}}>
                <View style={{ padding:10}}>
                    <Text style={{ color:'rgba(0,0,0,0.5)', marginTop:5, fontSize:14, fontWeight:'bold'}}>
                        { row[0] }
                    </Text>
                    <Text style={{ fontWeight:'bold', fontSize:17, marginTop:5, color:'black'}}>
                      { '$' +  row[1].toFixed(2)  + 'Mn'}
                    </Text>
                </View>
                <View style={{ justifyContent:'center'}}>
                  <Image source={{ uri: 'https://www.countryflags.io/' + row[2]+ '/flat/64.png'}}
                      style={{ height:35, width:60, marginRight:20, justifyContent:'center'}} />
                </View> 
              </View>

            )}
             /> 

          }
      </View>
    );
  }
}


