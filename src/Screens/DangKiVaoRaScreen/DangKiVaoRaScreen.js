import React, { useState } from "react";
import { Wrapper } from "../../Components";
import styles from "./styles";
import { GeneralLayout } from "../../Components";
import { DANGKIVAORASCREEN_TITLE } from '../../Shared/text';
import { useEmpoyeeRequest } from './services';


export default function DangKiVaoRaScreen({navigation}) {
    const dispatch = useDispatch()
    const { requestReasonGoOut, listEmployeeHasApproveRequest, listEmployeeInCompany, employeeRequest } = useEmpoyeeRequest();
    const [title, setTitle] = useState('');
    const [reason, setReason] = useState('');
    const [content, setContent] = useState('');
    const [approvalUsers, setApprovalUsers] = useState({ donvi: '', nhansu: '' });
    const [timeStart, setTimeStart] = useState();
    const [timeEnd, setTimeEnd] = useState();

    return (
        <Wrapper
            bodyStyle={styles.wrapper}
            containerStyle={styles.container}
        >
            <GeneralLayout
                headerLeftTitle={DANGKIVAORASCREEN_TITLE}
                bodyStyle={styles.body}
                hasBackgroundBody={true}
            >
                <Input
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
                <Input
                    name='lydodangki'
                    label='Lý do đăng kí'
                    labelPosition='inside'
                    size='default'
                    type='select'
                    margin={{
                        bottom: 17
                    }}
                    options={requestReasonGoOut}
                />
                <Input
                    label='Lý do chi tiết'
                    labelPosition='inside'
                    size='default'
                    type='textarea'
                    margin={{
                        bottom: 17
                    }}
                    onChangeText={(event) => setContent(event)}
                />
                <Input
                    name='quanlydonvi'
                    label='Quản lý đơn vị'
                    labelPosition='inside'
                    size='default'
                    type='select'
                    margin={{
                        bottom: 17
                    }}
                    options={listEmployeeInCompany}
                />
                <Input
                    name='quanlynhansu'
                    label='Quản lý nhân sự'
                    labelPosition='inside'
                    size='default'
                    type='select'
                    margin={{
                        bottom: 17
                    }}
                    options={listEmployeeHasApproveRequest}
                />
                <Input
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
                <Input
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
                <Buttons
                    size="medium"
                    buttons={[
                        {
                            body: {
                                title: "Hủy",
                                onPress: () => {
                                    navigation.goBack()
                                    dispatch(resetClipboard())
                                }
                            },
                            color: 'primary_2'
                        },
                        {
                            body: {
                                title: "Đăng kí",
                                bold: true,
                                onPress: () => employeeRequest(title, content, timeStart, timeEnd)
                            },
                            color: 'primary'
                        },
                    ]}
                />
            </GeneralLayout>
        </Wrapper>
    )
}