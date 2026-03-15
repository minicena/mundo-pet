import { apiConfig } from "./api-config.js";

export async function scheduleNew({ name, pet, service, when}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, pet, service, when}),
        })

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar, Tente novamente mais tarde.")
    }
}