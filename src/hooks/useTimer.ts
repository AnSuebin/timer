import React, { useEffect } from 'react';

interface Props {
  minute?: number;
  seconds?: number;
}

const useTimer = ({ minute, seconds }: Props) => {
  const [remainMinute, setRemainMinute] = React.useState(minute);
  const [remainSeconds, setRemainSeconds] = React.useState(seconds);

  const time = React.useRef<number>(300);
  const timerId = React.useRef<any>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setRemainMinute(parseInt(`${time.current / 60}`));
      setRemainSeconds(time?.current % 60);
      time.current -= 1;
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (time.current <= 0) {
      clearInterval(timerId.current);
    }
  }, [remainSeconds]);

  const handleStartTimer = () => {
    const minute = remainMinute || 0;
    const seconds = remainSeconds || 0;
    time.current = minute * 60 + seconds;
    timerId.current = setInterval(() => {
      setRemainMinute(parseInt(`${time.current / 60}`));
      setRemainSeconds(time?.current % 60);
      time.current -= 1;
    }, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(timerId.current);
  };

  return { remainMinute, remainSeconds, handleStartTimer, handleStopTimer };
};

export default useTimer;
