import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {Header, TabNavigation} from '..';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from '..';
import images from '../../Shared/images';
export default function Wrapper({children, isInHomeScreen, bottomNav}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.layout}>
          <View style={styles.background}>
            {isInHomeScreen ? (
              <SvgXml
                xml={images.BackgroundHomeScreen}
                style={styles.backgroundImage}
              />
            ) : (
              <View style={styles.statusBarColor} />
            )}
          </View>
          <View style={styles.container}>
            <Header isInHomeScreen={isInHomeScreen} />
            {children}
          </View>
        </View>
      </KeyboardAvoidingView>
      {bottomNav && <TabNavigation focus={bottomNav} />}
    </SafeAreaView>
  );
}
