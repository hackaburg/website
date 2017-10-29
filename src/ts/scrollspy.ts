function nodeListToArray<T extends Node>(nodes: NodeListOf<T>) : T[] {
  return [].slice.call(nodes);
}

(function () {
  window.onscroll = (event) => {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop,
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

    let index = 0;
    
    if (blocks.length > 0) {
      index = blocks[0].index - 1;
    }
    
    if (index >= 0 && index < navLinks.length) {
      navLinks[index].className = "active";
    }
  };

  window.onscroll(null);
})();
