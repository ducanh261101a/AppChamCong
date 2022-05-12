import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'native-base';
import RNFS from 'react-native-fs';

export default function FaceCheck({navigation, route}) {
  const [{cameraRef, type}, {takePicture, toggleFacing}] = useCamera(null);
  const [step, setStep] = useState(1);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');

  const captureHandle = async () => {
    try {
      console.log('step', step);
      const data = await takePicture();
      console.log('data', data);
      const filePath = data.uri;
      RNFS.readFile(filePath.substring(7), 'base64') //substring(7) -> to remove the file://
        .then(res => {
          console.log('base64 okkk');
          if (step == 1) {
            console.log('co vao day');
            setImage1(res);
            setStep(2);
          }
          if (step == 2) {
            setImage2(res);
            checkFace();
            setStep(1);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const checkFace = async () => {
    console.log('abcd');
    let response = await fetch(
      'http://api.cloudekyc.com/v3.1/face/verification',
      {
        method: 'POST',
        headers: {
          user: 'vss',
          key: 'ASs4a2QU6ALZu5EzHm2nv7FXzTLvVUfm',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_cmt: image1,
          image_live: image2,
        }),
      },
    );
    if (response.status == '200') {
      let resJson = await response.json();
      console.log('ketqua check', resJson);
    } else {
      console.log('loiii');
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera ref={cameraRef} type={type} style={styles.preview}>
        <View
          style={{
            flex: 0,
            bottom: 0,
            width: Dimensions.get('window').width,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'transparent',
            position: 'absolute',
          }}>
          <TouchableOpacity
            style={styles.capture}
            onPress={() => {
              console.log('abcd', type);
              toggleFacing();
            }}>
            <Icon name="md-reverse-camera" style={{fontSize: 40}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.capture} onPress={captureHandle}>
            <FontAwesome5 name="camera" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.capture, {paddingVertical: 15}]}>
            <Text> Quay Lại </Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    margin: 20,
  },
});
