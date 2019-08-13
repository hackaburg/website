import "./facebook-pixel";

const form = document.querySelector(".signup.form");
const successMessage = document.querySelector("#success") as HTMLDivElement;

if (form) {
  const emailInput = form.querySelector("#email") as HTMLInputElement;
  const passwordInput = form.querySelector("#password") as HTMLInputElement;
  const submitButton = form.querySelector("#submit") as HTMLButtonElement;
  const errorContainer = form.querySelector("#error") as HTMLDivElement;

  submitButton.addEventListener("click", async (event: MouseEvent) => {
    window.fbq("track", "CompleteRegistration");

    const headers = new Headers();

    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    try {
      if (!email) {
        throw new Error("No email provided");
      }

      if (!password) {
        throw new Error("No password provided");
      }

      const response = await fetch("https://hackaburg.de/apply/auth/register", {
        body: JSON.stringify({
          email,
          password,
        }),
        headers,
        method: "post",
      });

      if (response.status !== 200) {
        const data = await response.json();

        throw new Error(data.message);
      }

      form.remove();
      successMessage.classList.remove("hidden");
    } catch (error) {
      errorContainer.classList.remove("hidden");
      errorContainer.innerText = error.message;
    }

    event.preventDefault();
    event.stopPropagation();

    return false;
  });
}
