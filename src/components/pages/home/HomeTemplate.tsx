import React from 'react';

interface Props {
  Current: React.ReactElement;
}

const HomeTemplate: React.FC<Props> = ({ Current }) => {
  return <main className=" p-6">{Current}</main>;
};

export default HomeTemplate;
