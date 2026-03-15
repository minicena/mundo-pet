const ownerName = document.getElementById("owner-name")
const petName = document.getElementById("pet-name") 


ownerName.addEventListener("blur", (e) => {
  let spanError = document.getElementById("text-error-owner")

  ownerName.value = ownerName.value.replace(/[^\p{L}\s]/gu, "")
 
  let value = e.target.value.trim()

  if (value.length < 3 || value.length > 15) {
    spanError.textContent = "Digite um nome com 3 e no máximo 15 caracteres"
    ownerName.classList.add("border-error")
  } else {
    spanError.textContent = ""
    ownerName.classList.remove("border-error")
  }
})


petName.addEventListener("blur", (e) => {
  let spanError = document.getElementById("text-error-pet")

  petName.value = petName.value.replace(/[^\p{L}\s]/gu, "")

  let value = e.target.value.trim()
  
  if (value.length < 3 || value.length > 15) {
    spanError.textContent = "Digite o nome do pet com 3 e no máximo 15 caracteres"
    petName.classList.add("border-error")
  } else {
    spanError.textContent = ""
    petName.classList.remove("border-error")
  }
})