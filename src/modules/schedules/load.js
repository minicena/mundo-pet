import { hoursLoad } from "../form/hours-load";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js"

const selectedDate = document.getElementById("new-date")
const checkDate = document.getElementById("check-date")

export  async function schedulesDay() {
    const date = selectedDate.value

    const dailySchedules = await scheduleFetchByDay({date})

    hoursLoad({ date, dailySchedules })
    

}

export async function loadSchedules() {
    const date = checkDate.value

    const dailySchedules = await scheduleFetchByDay({date})

    schedulesShow({ dailySchedules})

}

