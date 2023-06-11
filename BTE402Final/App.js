import React from 'react';
import {NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "./src/components/Page1";
import Page2 from './src/components/Page2';
import Page3 from './src/components/Page3';
import Page4 from './src/components/Page4';
import Page5 from './src/components/Page5';
import Page6 from './src/components/Page6';
import Page7 from './src/components/Page7';
import Page8 from './src/components/Page8';
import Page9 from './src/components/Page9';
import Page10 from './src/components/Page10';
import Page11 from './src/components/Page11';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Page1'>
  <Stack.Screen name='Page1' component={Page1}/>
  <Stack.Screen name='Page2' component={Page2}/>
  <Stack.Screen name='Page3' component={Page3}/>
  <Stack.Screen name='Page4' component={Page4}/>
  <Stack.Screen name='Page5' component={Page5}/>
  <Stack.Screen name='Page6' component={Page6}/>
  <Stack.Screen name='Page7' component={Page7}/>
  <Stack.Screen name='Page8' component={Page8}/>
  <Stack.Screen name='Page9' component={Page9}/>
  <Stack.Screen name='Page10' component={Page10}/>
  <Stack.Screen name='Page11' component={Page11}/>
</Stack.Navigator>
</NavigationContainer>
  );
}

export default App;


