import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Platform, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {DrawerComponent} from '../Components';

const MainStack = createNativeStackNavigator();
const RecoveryPasswordStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import {
  LoginScreen,
  HomeScreen,
  OnboardingScreen,
  SplashScreen,
} from '../Screens';
import mainColors from '../Themes/Colors/mainColors';

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="SplashScreen">
      <MainStack.Screen name="SplashScreen" component={SplashScreen} />
      <MainStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

const sideMenuDisabledScreens = [
  'LoginScreen',
  'OnboardingScreen',
  'SplashScreen',
];

const AppNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <NavigationContainer
      onReady={() => Platform.OS === 'android' && RNBootSplash.hide()}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => null,
          drawerStyle: {
            backgroundColor: mainColors.backgroundPrimary,
            width: 0.75 * width,
          },
        }}
        drawerContent={props => <DrawerComponent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={MainScreen}
          options={({route}) => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? 'LoginScreen';
            if (sideMenuDisabledScreens.includes(routeName)) {
              return {swipeEnabled: false};
            }
            return {};
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
