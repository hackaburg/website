function nodeListToArray<T extends Node>(nodes: NodeListOf<T>) : T[] {
  return [].slice.call(nodes);
}

(function () {
  window.onscroll = (event) => {
    const currentPosition = document.body.scrollTop,
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
    
    let index = 0;

    if (blocks.length > 0) {
      index = blocks[0].index;
    }
    
    if (index < navLinks.length) {
      for (const link of navLinks) {
        link.className = "";
      }

      navLinks[index].className = "active";
    }
  };
})();
