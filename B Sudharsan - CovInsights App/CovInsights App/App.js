import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EconomyStack from './navigation/EconomyStack'
import Report from './pages/report';
import Ionicons from 'react-native-vector-icons/Ionicons';

const fixOppoTextCutOff = () => {
  const styles = StyleSheet.create({
    defaultFontFamily: {
      fontFamily: 'lucida grande',
    },
  });
  const oldRender = Text.render;
  Text.render = function render(...args) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultFontFamily, origin.props.style],
    });
  };

}

fixOppoTextCutOff();

function HomeScreen() {
  return <EconomyStack/>
}


function ReportScreen() {
  return <Report/>
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Assessment') {
              iconName = 'md-globe'
            } else if (route.name === 'Report') {
              iconName = 'md-clipboard'
            } else if (route.name === 'About') {
              iconName = 'md-help'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'rgba(21,150,212,1)',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true
        }}
      >
        <Tab.Screen name="Assessment" component={HomeScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
        {/* <Tab.Screen name="About" component={AboutScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}