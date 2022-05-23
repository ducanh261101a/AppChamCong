import React from 'react';
import {Button, GeneralLayout, TabPanel, Wrapper} from '../../Components';
import styles from './styles';
import {
  DANHSACHDANGKINGHISCREEN_RIGHT_TITLE,
  DANHSACHDANGKINGHISCREEN_TITLE,
} from '../../Shared/text';
import {useEmployeeRequest} from './services';

export default function DanhSachDangKiVaoRaScreen({navigation}) {
  const {requestWaitingForApproval, requestAccept, requestRefuse} =
    useEmployeeRequest();
  
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
              quantity: requestWaitingForApproval?.length || 0,
              content: requestWaitingForApproval,
            },
            {
              index: 2,
              label: 'Đã duyệt',
              quantity: requestAccept?.length || 0,
              content: requestAccept,
            },
            {
              index: 3,
              label: 'Từ chối duyệt',
              quantity: requestRefuse?.length || 0,
              content: requestRefuse,
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
