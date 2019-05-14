(() => {
  const timerSpan = document.querySelector<HTMLSpanElement>("#timer");
  const targetTimestamp = new Date(2019, 4, 24, 9, 0, 0).getTime();
  const prependZero = (value: number) => value < 10 ? `0${value}` : `${value}`;
  const formatTimeDifference = (difference: number) => {
    const seconds = difference % 60;
    difference -= seconds;

    const minutes = Math.floor(difference / 60) % 60;
    difference -= minutes * 60;

    const hours = difference / 60 / 60;

    return `${hours}:${prependZero(minutes)}:${prependZero(seconds)}`;
  };

  setInterval(() => {
    let difference = Math.floor((targetTimestamp - Date.now()) / 1000);

    if (difference < 0) {
      difference = 0;
    }

    if (timerSpan) {
      timerSpan.innerText = formatTimeDifference(difference);
    }
  }, 1000);
})();
