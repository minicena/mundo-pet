document.addEventListener("DOMContentLoaded", () => {
  const phone = document.getElementById("phone");
  const spanError = document.getElementById("text-error-phone");

  phone.addEventListener("input", () => {
    let value = phone.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)/, "($1");
    }
    phone.value = value;
  });

  phone.addEventListener("blur", () => {
    const numbers = phone.value.replace(/\D/g, "");
    const isValid = /^\d{10,11}$/.test(numbers);

    if (!isValid) {
      spanError.textContent = "Digite o número de telefone corretamente";
      phone.classList.add("border-error");
    } else {
      spanError.textContent = "";
      phone.classList.remove("border-error");
    }
  });
});
