const showSchedule = document.querySelector(".btn-new-scheduling")
const container = document.querySelector(".container")
const showForm = document.querySelector(".form-scheduling")
const closeForm = document.querySelector(".btn-close")


showSchedule.addEventListener("click", () =>  { 
    showForm.classList.add("visivel")
    container.classList.add("is-blurred")
  
})

closeForm.addEventListener("click", () => {
    showForm.classList.remove("visivel")
    container.classList.remove("is-blurred")
})
