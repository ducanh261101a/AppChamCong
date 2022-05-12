import React from 'react';
import {
    AddButton,
    GeneralLayout,
    // TabPanel,
    Wrapper
} from '../../Components';
import styles from './styles';
import {
    DANHSACHDANGKIVAORASCREEN_RIGHT_TITLE,
    DANHSACHDANGKIVAORASCREEN_TITLE
} from '../../Shared/text';
// import { useEmployeeRequest } from './services';

export default function DanhSachDangKiVaoRaScreen({ navigation }) {

    // const {
    //     goOutRequestWaitingForApproval,
    //     goOutRequestApproved,
    //     goOutRequestRejected
    // } = useEmployeeRequest()

    return (
        <Wrapper
            bodyStyle={styles.wrapper}
            containerStyle={styles.container}
        >
            <GeneralLayout
                headerLeftTitle={DANHSACHDANGKIVAORASCREEN_TITLE}
                headerRight={{
                    title: DANHSACHDANGKIVAORASCREEN_RIGHT_TITLE,
                    onPress: () => navigation.navigate('LichSuVaoRaScreen')
                }}
                bodyStyle={styles.body}
                hasBackgroundBody={true}
            >
                {/* <TabPanel
                    defaultIndex={1}
                    headerItems={[
                        {
                            index: 1,
                            label: 'Chưa duyệt',
                            quantity: goOutRequestWaitingForApproval?.length,
                            content: goOutRequestWaitingForApproval
                        },
                        {
                            index: 2,
                            label: 'Đã duyệt',
                            quantity: goOutRequestApproved?.length,
                            content: goOutRequestApproved
                        }, {
                            index: 3,
                            label: 'Từ chối duyệt',
                            quantity: goOutRequestRejected?.length,
                            content: goOutRequestRejected
                        }
                    ]}
                /> */}

                <AddButton
                    onPress={() => navigation.navigate('DangKiVaoRaScreen')}
                />
            </GeneralLayout>
        </Wrapper >
    );
}
