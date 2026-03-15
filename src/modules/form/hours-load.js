import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"


const input = document.getElementById("timeInput")
const dropdown = document.getElementById("dropdown")
const arrowTime = document.getElementById("arrowTime")


export function hoursLoad({ date, dailySchedules }) {
    dropdown.innerHTML = ""
    input.value = ""


    const unavailableHours = dailySchedules.map((schedule) => 
      dayjs(schedule.when).format("HH:mm")
  )


    const opening = openingHours.map((hour) => {
    
    const [scheduleHour] = hour.split(":")

    const isHourPast= dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
        hour,
        available
    }      
 })



function toggleDropdown() {
    dropdown.style.display = ""
    dropdown.style.display === "block" ? "none" : "block"
}

input.addEventListener("click", toggleDropdown)
arrowTime.addEventListener("click", toggleDropdown)

document.addEventListener("click", (e) => {
  if (!e.target.closest(".time-picker")) {
    dropdown.style.display = "none"
  }
})

opening.forEach(({hour, available}) => {
  const option = document.createElement("div")
  option.textContent = hour

  dropdown.appendChild(option)

  if (!available) {
    option.classList.add("disabled")
  }

    option.addEventListener("click", () => {
      input.value = hour
      dropdown.style.display = "none"
    }) 
})

}