(() => {
  const corruptedLinks = document.querySelectorAll("a.corrupted");

  for (let i = 0; i < corruptedLinks.length; i++) {
    (() => {
      const link = corruptedLinks.item(i) as HTMLLinkElement;
      let clickCounter = 0;
      let lastClick = 0;

      link.onclick = (event: MouseEvent) => {
        const now = Date.now();

        if (lastClick + 500 < now) {
          clickCounter = 0;
        }

        lastClick = now;
        clickCounter++;

        if (clickCounter === 2) {
          console.log("you're on the right track, but you're not clicking hard enough");
        }

        if (clickCounter === 5) {
          console.log("you're almost there, click harder");
        }

        if (clickCounter === 10) {
          console.log("we're halfway through, keep clicking");
        }

        if (clickCounter < 20) {
          event.preventDefault();
          event.stopPropagation();

          return false;
        }
      };
    })();
  }
})();
