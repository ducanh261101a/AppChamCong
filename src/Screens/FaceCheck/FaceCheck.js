import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import {NetworkInfo} from 'react-native-network-info';
import {useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import {fontFamilies, fontSizes} from '../../Themes/font';
import textColors from '../../Themes/Colors/textColors';
import {setLoading} from '../../Store/Reducers/setLoadingSlice';
import {useDispatch} from 'react-redux';

export default function FaceCheck({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [{cameraRef, type}, {takePicture, toggleFacing}] = useCamera(null);
  const [avatarBase64, setAvatarBase64] = useState('');
  const [checkFailed, setCheckFailed] = useState(false);
  const [checkSuccessful, setCheckSuccessful] = useState(false);
  const [checkIpFailed, setCheckIpFailed] = useState(false);
  const [error, setError] = useState('');
  const fs = RNFetchBlob.fs;
  let imagePath = null;

  const avatarScr = useSelector(state => state.avatarSrc.value);
  const user = useSelector(state => state.user.value);

  useEffect(() => {
    toggleFacing();
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      console.log('ip', ipv4Address);
      getListIpAddress(ipv4Address);
    });

    convertFromUrlToBase64(avatarScr, 2);
    dispatch(setLoading(false));
  }, []);

  const checkIpAddress = async (ip, listIPAddress) => {
    let successfull = false;
    listIPAddress.forEach(element => {
      if (element.address == ip) {
        successfull = true;
      }
    });
    if (successfull != true) {
      setError('Vui lòng sử dụng Wifi công ty để thực hiện điểm danh!');
      setCheckIpFailed(true);
    } else {
      console.log('check ip thanh cong');
    }
  };

  const getListIpAddress = async ipv4Address => {
    dispatch(setLoading(true));
    try {
      let response = await fetch(
        'https://backend-timekeeping.herokuapp.com/api/wifi/listWifi',
      );
      if (response.status == '201' || response.status == '200') {
        let resJson = await response.json();
        console.log('list IP', resJson);
        checkIpAddress(ipv4Address, resJson.listWifi);
      }
      if (response.status == '500') {
        setError(
          'Đã có lỗi trong quá trình xác thực địa chỉ IP. Vui lòng thử lại!',
        );
        setCheckIpFailed(true);
      }
    } catch (error) {
      console.log('Loi khi lay list ip', error);
      setError(
        'Đã có lỗi trong quá trình xác thực địa chỉ IP. Vui lòng thử lại!',
      );
      setCheckIpFailed(true);
    }
    dispatch(setLoading(false));
  };

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log('data', data);
      path = data.uri;
      const filePath = data.uri;
      await convertFromUrlToBase64(filePath, 1);
      // await checkFace(base64ImagePicker);
    } catch (error) {
      console.log(error);
    }
  };

  const convertFromUrlToBase64 = async (url, index) => {
    dispatch(setLoading(true));
    console.log('start base64');
    if (index == 1) {
      RNFS.readFile(url.substring(7), 'base64') //substring(7) -> to remove the file://
        .then(res => {
          console.log('base64 okkk');
          console.log('avt', avatarBase64);
          checkFace(res, avatarBase64);
          return res;
        })
        .catch(error => console.log('loi roi', error));
    } else {
      RNFetchBlob.config({
        fileCache: true,
      })
        .fetch('GET', url)
        // the image is now dowloaded to device's storage
        .then(resp => {
          // the image path you can use it directly with Image component
          imagePath = resp.path();
          return resp.readFile('base64');
        })
        .then(base64Data => {
          // here's base64 encoded image
          setAvatarBase64(base64Data);
          console.log('avt', avatarBase64);
          // remove the file from storage
          return fs.unlink(imagePath);
        });
    }
    dispatch(setLoading(false));
  };

  const checkFace = async (imageBase64, avtBase64) => {
    dispatch(setLoading(true));
    console.log('img', avtBase64);
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
          image_cmt: avtBase64,
          image_live: imageBase64,
        }),
      },
    );

    console.log('res', response);

    if (response.status == '200') {
      let resJson = await response.json();
      console.log('ketqua check', resJson);
      if (resJson.verify_result && resJson.verify_result != 0) {
        hanldeAttendance();
      }
    } else {
      console.log('loiii', response);
      setCheckFailed(true);
    }
    dispatch(setLoading(false));
  };

  const hanldeAttendance = async () => {
    try {
      const response = await fetch(
        'http://backend-timekeeping.herokuapp.com/api/timeKeeping/chamcong',
        {
          method: 'POST',
          headers: {
            token: user.token,
          },
        },
      );
      console.log(response.status, user.token);

      if (response.status == '200' || response.status == '201') {
        setCheckSuccessful(true);
      } else {
        setCheckFailed(true);
      }
    } catch (error) {
      console.log('loi khi diem danh', error);
    }
  };

  const hanldeGoBack = () => {
    navigation.goBack();
  };

  const modalcheckFailed = () => {
    return (
      <>
        {checkFailed ? (
          <Modal
            isVisible={checkFailed}
            onBackButtonPress={() => {
              setCheckFailed(false);
            }}
            onBackdropPress={() => {
              setCheckFailed(false);
            }}
            backdropOpacity={0.4}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 320,
                  height: 190,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  backgroundColor: '#fff',
                  borderRadius: 0,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 10,
                  }}>
                  <Text style={{fontSize: 22}}>Thông báo</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    left: 8,
                    top: 10,
                  }}>
                  Đã có lỗi trong quá trình xác thực khuôn mặt. Vui lòng thử
                  lại!
                </Text>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    setCheckFailed(false);
                  }}>
                  <LinearGradient
                    style={styles.buttonLayout}
                    colors={['#F07F7E', '#F9A857']}
                    start={{x: 1, y: 1}}
                    end={{x: 0, y: 0}}>
                    <Text style={styles.buttonLabel}>Chụp lại</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ) : null}
      </>
    );
  };

  const modalCheckIPFailed = () => {
    return (
      <>
        {checkIpFailed ? (
          <Modal isVisible={checkIpFailed} backdropOpacity={0.4}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 320,
                  height: 190,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  backgroundColor: '#fff',
                  borderRadius: 0,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 10,
                  }}>
                  <Text style={{fontSize: 22}}>Thông báo</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    left: 8,
                    top: 10,
                  }}>
                  {error}
                </Text>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={hanldeGoBack}>
                  <LinearGradient
                    style={styles.buttonLayout}
                    colors={['#F07F7E', '#F9A857']}
                    start={{x: 1, y: 1}}
                    end={{x: 0, y: 0}}>
                    <Text style={styles.buttonLabel}>Quay lại</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ) : null}
      </>
    );
  };

  const modalCheckSuccessfull = () => {
    return (
      <Modal isVisible={checkSuccessful}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 320,
              height: 190,
              // justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: '#fff',
              borderRadius: 0,
            }}>
            <View
              style={{
                width: '100%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 22}}>Thông báo</Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                left: 8,
                top: 10,
              }}>
              Điểm danh thành công!
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={hanldeGoBack}>
              <LinearGradient
                style={styles.buttonLayout}
                colors={['#F07F7E', '#F9A857']}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Text style={styles.buttonLabel}>Đồng ý</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const renderCamera = () => {
    return (
      <View style={{flex: 1}}>
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
              <Ionicons name="camera-reverse-sharp" style={{fontSize: 40}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.capture} onPress={captureHandle}>
              <FontAwesome5 name="camera" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.capture, {paddingVertical: 15}]}
              onPress={hanldeGoBack}>
              <Text> Quay Lại </Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      {renderCamera()}
      {checkFailed ? modalcheckFailed() : null}
      {checkSuccessful ? modalCheckSuccessfull() : null}
      {checkIpFailed ? modalCheckIPFailed() : null}
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
  buttonContainer: {
    position: 'absolute',
    bottom: 23,
    right: 26,
    left: 26,
    height: 34.7,
    borderRadius: 8,
  },
  buttonLayout: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontFamily: fontFamilies.primaryBold,
    color: textColors.white,
    fontSize: fontSizes.lg,
    fontWeight: '700',
  },
});
