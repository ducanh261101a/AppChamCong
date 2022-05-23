import React, {useState} from 'react';
import {Wrapper, InputAndPicker, Button} from '../../Components';
import styles from './styles';
import {GeneralLayout} from '../../Components';
// import {useEmpoyeeRequest} from './services';
import {useDispatch} from 'react-redux';
import {resetClipboard} from '../../Store/Reducers/setClipboardSlice';
import {View} from 'react-native';

export default function DangKiVaoRaScreen({navigation}) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    reason: '',
    date: '',
  });

  return (
    <Wrapper>
      <GeneralLayout
        headerLeftTitle="Đăng ký nghỉ"
        bodyStyle={styles.body}
        hasBackgroundBody={true}>
        <InputAndPicker
          label="Ngày muốn nghỉ"
          labelPosition="inside"
          size="default"
          type="datetime"
          margin={{
            bottom: 17,
          }}
          onChangeText={value =>
            setValues({
              ...values,
              date: value,
            })
          }
          datePickerMode="datetime"
        />
        <InputAndPicker
          label="Lý do chi tiết"
          labelPosition="inside"
          size="default"
          type="textarea"
          margin={{
            bottom: 17,
          }}
          onChangeText={value =>
            setValues({
              ...values,
              reason: value,
            })
          }
        />
        <View style={styles.buttonsContainer}>
          <Button
            type="secondary"
            onPress={() => {
              navigation.goBack();
              dispatch(resetClipboard());
            }}
            layoutStyles={styles.button}>
            Hủy
          </Button>
          <Button
            type="primary"
            onPress={() => {}}
            layoutStyles={styles.button}
            textBold={true}>
            Đăng ký
          </Button>
        </View>
      </GeneralLayout>
    </Wrapper>
  );
}
