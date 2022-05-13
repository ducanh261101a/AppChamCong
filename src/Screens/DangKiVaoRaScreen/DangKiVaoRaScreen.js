import React, { useState } from 'react';
import { Wrapper, InputAndPicker, Button } from '../../Components';
import styles from './styles';
import { GeneralLayout } from '../../Components';
import { DANGKIVAORASCREEN_TITLE } from '../../Shared/text';
import { useEmpoyeeRequest } from './services';
import { useDispatch } from 'react-redux';
import { resetClipboard } from '../../Store/Reducers/setClipboardSlice';
import { View } from 'react-native';

export default function DangKiVaoRaScreen({
    navigation
}) {
    const dispatch = useDispatch()
    // const { requestReasonGoOut, listEmployeeHasApproveRequest, listEmployeeInCompany, employeeRequest } = useEmpoyeeRequest()
    const [title, setTitle] = useState('')
    const [reason, setReason] = useState('')
    const [content, setContent] = useState('')
    const [approvalUsers, setApprovalUsers] = useState({
        donvi: '',
        nhansu: ''
    })
    const [timeStart, setTimeStart] = useState()
    const [timeEnd, setTimeEnd] = useState()

    return (
        <Wrapper>
            <GeneralLayout
                headerLeftTitle={DANGKIVAORASCREEN_TITLE}
                bodyStyle={styles.body}
                hasBackgroundBody={true}
            >
                <InputAndPicker
                    label='Nơi đến'
                    labelPosition='inside'
                    size='default'
                    type='text'
                    margin={{
                        bottom: 17
                    }}
                    value={title}
                    onChangeText={(event) => setTitle(event)}
                />
                <InputAndPicker
                    name='lydodangki'
                    label='Lý do đăng kí'
                    labelPosition='inside'
                    size='default'
                    type='select'
                    margin={{
                        bottom: 17
                    }}
                    // options={requestReasonGoOut}
                />
                <InputAndPicker
                    label='Lý do chi tiết'
                    labelPosition='inside'
                    size='default'
                    type='textarea'
                    margin={{
                        bottom: 17
                    }}
                    onChangeText={(event) => setContent(event)}
                />
                <InputAndPicker
                    name='quanlydonvi'
                    label='Quản lý đơn vị'
                    labelPosition='inside'
                    size='default'
                    type='select'
                    margin={{
                        bottom: 17
                    }}
                    // options={listEmployeeInCompany}
                />
                <InputAndPicker
                    name='quanlynhansu'
                    label='Quản lý nhân sự'
                    labelPosition='inside'
                    size='default'
                    type='select'
                    margin={{
                        bottom: 17
                    }}
                    // options={listEmployeeHasApproveRequest}
                />
                <InputAndPicker
                    label='Bắt đầu'
                    labelPosition='inside'
                    size='default'
                    type='datetime'
                    margin={{
                        bottom: 17
                    }}
                    onPress={(event) => setTimeStart(event)}
                    datePickerMode="datetime"
                />
                <InputAndPicker
                    label='Kết thúc'
                    labelPosition='inside'
                    size='default'
                    type='datetime'
                    margin={{
                        bottom: 43
                    }}
                    datePickerMode="datetime"
                    onPress={(event) => setTimeEnd(event)}
                />

                <View style={styles.buttonsContainer}>
                    <Button
                        type="secondary"
                        onPress={() => {
                            navigation.goBack()
                            dispatch(resetClipboard())
                        }}
                        layoutStyles={styles.button}
                    >
                        Hủy
                    </Button>
                    <Button
                        type="primary"
                        onPress={() => employeeRequest(title, content, timeStart, timeEnd)}
                        layoutStyles={styles.button}
                        textBold={true}
                    >
                        Đăng ký
                    </Button>
                </View>
            </GeneralLayout>
        </Wrapper>
    );
}
