import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay, loadSchedules} from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("new-date");
const ownerName = document.getElementById("owner-name");
const petName = document.getElementById("pet-name");
const numberPhone = document.getElementById("phone");
const descriptionService = document.getElementById("description-service");
const time = document.getElementById("timeInput");
const showForm = document.querySelector(".form-scheduling");
const container = document.querySelector(".container");
const checkDate = document.getElementById("check-date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

checkDate.value = inputToday;

selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = ownerName.value.trim();

    if (!name) {
      return alert("Informe o nome do Tutor!");
    }

    const pet = petName.value.trim();

    if (!pet) {
      return alert("Informe o nome do pet!");
    }

    const phone = numberPhone.value;

    if (!phone) {
      return alert("Informe o número de telefone!");
    }

    const service = descriptionService.value.trim();

    if (!service) {
      return alert("Informe a descrição do serviço!");
    }

    const [hourSelected] = time.value.split(":");

    if (!hourSelected) {
      return alert("Informe a hora do agendamento!");
    }

    const when = dayjs(selectedDate.value).add(hourSelected, "hour");

    
 

    await scheduleNew({
      name,
      pet,
      phone,
      service,
      when,
    });

    await schedulesDay();
    await loadSchedules()
    ownerName.value = "";
    petName.value = "";
    numberPhone.value = "";
    descriptionService.value = "";
    showForm.classList.remove("visivel");
    container.classList.remove("is-blurred");
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
