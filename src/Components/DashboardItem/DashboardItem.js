import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {SvgXml} from '..';
export default function DashboardItem({
  icon,
  header,
  children,
  width,
  headerBackgroundColor,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
        },
      ]}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor,
          },
        ]}>
        <SvgXml xml={icon} width={20} height={20} />
        <View style={styles.labelLayout}>
          <Text style={styles.labelText}>{header.line1}</Text>
          <Text style={styles.labelText}>{header.line2}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{children}</Text>
      </View>
    </View>
  );
}
