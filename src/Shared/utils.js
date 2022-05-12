// import { Employee, ISODateValue } from "pmcc-api";
import moment from "moment"
// import { EmployeeReq } from "../Api/listAsync";
import { Platform } from "react-native";
export const timeOutAsync = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getNameEmployee = async (employee_id) => {
    // const employeeRes: Employee[] = await EmployeeReq({
    //     filters: [
    //         `id=${employee_id}`
    //     ],
    //     fields: "administrative_info"
    // });

    return employeeRes[0].administrative_info?.name?.full_name
}

export const getDayString = (day) => {
    switch (day) {
        case 1: {
            return "Thứ Hai"
        }
        case 2: {
            return "Thứ Ba"
        }
        case 3: {
            return "Thứ Tư"
        }
        case 4: {
            return "Thứ Năm"
        }
        case 5: {
            return "Thứ Sáu"
        }
        case 6: {
            return "Thứ Bảy"
        }
        default: {
            return "Chủ Nhật"
        }
    }
}

export const getTimeString = (dayString) => {
    return dayString ? dayString.slice(11, 16) : '--:--'
}

export const convertDateToString = (dayString) => {
    const event = dayString ? new Date(dayString) : new Date

    const dateString = `${event.getDate()}/${event.getMonth()}/${event.getFullYear()}`
    const dateStringFull = `${getDayString(event.getDay())}, ${event.getDate()}/${event.getMonth()}/${event.getFullYear()}`
    return {
        dateString,
        dateStringFull
    }
}

export const convertTimeToString = (time) => {
    const event = time ? new Date(time) : new Date

    const timeString = `${event.getHours()}:${event.getMinutes()}, ${event.getDate()}/${event.getMonth()}/${event.getFullYear()}`
    return {
        timeString
    }
}

export const getFirstAndLastDayOfWeek = () => {
    const curr = new Date();
    curr.setHours(0, 0, 0, 0)
    const getDateOfFirstDay = curr.getDate() - curr.getDay() + 1;
    const getDateOfLastDay = getDateOfFirstDay + 6;
    const getDateOfNextFirstDay = getDateOfFirstDay + 7

    const firstDayString = new Date(curr.setDate(getDateOfFirstDay)).toISOString()
    const lastDayString = new Date(curr.setDate(getDateOfLastDay)).toISOString()
    const nextFirstDayString = new Date(curr.setDate(getDateOfNextFirstDay)).toISOString()


    return {
        periodOfAWeek: {
            firstDayString,
            nextFirstDayString
        },
        labelAWeek: {
            firstDay: convertDateToString(firstDayString),
            lastDay: convertDateToString(lastDayString)
        }
    }
}

export const getToday = () => {
    const curr = new Date();
    curr.setHours(0, 0, 0, 0)

    const todayString = new Date(curr).toISOString()
    const tomorrowString = new Date(curr.setDate(curr.getDate() + 1)).toISOString()

    return {
        todayString,
        tomorrowString
    }
}

export const getStringOfADay = (date) => {
    const curr = new Date(date);
    curr.setHours(0, 0, 0, 0)

    const thisDayString = new Date(curr).toISOString()
    const theNextOfThisDayString = new Date(curr.setDate(curr.getDate() + 1)).toISOString()

    return {
        thisDayString,
        theNextOfThisDayString
    }
}

export const groupByTime = (data) => {
    const groups = data.reduce((groups, log) => {
        const date = log.time?.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(log);
        return groups;
    }, {});


    return Object.keys(groups).map((date) => {
        return {
            date,
            times: groups[date]
        };
    });
}

export const getAllDayInWeek = (value) => {
    const curr = value ? new Date(value) : new Date()

    curr.setHours(0, 0, 0, 0)

    const thisMonth = moment(curr).month() + 1
    const lastMonth = moment(curr).subtract(1, 'months').month() + 1
    const nextMonth = moment(curr).add(1, 'months').month() + 1
    const arr = []

    const getDateOfFirstDay = curr.getDate() - curr.getDay();
    for (let i = 0; i < 7; i++) {
        const day = getDateOfFirstDay + i + 1;
        const date = new Date(curr.setDate(day)).getDate()
        arr.push({
            date: date,
            dateInfo: new Date(curr.setDate(day))
        })
    }

    return {
        allDay: arr,
        thisMonth,
        lastMonth: lastMonth,
        nextMonth: nextMonth
    }
}

export const getOS = () => {
    if (Platform.OS === "ios") {
        if (Platform.isPad) {
            return 'iPadOS'
        }
        return 'iOS'
    }
    return 'Android'
}