import React, {useState} from 'react';
import {Wrapper, InputAndPicker, Button} from '../../Components';
import styles from './styles';
import {GeneralLayout} from '../../Components';
// import {useEmpoyeeRequest} from './services';
import {useDispatch} from 'react-redux';
import {resetClipboard} from '../../Store/Reducers/setClipboardSlice';
import {View} from 'react-native';
import {useEmpoyeeRequest} from './services';

export default function DangKiVaoRaScreen({navigation}) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    reason: '',
    date: '',
  });
  const [date, setDate] = useState(new Date());
  const {handleCreateForm} = useEmpoyeeRequest();

  return (
    <Wrapper>
      <GeneralLayout
        headerLeftTitle="Đăng ký nghỉ"
        bodyStyle={styles.body}
        hasBackgroundBody={true}>
        <InputAndPicker
          label="Ngày đăng ký nghỉ"
          labelPosition="inside"
          size="default"
          type="datetime"
          margin={{
            bottom: 17,
          }}
          onPress={event => setDate(event)}
          datePickerMode="date"
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
            onPress={() => handleCreateForm(date, values.reason)}
            layoutStyles={styles.button}
            textBold={true}>
            Đăng ký
          </Button>
        </View>
      </GeneralLayout>
    </Wrapper>
  );
}
