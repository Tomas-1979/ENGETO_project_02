//
// Form - ošetření hesla
//

// získání elementů z HTML
const password = document.getElementById("password") as HTMLInputElement;
const confirmPassword = document.getElementById("confirm-password") as HTMLInputElement;

// validace hesla
function validatePasswords(): void {
  const pass: string = password.value;
  const confirm: string = confirmPassword.value;

//   podmínky - nastavení vstupů
  if (!pass && !confirm) {
    password.style.borderColor = "";
    confirmPassword.style.borderColor = "";
    return;
  }

// podmínky - pokud jsou vstupy stejné nebo rozdílné
  if (pass === confirm && pass.length > 0) {
    password.style.borderColor = "green";
    confirmPassword.style.borderColor = "green";
  } else {
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
  }
}

// přidání události - naslouchání vstupů
password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);
