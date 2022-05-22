// import mushroom, { Employee_request, ISODateValue, Time_keeping_raw_current } from "pmcc-api"
// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import timeKeepingRawCurrentApi from "../../Api/timeKeepingRawCurrentApi"
// import { getFirstAndLastDayOfWeek, getStringOfADay, groupByTime } from "../../Shared/utils"
// import { RootState } from "../../Store/configureStore"
// import { setLoading } from "../../Store/Reducers/setLoadingSlice"

export const useTimeKeepingCurrent = () => {
    // const dispatch = useDispatch()
    // const [timeKeepingHistory, setTimeKeepingHistory] = useState()
    // const currentEmployee = useSelector((state) => state.currentEmployee.value)

    // let timeKeepingRawCurrentRes

    // const getTimeKeepingHistory = async () => {
    //     dispatch(setLoading(true))
    //     try {
    //         timeKeepingRawCurrentRes = await timeKeepingRawCurrentApi.listAsyncReq({
    //             filters: [
    //                 `employee_no=${currentEmployee.employee_no}`,
    //                 // `time>=${getFirstAndLastDayOfWeek().periodOfAWeek.firstDayString}`,
    //                 // `time<${getFirstAndLastDayOfWeek().periodOfAWeek.nextFirstDayString}`,
    //             ],
    //             sort: "-time"
    //         });

    //         setTimeKeepingHistory(groupByTime(timeKeepingRawCurrentRes))

    //         dispatch(setLoading(false))
    //     }
    //     catch (e) {
    //         dispatch(setLoading(false))
    //         console.error("Có lỗi: %o", e);
    //     }
    // }

    // const getTimeKeepingHistoryFilter = async (from, to) => {
    //     dispatch(setLoading(true))
    //     try {
    //         if (from && to) {
    //             timeKeepingRawCurrentRes = await timeKeepingRawCurrentApi.listAsyncReq({
    //                 filters: [
    //                     `employee_no=${currentEmployee.employee_no}`,
    //                     `time>=${getStringOfADay(from).thisDayString}`,
    //                     `time<${getStringOfADay(to).theNextOfThisDayString}`,
    //                 ],
    //                 sort: "-time"
    //             });

    //             setTimeKeepingHistory(groupByTime(timeKeepingRawCurrentRes))
    //         }
    //         dispatch(setLoading(false))

    //     }
    //     catch (e) {
    //         dispatch(setLoading(false))
    //         console.error("Có lỗi: %o", e);
    //     }
    // }

    // useEffect(() => {
    //     getTimeKeepingHistory()
    // }, [])

    // return {
    //     timeKeepingHistory,
    //     getTimeKeepingHistory,
    //     getTimeKeepingHistoryFilter
    // }

}