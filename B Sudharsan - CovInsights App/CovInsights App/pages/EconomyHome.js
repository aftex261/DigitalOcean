import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class EconomyHome extends Component {
    state = {
      count: 0
    }
  
    onPress = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
  
   render() {

    const navigation = this.props.navigation;

      return (
        <ScrollView style={{ padding:20, backgroundColor:'white'}}>

            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 1, y: 0}} colors={['rgba(21,158,212,1)', 'rgba(17,134,190,1)']} style={{  paddingVertical:5, marginVertical:10, marginLeft:0, marginRight:0, elevation:3, borderRadius:10}} >
                <TouchableOpacity onPress={() => navigation.navigate('Impact')} style={{flex:1 }}>
                    <View style={{ justifyContent:'space-around', alignItems:'center', flexDirection:'row', flex:3, paddingVertical:20}}>
                        <View style={{ flex:1, alignItems:'center'}}>
                            <Image source={require('../assets/assessment.png')}
                                style={{ height:60, width:60, marginTop:0}} />
                        </View>
                        <View style={{ flex:2, alignItems:'center', justifyContent:'center', marginRight:10}}>
                            <Text style={{ fontSize:16, fontWeight:'bold', textAlign:'center', marginBottom:10, color:'white'}}>
                                Economic impact assessment
                            </Text>
                            <Text style={{ textAlign:'center', fontSize:12, color:'white'}}>
                                OVER 60+ COUNTRIES COVERED
                            </Text>
                        </View>

                        <Ionicons style={{ marginRight:20}} name={'md-arrow-dropright'} size={20} color={'white'} />
                              
                    </View>
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 1, y: 0}} colors={['rgba(21,158,212,1)', 'rgba(17,134,190,1)']} style={{  paddingVertical:5, marginVertical:10, marginLeft:0, marginRight:0, elevation:3, borderRadius:10}} >
                <TouchableOpacity onPress={() => navigation.navigate('PredictedImpact')} style={{flex:1 }}>
                    <View style={{ justifyContent:'space-around', alignItems:'center', flexDirection:'row', flex:3, paddingVertical:20}}>
                        <View style={{ flex:1, alignItems:'center'}}>
                            <Image source={require('../assets/trend.png')}
                                style={{ height:60, width:60, marginTop:0}} />
                        </View>

                        <View style={{ flex:2, alignItems:'center', justifyContent:'center', marginRight:10}}>
                            <Text style={{ fontSize:16, fontWeight:'bold', textAlign:'center', marginBottom:10, color:'white'}}>
                                Predicted Impact on Economy
                            </Text>
                            <Text style={{ textAlign:'center', fontSize:12, color:'white'}}>
                                OVER 20+ COUNTRIES COVERED
                            </Text>
                        </View>

                        <Ionicons style={{ marginRight:20}} name={'md-arrow-dropright'} size={20} color={'white'} />
                       
                    </View>
                </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity onPress={() => navigation.navigate('GlobalGDP')} style={{flex:1, backgroundColor:'white', elevation:3, borderRadius:10, paddingVertical:15, marginVertical:10, marginHorizontal:20}}>
                <View style={{ flex:2, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Image source={require('../assets/gdp.png')}
                        style={{ height:60, width:60, marginTop:10, marginLeft:50}} />
                        
                    <Text style={{ fontSize:15, fontWeight:'bold', textAlign:'center', marginTop:10, marginLeft:0}}>
                        Current {"\n"} Global GDPs 
                    </Text>

                    <Ionicons style={{ marginRight:20}} name={'md-arrow-dropright'} size={20} color={'black'} />
                </View>   
            </TouchableOpacity>

            <View style={{ borderWidth:0.5, marginTop:20, marginBottom:5, borderColor:'rgba(21,158,212,0.5)'}}>

            </View>

            <Text style={{ fontWeight:'700', fontSize:16, marginVertical:10, color:'#da4c2d', textAlign:'center'}}>
                TOP 5 AFFECTED
            </Text>

            <View style={{  flex:2, flexDirection:'row', justifyContent:'space-around'}}>

                <LinearGradient start={{x: 0.2, y: 0}} end={{x: 1, y: 0}} colors={['rgba(17,134,190,1)', 'rgba(21,158,212,1)']} style={{ flex:1, paddingVertical:0, marginVertical:0, elevation:2, borderRadius:10, marginRight:10}} >
                    <TouchableOpacity onPress={() => navigation.navigate('TopAffectedGDP')} style={{ paddingVertical:15, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            
                        <Image source={require('../assets/coronavirus.png')}
                            style={{ height:35, width:35, marginTop:0, marginLeft:0,alignSelf:'center'}} />
                            
                        <Text style={{ fontSize:16, fontWeight:'bold', textAlignVertical:'center',  color:"white", paddingLeft:10}}>
                            Countries
                        </Text>     
                    
                    </TouchableOpacity>
                </LinearGradient> 
                <LinearGradient start={{x: 0.2, y: 0}} end={{x: 1, y: 0}} colors={['rgba(17,134,190,1)', 'rgba(21,158,212,1)']} style={{ flex:1, paddingVertical:5, marginVertical:0, elevation:2, borderRadius:10, marginLeft:10}} >
                    <TouchableOpacity onPress={() => navigation.navigate('TopAffectedSectors')} style={{ paddingVertical:15, flexDirection:'row', justifyContent:'center'}}>
                            
                        <Image source={require('../assets/marketing.png')}
                            style={{ height:30, width:30, marginTop:0, marginLeft:0,}} />
                            
                        <Text style={{ fontSize:16, fontWeight:'bold', textAlignVertical:'center',  color:"white", paddingLeft:10}}>
                            Sectors
                        </Text>     
                    
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={{ borderWidth:0.5, marginTop:20, marginBottom:0, borderColor:'rgba(21,158,212,0.5)'}}>

            </View>

            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 1, y: 0}} colors={['rgba(21,158,212,1)', 'rgba(17,134,190,1)']} style={{  paddingVertical:5, marginTop:20, marginBottom:40, marginLeft:0, marginRight:0, elevation:3, borderRadius:10}} >
                <TouchableOpacity style={{flex:1 }}>
                    <View style={{ justifyContent:'space-around', alignItems:'center', flexDirection:'row', flex:3, paddingVertical:20}}>
                        <View style={{ flex:1, alignItems:'center'}}>
                            <Image source={require('../assets/code.png')}
                                style={{ height:60, width:70, marginLeft:20}} />
                        </View>

                        <View style={{ flex:2, alignItems:'center', justifyContent:'center', marginRight:10}}>
                            <Text style={{ fontSize:16, fontWeight:'bold', textAlign:'center', marginBottom:10, color:'white'}}>
                                Impact on {"\n"} Technology
                            </Text>
                            <Text style={{ textAlign:'center', fontSize:12, color:'white'}}>
                                OVER 10+ TECH STACKS
                            </Text>

                            <Text style={{ marginTop:10, fontWeight:'bold', color:'#eda72b'}}>
                                Coming Soon!
                            </Text>
                        </View>

                        <Ionicons style={{ marginRight:20}} name={'md-arrow-dropright'} size={20} color={'white'} />
                       
                    </View>
                </TouchableOpacity>
            </LinearGradient>

        </ScrollView>
      )
    }

}
  