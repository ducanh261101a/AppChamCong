import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {SvgXml} from 'react-native-svg';
import {lockIcon, tickSquare, clockIcon, closeIcon} from '../../Shared/svgXml';
import Dot from '../Dot/Dot';
import styles from './styles';
import moment from 'moment';

export default function Modal({showing, closeFunction, data}) {
  const [typeDot, setTypeDot] = useState('');
  const [typeOfCong, setTypeOfCong] = useState('');

  useEffect(() => {
    console.log('data status', data.status);
    switch (data.status) {
      case 'congdu':
        setTypeDot('green');
        setTypeOfCong('Công đủ');
        break;

      case 'congthieu':
        setTypeDot('yellow');
        setTypeOfCong('Công thiếu');
        break;

      // case 'nghi':
      //   setTypeDot('red');
      //   break;

      default:
        setTypeDot('red');
        setTypeOfCong('Nghỉ');
        return;
    }
  }, []);

  return (
    <ReactNativeModal isVisible={showing}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.topContent}>
            <View style={styles.topLeftContent}>
              <Dot size={16} type={typeDot}></Dot>
              <Text style={styles.timeText}>
                {moment(data.lichsu.createdAt).format('YYYY-MM-DD')}
              </Text>
            </View>
            <View style={styles.topRightContent}>
              <Text style={styles.topText}>Công đã khóa</Text>
              <SvgXml xml={lockIcon} />
            </View>
          </View>
          <View style={styles.middleContent}>
            <Text style={styles.titleText}>Loại công:</Text>
            <View style={styles.workView}>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  height: 30,
                  alignItems: 'center',
                }}>
                <SvgXml xml={tickSquare} />
                <Text style={styles.contentText}>{typeOfCong}</Text>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  width: '50%',
                  flexDirection: 'row',
                  height: 30,
                  alignItems: 'center',
                }}>
                <SvgXml xml={clockIcon} />
                <Text style={styles.contentText}>
                  {moment(data.lichsu.createdAt).format('HH:mm')} -
                  {moment(data.lichsu.updatedAt).format('HH:mm')}
                </Text>
              </View>
            </View>

            <Text style={styles.titleText}>Khác:</Text>
            <View
              style={{
                width: '100%',
                height: 40,
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml xml={tickSquare} />
              <Text style={styles.contentText}>
                X - Công chế độ tính lương thời gian
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              closeFunction(false);
            }}>
            <SvgXml xml={closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
}
