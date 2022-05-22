/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import images from '../../Shared/images';
import {useResetPassword} from './services';
import {SvgXml, InputElement, Button} from '../../Components';

export default function RecoveryPasswordScreen({route}) {
  const {email} = route.params;
  const navigation = useNavigation();
  const {resetPassword, errors} = useResetPassword();
  const [values, setValues] = useState({
    otp: '',
    password: '',
    repassword: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={20}
        enabled
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView style={styles.layout}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <SvgXml xml={images.BackIcon} width={38} height={38} />
            </TouchableOpacity>
            <Text style={styles.title}>Khôi phục mật khẩu</Text>
            <Text style={styles.description}>
              Tạo mật khẩu mới mạnh mẽ mà bạn không sử dụng cho các trang web
              khác
            </Text>
            <View style={{marginBottom: 30}}>
              <InputElement
                key={0}
                name={'otp'}
                label={'Nhập mã khôi phục'}
                placeholder={'Nhập mã OTP'}
                important={true}
                type={'text'}
                icon={images.KeyIcon}
                error={errors.otp}
                onChangeText={value =>
                  setValues({
                    ...values,
                    otp: value,
                  })
                }
                location="RecoveryPasswordScreen"
                containerHeight={116}
                inputBoxHeight={56}
                borderRadius={15}
                iconSize={24}
              />
              <InputElement
                key={1}
                name={'password'}
                label={'Nhập mật khẩu'}
                placeholder={'Nhập mật khẩu mới của bạn'}
                important={true}
                type={'password'}
                icon={images.LockIcon}
                error={errors.password}
                onChangeText={value =>
                  setValues({
                    ...values,
                    password: value,
                  })
                }
                location="RecoveryPasswordScreen"
                containerHeight={116}
                inputBoxHeight={56}
                borderRadius={15}
                iconSize={24}
              />
              <InputElement
                key={2}
                name={'repassword'}
                label={'Nhập lại mật khẩu'}
                placeholder={'Nhập lại mật khẩu mới của bạn'}
                important={true}
                type={'password'}
                icon={images.LockIcon}
                error={errors.repassword}
                onChangeText={value =>
                  setValues({
                    ...values,
                    repassword: value,
                  })
                }
                location="RecoveryPasswordScreen"
                containerHeight={116}
                inputBoxHeight={56}
                borderRadius={15}
                iconSize={24}
              />
            </View>
            <Button
              onPress={() =>
                resetPassword(
                  email,
                  values.otp,
                  values.password,
                  values.repassword,
                )
              }
              type="primary"
              layoutStyles={styles.button}
              textStyle={styles.buttonLabel}
              textBold={true}>
              Lưu mật khẩu
            </Button>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Quay lại trang</Text>
              <TouchableOpacity
                onPress={() => navigation.replace('LoginScreen')}>
                <Text style={styles.footerTextBackLoginScreen}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
