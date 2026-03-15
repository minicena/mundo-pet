const textArea = document.getElementById("description-service")
const error = textArea.parentElement.querySelector(".text-error")

textArea.addEventListener("blur", (e) => {
  e.target.value = e.target.value.replace(/[^\p{L}\s]/gu, "")

  const value = e.target.value.trim()

  if (value.length < 3 || value.length > 15) {
    error.textContent = "Digite pelo menos 3 e no máximo 15 caracteres"
    textArea.classList.add("border-error")
  } else {
    error.textContent = ""
    textArea.classList.remove("border-error")
  }
});
