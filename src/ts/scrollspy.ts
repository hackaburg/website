(() => {
  const raisedNavClassName = "raised";
  const raisedNavThresholdPixelsFromTop = 40;

  function scrollHandler(event?: UIEvent) {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const nav = document.querySelectorAll("nav").item(0);
    const navLinks = [...document.querySelectorAll("nav ul li a")];
    const blockElements = [...document.querySelectorAll(".block")];
    const blocks = blockElements.map((element, elementIndex) => {
      const rect = element.getBoundingClientRect();

      return {
        element,
        index: elementIndex,
        top: rect.top + window.scrollY - 40,
      };
    })
    .reverse()
    .filter((b) => b.top < currentPosition);

    for (const link of navLinks) {
      link.className = "";
    }

    let index = -1;

    if (blocks.length > 0) {
      index = blocks[0].index - 1;
    }

    if (index >= 0 && index < navLinks.length) {
      navLinks[index].className = "active";
    }

    if (window.scrollY >=  raisedNavThresholdPixelsFromTop && !nav.classList.contains(raisedNavClassName)) {
      nav.classList.add(raisedNavClassName);
    } else if (window.scrollY < raisedNavThresholdPixelsFromTop) {
      nav.classList.remove(raisedNavClassName);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  scrollHandler();
})();
