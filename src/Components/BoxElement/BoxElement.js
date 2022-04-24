import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {BoxShadow} from '..';
import {background} from '../../Themes/color';

const width = Dimensions.get('window').width;

export default function BoxElement({
  children,
  hasBackground,
  hasHeader,
  headerContent,
  marginHorizontal,
  marginTop,
  marginBottom,
  contentStyles,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: marginTop ? marginTop : 0,
          marginBottom: marginBottom ? marginBottom : 0,
        },
      ]}>
      <View
        style={{
          width: marginHorizontal ? width - marginHorizontal * 2 : width,
        }}>
        {hasHeader && (
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>
                {headerContent && headerContent.title}
              </Text>
            </View>
            <View>{headerContent && headerContent.right}</View>
          </View>
        )}
        {hasBackground ? (
          <BoxShadow distance={5} color="#0000000F">
            <View style={[styles.background]}>
              <View style={contentStyles}>{children}</View>
            </View>
          </BoxShadow>
        ) : (
          <View>{children}</View>
        )}
      </View>
    </View>
  );
}
