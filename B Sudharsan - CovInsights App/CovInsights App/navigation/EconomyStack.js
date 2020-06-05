import { createStackNavigator } from '@react-navigation/stack';
import EconomyHome from '../pages/EconomyHome';
import Impact from '../pages/impact';
import PredictedImpact from '../pages/predictedImpact';
import GlobalGDP from '../pages/globalGDP';
import TopAffectedSectors from '../pages/topAffectedSectors';
import TopAffectedGDP from '../pages/topAffectedGDP';
import * as React from 'react';

const Stack = createStackNavigator();

function EconomyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={EconomyHome} options={{ headerTitleAlign:'center'}} />
          <Stack.Screen name="Impact" component={Impact} options={{ title: null }} />
          <Stack.Screen name="TopAffectedSectors" component={TopAffectedSectors} options={{ title: null }} />
          <Stack.Screen name="TopAffectedGDP" component={TopAffectedGDP} options={{ title: null }} />
          <Stack.Screen name="GlobalGDP" component={GlobalGDP} options={{ title: null }} />
          <Stack.Screen name="PredictedImpact" component={PredictedImpact} options={{ title: null }} />
        </Stack.Navigator>
    );
  }

export default EconomyStack;
