import React from 'react';
import { IoTimerSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <header className={`h-header max-mobile:h-mobileHeader flex justify-between items-center`}>
      <div className="text-lg font-extrabold flex items-center gap-1">
        <IoTimerSharp />
        Pomodoro
      </div>
      <RxHamburgerMenu />
    </header>
  );
};

export default Header;
