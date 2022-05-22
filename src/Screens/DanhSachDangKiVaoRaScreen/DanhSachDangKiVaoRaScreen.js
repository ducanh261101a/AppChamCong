import React from 'react';
import {Button, GeneralLayout, TabPanel, Wrapper} from '../../Components';
import styles from './styles';
import {
  DANHSACHDANGKINGHISCREEN_RIGHT_TITLE,
  DANHSACHDANGKINGHISCREEN_TITLE,
} from '../../Shared/text';
// import {useEmployeeRequest} from './services';

export default function DanhSachDangKiVaoRaScreen({navigation}) {
  // const {
  //     goOutRequestWaitingForApproval,
  //     goOutRequestApproved,
  //     goOutRequestRejected
  // } = useEmployeeRequest()

  return (
    <Wrapper>
      <GeneralLayout
        headerLeftTitle={DANHSACHDANGKINGHISCREEN_TITLE}
        headerRight={{
          type: 'string',
          title: DANHSACHDANGKINGHISCREEN_RIGHT_TITLE,
          onPress: () => navigation.navigate('LichSuChamCongScreen'),
        }}
        bodyStyle={styles.body}
        hasBackgroundBody={true}>
        <TabPanel
          defaultIndex={1}
          headerItems={[
            {
              index: 1,
              label: 'Chưa duyệt',
              quantity: 0,
              content: [],
            },
            {
              index: 2,
              label: 'Đã duyệt',
              quantity: 0,
              content: [],
            },
            {
              index: 3,
              label: 'Từ chối duyệt',
              quantity: 0,
              content: [],
            },
          ]}
        />

        <Button
          type="add"
          onPress={() => navigation.navigate('DangKiVaoRaScreen')}
        />
      </GeneralLayout>
    </Wrapper>
  );
}
