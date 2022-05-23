import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {store} from './Store/configureStore';
import AppNavigator from './Navigations/AppNavigator';
import {StatusBar, LogBox, Text, TextInput} from 'react-native';
import {Loading, Popup} from './Components';
import {NativeBaseProvider} from 'native-base';
import 'react-native-gesture-handler';

console.reportErrorsAsExceptions = true;

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppNavigator />
        <Loading />
        <Popup />
      </Provider>
    </NativeBaseProvider>
  );
}
