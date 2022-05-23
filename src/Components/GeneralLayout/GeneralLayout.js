import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {HeaderBar, BoxShadow} from '..';

export default function GeneralLayout({
  children,
  headerLeftTitle,
  headerRight,
  bodyStyle,
  hasBackgroundBody,
}) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={headerLeftTitle}
        right={headerRight}
        hideBackButton={false}
      />

      <View style={styles.body}>
        {hasBackgroundBody ? (
          <BoxShadow color={'#0000000F'}>
            <View
              style={[
                bodyStyle,
                styles.backgroundBody,
                {
                  borderRadius: 15,
                },
              ]}>
              {children}
            </View>
          </BoxShadow>
        ) : (
          <View style={[bodyStyle]}>{children}</View>
        )}
      </View>
    </View>
  );
}
