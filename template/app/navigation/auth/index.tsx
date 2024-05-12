import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'views/screens/AuthStack';
import { AppScreens } from 'types';

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
} as const;

const options = {
  animation: 'none',
} as const;

const AuthStack = createNativeStackNavigator();
export const AuthScreens = (): React.ReactElement => (
  <AuthStack.Navigator initialRouteName={AppScreens.Login} screenOptions={screenOptions}>
    <AuthStack.Screen options={options} name={AppScreens.Login} component={LoginScreen} />
  </AuthStack.Navigator>
);
