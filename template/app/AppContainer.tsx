import React from 'react';
import { StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PopUpMessage } from 'components';
// import SplashScreen from 'react-native-splash-screen';
// import { useSelector } from 'react-redux';
import { popUpMessageRef } from 'services';
import { AuthScreens } from 'navigation';
import { isAndroid, navigationRef } from 'utils';
// import { RootState } from './types';

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const AppContainer: React.FC = () => {
  // const initialScreen = useSelector((state: RootState) => state.user.initialScreen);

  // useEffect(() => {
  //   setTimeout(SplashScreen.hide, 1000);
  // }, []);

  const Navigation = AuthScreens;
  // initialScreen === 'AfterFirstLogin' && (Navigation = AfterFirstLoginScreens);
  // initialScreen === 'Home' && (Navigation = HomeScreens);

  // if (accessToken) {
  //   Api.setAuthToken(accessToken);
  //   initialScreen === 'AfterFirstLogin' && (Navigation = AfterFirstLoginScreens);
  //   initialScreen === 'Home' && (Navigation = HomeScreens);
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <Navigation />

      <PopUpMessage ref={popUpMessageRef} />
    </NavigationContainer>
  );
};
