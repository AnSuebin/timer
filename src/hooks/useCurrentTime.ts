import moment from 'moment';
import React from 'react';

const useCurrentTime = () => {
  const getCurrentDateTime = () => {
    const now = moment();
    const weeks = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const month = [
      '',
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];

    return {
      year: now.format('YYYY'),
      month: month[+now.format('M')],
      day: now.format('DD'),
      hour: now.format('HH'),
      minute: now.format('mm'),
      second: now.format('ss'),
      ampm: now.format('A'),
      dayOfWeek: weeks[now.day()],
    };
  };

  const [current, setCurrent] = React.useState(() => getCurrentDateTime());

  const updateDateTime = () => {
    setCurrent(getCurrentDateTime());
  };

  React.useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return current;
};

export default useCurrentTime;
