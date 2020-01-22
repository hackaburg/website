import { useCallback, useState } from "react";
import { useInterval } from "./use-interval";

const prependZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

const formatTimeDifference = (difference: number) => {
  const seconds = difference % 60;
  difference -= seconds;

  const minutes = Math.floor(difference / 60) % 60;
  difference -= minutes * 60;

  const hours = difference / 60 / 60;

  return `${hours}:${prependZero(minutes)}:${prependZero(seconds)}`;
};

export const useCountdownToDate = (date: Date): string => {
  const [text, setText] = useState("");

  const targetTimestamp = date.getTime();
  const intervalHandler = useCallback(() => {
    let difference = Math.floor((targetTimestamp - Date.now()) / 1000);

    if (difference < 0) {
      difference = 0;
    }

    setText(formatTimeDifference(difference));
  }, [targetTimestamp]);

  useInterval(intervalHandler, 1000);

  return text;
};
