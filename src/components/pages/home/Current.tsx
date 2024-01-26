'use client';

import React from 'react';

import useCurrentTime from '@/hooks/useCurrentTime';

const Current = () => {
  const { year, month, day, dayOfWeek } = useCurrentTime();

  return (
    <section className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-zinc-700">
        <div className="font-semibold text-[50px]">{day}</div>
        <div>
          <h5 className="font-medium">{month}</h5>
          <p className="font-thin">{year}</p>
        </div>
      </div>
      <div className="font-medium text-zinc-700">{dayOfWeek}</div>
    </section>
  );
};

export default Current;
