import React from 'react';

interface Props {
  Current: React.ReactElement;
  Timer: React.ReactElement;
}

const HomeTemplate: React.FC<Props> = ({ Current, Timer }) => {
  return (
    <main className=" p-6 flex flex-col gap-9">
      {Current}
      {Timer}
    </main>
  );
};

export default HomeTemplate;
