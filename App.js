import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DataViewScreen from './src/screens/DataViewScreen';
import EditDataScreen from './src/screens/EditDataScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="DataView" component={DataViewScreen} />
        <Stack.Screen name="EditData" component={EditDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}