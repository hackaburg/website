type DataLayerElement = any;

interface Window {
  dataLayer: DataLayerElement[];
}

(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag(...args: DataLayerElement[]) {
    window.dataLayer
          .push(args);
  }

  gtag("js", new Date());
  gtag("config", "UA-90366502-2");
})();
