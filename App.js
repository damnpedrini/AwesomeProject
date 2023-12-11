import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserRegistrationScreen from './src/screens/UserRegistrationScreen';
import UserInfoViewScreen from './src/screens/UserInfoViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistrationScreen}
        />
        <Stack.Screen name="UserInfoView" component={UserInfoViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
