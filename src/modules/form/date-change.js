import { schedulesDay, loadSchedules } from "../schedules/load.js"
import { hoursLoad } from "./hours-load.js"

const selectedDate = document.getElementById("new-date")
const checkDate = document.getElementById("check-date")

selectedDate.onchange = () => schedulesDay()
checkDate.onchange = () => loadSchedules()

