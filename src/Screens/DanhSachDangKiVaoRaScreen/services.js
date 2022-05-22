// import mushroom, { Employee_request } from "pmcc-api"
// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import employeeRequestApi from "../../Api/employeeRequestApi"
// import { RootState } from "../../Store/configureStore"
// import { setLoading } from "../../Store/Reducers/setLoadingSlice"

export const useEmployeeRequest = () => {
    // const dispatch = useDispatch()
    // const [goOutRequestWaitingForApproval, setGoOutRequestWaitingForApproval] = useState()
    // const [goOutRequestApproved, setGoOutRequestApproved] = useState()
    // const [goOutRequestRejected, setGoOutRequestRejected] = useState()

    // const currentEmployee = useSelector((state) => state.currentEmployee.value)

    // let employeeRequestRes

    // const getEmpoloyeeRequest = async () => {
    //     dispatch(setLoading(true))
    //     try {
    //         employeeRequestRes = await employeeRequestApi.listAsyncReq({
    //             fields: "type,status,content,employee_id",
    //             filters: [
    //                 "type=GO_OUT",
    //                 `employee_id=${currentEmployee.id}`
    //             ]
    //         });
    //         if (employeeRequestRes) {

    //             const waitingForApproval = employeeRequestRes.filter((item) => item.status === "WAITING_FOR_APPROVAL")
    //             const approved = employeeRequestRes.filter((item) => item.status === "APPROVED")
    //             const rejected = employeeRequestRes.filter((item) => item.status === "REJECTED")
    //             setGoOutRequestWaitingForApproval(waitingForApproval)
    //             setGoOutRequestApproved(approved)
    //             setGoOutRequestRejected(rejected)
    //         }

    //         dispatch(setLoading(false))
    //     }
    //     catch (e) {
    //         dispatch(setLoading(false))
    //         console.error("Có lỗi: %o", e);
    //     }
    // }

    // useEffect(() => {
    //     getEmpoloyeeRequest()
    // }, [])

    // return {
    //     goOutRequestWaitingForApproval,
    //     goOutRequestApproved,
    //     goOutRequestRejected
    // }

}