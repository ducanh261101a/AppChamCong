import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {BoxShadow} from '../BoxShadow/BoxShadow';
import {SvgXml} from '../SvgXml/SvgXml';
import images from '../../Shared/images';

export default function TabNavigation({focus}) {
  return (
    <BoxShadow
      containerStyle={styles.container}
      color={'#0000001A'}
      distance={4}>
      <View style={styles.layout}>
        {focus === 'home' ? (
          <View style={[styles.homeFocus, styles.focusLayout]}>
            <SvgXml xml={images.NavHomeIconFocus} />
            <Text style={styles.labelCommon}>Trang chủ</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.homeIcon} onPress={() => {}}>
            <SvgXml xml={images.NavHomeIcon} />
          </TouchableOpacity>
        )}
        {focus === 'work' ? (
          <View style={[styles.workFocus, styles.focusLayout]}>
            <SvgXml xml={images.NavWorkIconFocus} />
            <Text style={styles.labelCommon}>Công việc</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.workIcon} onPress={() => {}}>
            <SvgXml xml={images.NavWorkIcon} />
          </TouchableOpacity>
        )}
        {focus === 'kpi' ? (
          <View style={[styles.kPIFocus, styles.focusLayout]}>
            <SvgXml xml={images.NavKpiIconFocus} />
            <Text style={styles.labelCommon}>KPI</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.kPIIcon} onPress={() => {}}>
            <SvgXml xml={images.NavKpiIcon} />
          </TouchableOpacity>
        )}
        {focus === 'salary' ? (
          <View style={[styles.salaryFocus, styles.focusLayout]}>
            <SvgXml xml={images.NavSalaryIconFocus} />
            <Text style={styles.labelCommon}>Bảng công</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.salaryIcon} onPress={() => {}}>
            <SvgXml xml={images.NavSalaryIcon} />
          </TouchableOpacity>
        )}
      </View>
    </BoxShadow>
  );
}
