import {View, Text, Image, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen');
      return;
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.splashbg}
        source={require('../../Assets/Images/SplashScreen.png')}
      />
    </View>
  );
}
