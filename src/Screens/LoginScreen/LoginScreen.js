import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  BUTTON_LOGIN_LABEL,
  FORGOT_PASSWORD_LABEL,
  REMEMBER_PASSWORD_LABEL,
  WELCOME,
} from '../../Shared/text';
import {CheckBox, InputElement} from '../../Components';
import {useLogin} from './services';
import {useStorageAsync} from '../../Shared/hooks';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../Shared/images';
// import {NetworkInfo} from 'react-native-network-info';
const BackgroundImage = require('../../Assets/Images/BG.png');
const LogoImage = require('../../Assets/Images/Logo.png');

export default function LoginScreen({navigation}) {
  const {handleLogin, errors} = useLogin();
  const [account, setAccount] = useState();
  const [password, setPassword] = useState('');
  const [rememberAccount, setRememberAccount] = useState(false);
  // const {getItem} = useStorageAsync('remember_account');

  // const token = getItem();

  // useEffect(() => {
  //   console.log('token', token);

  //   if (token) {
  //     navigation.replace('HomeScreen');
  //   }
  //   (async () => {
  //     console.log(await getItem());
  //   })();
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image source={BackgroundImage} style={styles.background} />
        <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
        <View style={styles.layout}>
          <View style={styles.boxLogin}>
            <Text style={[styles.welcome, styles.textCommon]}>{WELCOME}!</Text>
            <View style={styles.form}>
              <InputElement
                icon={images.AccountIcon}
                onChangeText={value => setAccount(value)}
                defaultValue={account}
                placeholder="Tài khoản đăng nhập"
                containerHeight={39.26}
                inputBoxHeight={39.26}
                borderRadius={8}
                iconSize={17}
                backgroundColor="#F9FBFC"
              />
              <InputElement
                icon={images.PasswordIcon}
                onChangeText={value => setPassword(value)}
                defaultValue={account}
                placeholder="Mật khẩu"
                containerHeight={39.26}
                inputBoxHeight={39.26}
                borderRadius={8}
                iconSize={17}
                backgroundColor="#F9FBFC"
                type="password"
              />
            </View>

            <View style={styles.options}>
              <CheckBox
                title={REMEMBER_PASSWORD_LABEL}
                textStyle={styles.rememberPasswordLabel}
                size={16}
                checked={rememberAccount}
                onPress={() => {
                  setRememberAccount(!rememberAccount);
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RecoveryPasswordScreenStack')
                }>
                <Text style={styles.ForgetPassword}>
                  {FORGOT_PASSWORD_LABEL}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={async () => {
                handleLogin(account, password, rememberAccount);
              }}>
              <LinearGradient
                style={styles.buttonLayout}
                colors={['#F07F7E', '#F9A857']}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Text style={styles.buttonLabel}>ĐĂNG NHẬP</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
