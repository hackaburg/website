interface JumpOptions {
  duration?: number;
  offset?: number;
  callback?: () => void;
  easing?: (t: number, b: number, c: number, d: number) => number;
  a11y?: boolean;
}

declare function Jump(selector: string, options?: JumpOptions) : void;

(function () {
  const links = document.querySelectorAll("nav ul li a"),
        navbarToggle = document.querySelector("#navbar-toggle") as HTMLInputElement;

  for (let i = 0; i < links.length; i++) {
    const link = links.item(i) as HTMLLinkElement;

    link.onclick = (event: MouseEvent) => {
      const target = link.href
                         .replace(/[^#]*#(.*)/, "[name='$1']");

      Jump(target, {
        duration: 200
      });

      if (navbarToggle.checked) {
        navbarToggle.checked = false;
      }

      event.preventDefault();
      event.stopPropagation();

      return true;
    };
  }
})();
