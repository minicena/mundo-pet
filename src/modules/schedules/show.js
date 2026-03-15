import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";


    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const div = document.createElement("div");
      const time = document.createElement("time");
      const pet = document.createElement("strong");
      const name = document.createElement("span");
      const service = document.createElement("p");
      const cancel = document.createElement("button");

      div.classList.add("appointment-info");

      item.setAttribute("data-id", schedule.id);

      cancel.textContent = "Remover Agendamento";
      cancel.classList.add("remove");

      item.append(div, service, cancel);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      div.appendChild(time);

      pet.textContent = schedule.pet;
      div.appendChild(pet);

      name.textContent = ` / ${schedule.name}`;
      name.classList.add("owner");
      div.appendChild(name);

      service.textContent = schedule.service;
      service.classList.add("appointment-type");

      const hour = dayjs(schedule.when).hour();

      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    })

 

  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}
