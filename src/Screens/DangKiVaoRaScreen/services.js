// import mushroom, { Employee, Employee_role, Request_reason } from 'pmcc-api'
import { useEffect, useState } from 'react';
// import _ from 'lodash'
import { useSelector } from 'react-redux';
// import { RootState } from '../../Store/configureStore';
// import { EmployeeReq, ListEmployeeHasApproveRequestReq, RequestReasonReq } from '../../Api/listAsync';
// import { EmployeeRequestCreateReq, EmployeeRequestGoOutCreateReq } from '../../Api/createAsync';

export const useEmpoyeeRequest = () => {
    // const clipboard = useSelector((state) => state.clipboard.value)
    // const user = useSelector((state) => state.user.value)
    // const [requestReasonGoOut, setRequestReasonGoOut] = useState<any>()
    // const [listEmployeeHasApproveRequest, setListEmployeeHasApproveRequest] = useState<any>()
    // const [listEmployeeInCompany, setListEmployeeInCompany] = useState<any>()

    // let requestReasonRes: Request_reason[]
    // let listEmployeeHasApproveRequestRes: any[]
    // let employeesRes: Employee[]

    // const getRequestReasonGoOut = async () => {
    //     try {
    //         requestReasonRes = await RequestReasonReq({
    //             fields: "type,name,id",
    //             filters: [
    //                 "type=GO_OUT",
    //                 "disabled=false"
    //             ]
    //         });

    //         const converted = requestReasonRes.map((item: Request_reason) => {
    //             return {
    //                 label: item.name,
    //                 value: item.id
    //             }
    //         })

    //         setRequestReasonGoOut(converted)
    //     }
    //     catch (e) {
    //         console.error("Có lỗi: %o", e);
    //     }
    // }

    // const getListEmployeeHasApproveRequest = async () => {
    //     try {
    //         listEmployeeHasApproveRequestRes = await ListEmployeeHasApproveRequestReq();

    //         const converted = listEmployeeHasApproveRequestRes.map((item: any) => {
    //             return {
    //                 label: item.e.administrative_info.name.full_name,
    //                 value: item.e.id
    //             }
    //         })

    //         setListEmployeeHasApproveRequest(_.uniqBy(converted, 'value'))

    //     }
    //     catch (e) {
    //         console.error("Có lỗi: %o", e);
    //     }
    // }

    // const getListEmployeeInCompany = async () => {
    //     try {
    //         employeesRes = await EmployeeReq({
    //             filters: [
    //                 "disabled=false"
    //             ]
    //         });

    //         const converted = employeesRes.map((item: Employee) => {
    //             return {
    //                 label: item.administrative_info?.name?.full_name,
    //                 value: item.id
    //             }
    //         })

    //         setListEmployeeInCompany(_.uniqBy(converted, 'value'))

    //     }
    //     catch (e) {
    //         console.error("Có lỗi: %o", e);
    //     }
    // }

    // const employeeRequest = async (
    //     title?: string,
    //     content?: string,
    //     timeStart?: Date,
    //     timeEnd?: Date
    // ) => {
    //     const reason = _.find(clipboard, { 'name': 'lydodangki' })
    //     const approvalUsers1 = _.find(clipboard, { 'name': 'quanlydonvi' })
    //     const approvalUsers2 = _.find(clipboard, { 'name': 'quanlynhansu' })
    //     const employee_request_object = {
    //         employee_id: user.id,
    //         status: 'WAITING_FOR_APPROVAL',
    //         type: 'GO_OUT',
    //         title: title,
    //         content: content,
    //         is_sequential: true,
    //         approval_level: 2,
    //         approval_users: [
    //             {
    //                 approval_user_id: approvalUsers1?.value
    //             },
    //             {
    //                 approval_user_id: approvalUsers2?.value
    //             }
    //         ]
    //     };
    //     try {
    //         const newId = await EmployeeRequestCreateReq(employee_request_object);
    //         if (newId) {
    //             const employee_request_go_out_object = {
    //                 id: newId,
    //                 request_reason_id: reason?.value,
    //                 from_date: new Date(timeStart || new Date()).toISOString(), // required - Từ thời điểm
    //                 to_date: new Date(timeEnd || new Date()).toISOString(),
    //             }
    //             const aa = await EmployeeRequestGoOutCreateReq(employee_request_go_out_object)
    //             console.log("Thêm mới thành công, new id: %o", aa);
    //         }
    //     } catch (error) {
    //         console.error("Có lỗi: %o", error);
    //     }
    // }

    // useEffect(() => {
    //     getRequestReasonGoOut()
    //     getListEmployeeHasApproveRequest()
    //     getListEmployeeInCompany()
    // }, [])

    // return {
    //     requestReasonGoOut,
    //     listEmployeeHasApproveRequest,
    //     listEmployeeInCompany,
    //     employeeRequest
    // }
}