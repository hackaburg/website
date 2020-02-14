import * as Jump from "jump.js";

const links = document.querySelectorAll("nav ul li a");
const navbarToggle = document.querySelector("#navbar-toggle") as HTMLInputElement;

for (let i = 0; i < links.length; i++) {
  const link = links.item(i) as HTMLLinkElement;

  link.addEventListener("click", (event: MouseEvent) => {
    const target = link.href
      .replace(/[^#]*#(.*)/, "[name='$1']");

    Jump(target, {
      duration: 200,
    });

    if (navbarToggle.checked) {
      navbarToggle.checked = false;
    }

    event.preventDefault();
    event.stopPropagation();

    return true;
  });
}