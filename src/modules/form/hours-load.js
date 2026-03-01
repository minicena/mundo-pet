import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"



export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
    
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    
    return {
        hour,
        available: isHourPast
    }
 })

const input = document.getElementById("timeInput")
const dropdown = document.getElementById("dropdown")
const arrowTime = document.getElementById("arrowTime")

function toggleDropdown() {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block"
}

input.addEventListener("click", toggleDropdown)
arrowTime.addEventListener("click", toggleDropdown)

document.addEventListener("click", (e) => {
  if (!e.target.closest(".time-picker")) {
    dropdown.style.display = "none"
  }
})

function getCurrentTime() {
  const now = new Date()
  return `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`
}

function renderHours() {
  dropdown.innerHTML = ""
  const currentTime = getCurrentTime()

  openingHours.forEach(hour => {
    const option = document.createElement("div")
    option.textContent = hour

    if (hour < currentTime) {
      option.classList.add("disabled")
    }

    option.addEventListener("click", () => {
      input.value = hour
      dropdown.style.display = "none"
    });

    dropdown.appendChild(option)
  })
}

renderHours()

}