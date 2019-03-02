function nodeListToArray<T extends Node>(nodes: NodeListOf<T>) : T[] {
  return [].slice.call(nodes);
}

const raisedNavClassName = "raised";
const raisedNavThresholdPixelsFromTop = 40;

(function () {
  function scrollHandler(event?: UIEvent) {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop,
          nav = nodeListToArray(document.querySelectorAll("nav"))[0],
          navLinks = nodeListToArray(document.querySelectorAll("nav ul li a")),
          blockElements = nodeListToArray(document.querySelectorAll(".block")),
          blocks = blockElements.map((element, index) => {
                                  const rect = element.getBoundingClientRect();

                                  return {
                                    element,
                                    index,
                                    top: rect.top + window.scrollY - 40
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
  };

  window.onscroll = scrollHandler;
  scrollHandler();
})();
