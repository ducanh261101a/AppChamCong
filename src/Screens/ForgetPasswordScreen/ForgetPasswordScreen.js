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
import {SvgXml, InputElement, Button} from '../../Components';
import images from '../../Shared/images';
import styles from './styles';
import {useRecoveryPassword} from './services';
export default function ForgetPasswordScreen({navigation}) {
  const {getOtp, errors} = useRecoveryPassword();

  const [values, setValues] = useState({
    email: '',
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
            <Text style={styles.title}>Quên mật khẩu</Text>
            <Text style={styles.description}>
              Mã OTP sẽ được gửi qua mail của bạn
            </Text>
            <View>
              <InputElement
                key={0}
                label={'Nhập Email để lấy lại mật khẩu'}
                placeholder={'Nhập Email của bạn tại đây'}
                important={true}
                type={'text'}
                textAlign={'center'}
                error={errors.email}
                onChangeText={value =>
                  setValues({
                    ...values,
                    email: value,
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
                getOtp(
                  values.email,
                  navigation.navigate('RecoveryPasswordScreen', {
                    email: values.email,
                  }),
                )
              }
              type="primary"
              layoutStyles={styles.button}
              textStyle={styles.buttonLabel}
              textBold={true}>
              Gửi mã khôi phục
            </Button>
            {/* {footerComponent && <View>{footerComponent}</View>} */}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
