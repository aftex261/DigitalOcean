import React, { Component } from "react";
import { Platform, ScrollView, Text, View, Image, Dimensions } from "react-native";
import FusionCharts from "react-native-fusioncharts";
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ImpactPredicted extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      country: 'India'
    }

    const chartData = [
      { label: "Agriculture, Mining and Quarying", value: "2.90" },
      { label: "Business and Trade", value: "2.60" },
      { label: "Manufacturing", value: "1.80" },
      { label: "Hotel and Restaurants", value: "1.40" },
      { label: "Transport Services", value: "1.15" }
    ];
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "column2d",
      width: "95%",
      height: "300",
      dataFormat: "json",
      dataSource: {
        chart: {
          // caption: "Impact on Economic Sectors",
          // subCaption: "Due to Covid-19",
          xAxisName: "Sector",
          yAxisName: "Predicted impact %",
          numberSuffix: "%",
          theme: "fusion",
          palettecolors: "#1596d4",
          labelDisplay:'rotate'
        },
        data: chartData
      }
    };

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("../assets/fusioncharts.html")
    });
    
    // this.setState({
    //   "type" : chartConfig.type,
    //   "width" : chartConfig.width,
    //   "height" : chartConfig.height,
    //   "dataFormat": chartConfig.dataFormat,
    //   "dataSource": chartConfig.dataSource
    // });

    this.state = chartConfig;
    
  }

  async fetchValues(name) {

    let data = { 
      "country" : name
    }

    // this.setState({country: name});

    try {
      const response = await fetch("http://139.59.15.84:5000/getImpactPredicted",
      {
        method: 'POST',
        headers: {
          Accept: "application/json", 
         "Content-Type": "text/html, application/json"
        },
        body: JSON.stringify(data)
      });

      const json = await response.json();
      this.setState({gdp: json.gdp, currentGDP: json.currentGDP, emp: json.Emp, values: json.values});

      // this.setState({loading:'false'})
      // console.log(this.state.loading, this.state.data);

    }
    catch (error) {
      console.log(error);
    }

    let labels = ['Agriculture, Mining and Quarying','Business and Trade','Manufacturing ',' Hotel and Restaurants',
     'Transport Services']

    // for l,v in (labels, this.state.values) {
    //   console.log(v);
    // }

    let values = this.state.values;

    console.log(values);

    let newChartData = []

    var i;
    for(i=0;i<5;i++) {

      newChartData.push({
        "label" : labels[i],
        "value" : Math.abs(values[i])
      })
    }

    if(this.state.dataSource) {

    console.log("Chart", this.state.dataSource);

    let json = this.state.dataSource;

    json['data'] = newChartData;

    this.setState({ chartConfig: json});
    }

    this.setState({'loading': false});

  }
  

  componentDidMount() {

    this.setState({loading: 'true'});
    this.fetchValues('India');

  }

  
  render() {
    return (
      <ScrollView style={{ flex:1, padding: 10, backgroundColor:'white'}}>

        <View style={{ paddingHorizontal: 20, elevation:2, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:0}}>
            <Image source={require('../assets/stat.png')}
                style={{ height:100, width:150, marginTop:10, marginLeft:0}} />
            <Text style={{ textAlign:'center', marginRight:15, fontWeight:"bold", fontSize:18, color:'rgba(21,150,212,1)'}}>
                Predicted {"\n"} Impact
            </Text>
        </View>

        <View style={{flexDirection:'row', margin:10, marginTop:25}}>
            <DropDownPicker
                items={[
                    {label: 'India'},
                    {label: "Australia"},
                    {label: "Austria" },
                    {label:"Bangladesh"},
                    {label:"Belgium"},
                    {label:"Bhutan"},
                    {label:"Brazil"},
                    {label:"Brunei Darussalam"},
                    {label:"Bulgaria"},
                    {label:"Cambodia"},
                    {label:"Canada"},
                    {label:"Croatia"},
                    {label:"Cyprus"},
                    {label:"Czech Republic"},
                    {label:"Denmark" },
                    {label:"Estonia"},
                    {label:"Fiji"},
                    {label:"Finland"},
                    {label:"France"},
                    {label: "Germany"},
                    {label:"Greece"},
                    {label:"Hong Kong, China"},
                    {label:"Hungary"},
                    {label: "Indonesia"},
                    {label: "Ireland"},
                    {label:"Italy"},
                    {label:"Japan"},
                    {label: "Kazakhstan"},
                    {label:"Kyrgyz Republic"},
                    {label:"Lao People's Democratic Republic"},
                    {label:"Latvia"},
                    {label:"Lithuania"},
                    {label: "Luxembourg"},
                    {label: "Malaysia" },
                    {label:"Maldives"},
                    {label:"Malta"},
                    {label: "Mexico"},
                    {label:"Mongolia"},
                    {label:"Nepal"},
                    {label: "Netherlands"},
                    {label: "Norway"},
                    {label: "Pakistan"},
                    {label:"People's Republic of China"},
                    {label:"Philippines"},
                    {label: "Poland"},
                    {label:"Portugal"},
                    {label:"Republic of Korea"},
                    {label: "Romania"},
                    {label:"Russia"},
                    {label:"Singapore"},
                    {label:"Slovak Republic"},
                    {label:"Slovenia"},
                    {label:"Spain"},
                    {label:"Sri Lanka"},
                    {label:"Sweden"},
                    {label: "Switzerland"},
                    {label:"Taipei,China"},
                    {label:"Thailand"},
                    {label:"Turkey"},
                    {label:"United Kingdom"},
                    {label:"United States"},
                    {label:"Viet Nam"}
                ]}
                // defaultValue={this.state.country}
                labelStyle={{color:'rgba(21,150,212,1)' }}
                containerStyle={{height: 40}}
                style={{backgroundColor: 'white', width:Dimensions.get('screen').width-40, borderColor:'rgba(21,150,212,0.5)'}}
                dropDownStyle={{backgroundColor: 'white', color:'white'}}
                onChangeItem={item => this.fetchValues(item.label) }
                placeholder={'India'}
            />
        </View>

        { !this.state.loading &&

        <View style={{  flex:2, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:20}}>
            <View style={{ flex:1, elevation:0, borderRadius:20, backgroundColor:'white', backgroundColor:'rgba(21,150,212,0.8)', marginRight:10}}>
                <View style={{ flexDirection:'row', alignItems:'center', padding:10}}>
                    <Image source={require('../assets/internet.png')}
                        style={{ height:20, width:20}} />
                    <Text style={{ color:'white', fontWeight:'bold', marginLeft:10, fontSize:13}}>
                        On Country's GDP
                    </Text>
                </View>
                <Text style={{ textAlign:'center', marginTop:10, fontSize:20, fontWeight:'bold', marginBottom:20, color:'white'}}>
                  {this.state.gdp}%
                </Text>
            </View>
            <View style={{ flex:1, elevation:0, borderRadius:20, backgroundColor:'white', backgroundColor:'rgba(21,150,212,0.8)'}}>
                <View style={{ flexDirection:'row', alignItems:'center', padding:10}}>
                    <Image source={require('../assets/worker.png')}
                        style={{ height:20, width:20}} />
                    <Text style={{ color:'white', fontWeight:'bold', marginLeft:10, fontSize:13}}>
                        On Employment
                    </Text>
                </View>
                <Text style={{ textAlign:'center', marginTop:10, fontSize:20, fontWeight:'bold', marginBottom:20, color:'white'}}>
                  {this.state.emp}%
                </Text>
            </View>
        </View> }

        { this.state.currentGDP &&

        <View style={{ marginTop:20, flexDirection:'row', justifyContent:'center', alignItems:'center', fontSize:15}}>
          <Text style={{ color:'rgba(21,150,212,1)', fontWeight:'bold' }}>
            Country's current GDP :
          </Text>
          <Text style={{ fontWeight:'bold', color:'green', fontSize:16}}>
             {' '}${this.state.currentGDP.toFixed(2)}Mn
          </Text>
        </View> }

        { !this.state.loading &&

        <View style={{ flex:1, marginTop:20, borderColor:'rgba(21,150,212,0.1)', borderWidth:1, marginBottom:50, marginHorizontal:10}}>
          <Text style={{ marginVertical:15, fontWeight:'bold', textAlign:'center', color:'rgba(0,0,0,0.6)'}}>
            Predicted impact on economic sectors
          </Text>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>  }


        
      </ScrollView>
    );
  }
}
