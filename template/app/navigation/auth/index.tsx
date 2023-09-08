import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'views/screens/AuthStack';

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
} as const;

const options = {
  animation: 'none',
} as const;

const AuthStack = createNativeStackNavigator();
export const AuthScreens = (): React.ReactElement => (
  <AuthStack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
    <AuthStack.Screen options={options} name="LoginScreen" component={LoginScreen} />
  </AuthStack.Navigator>
);
