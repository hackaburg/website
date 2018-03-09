(function () {
  const form = document.querySelector(".signup.form");
  const successMessage = document.querySelector("#success");

  if (form) {
    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const passwordInput = form.querySelector("#password") as HTMLInputElement;
    const submitButton = form.querySelector("#submit") as HTMLButtonElement;
    const errorContainer = form.querySelector("#error") as HTMLDivElement;

    submitButton.onclick = async (event: MouseEvent) => {
      const headers = new Headers();
      
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");

      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        const response = await fetch("https://hackaburg.de/apply/auth/register", {
          body: JSON.stringify({
            email,
            password,
          }),
          headers,
          method: "post",
        });

        form.remove();
        successMessage.classList.remove("hidden");
      } catch (error) {
        errorContainer.classList.remove("hidden");
        errorContainer.innerText = error.message;
      }

      event.preventDefault();
      event.stopPropagation();

      return false;
    };
  }
})();
