'use client';
import React from 'react';

import { useWindowSize } from '@/hooks/useWindowSize';

interface Props {
  MetaHead?: React.ReactElement;
  Header?: React.ReactElement;
  Footer?: React.ReactElement;
}

const MobileContainer: React.FC<React.PropsWithChildren<Props>> = ({
  MetaHead,
  Header,
  Footer,
  children,
}) => {
  const { isMobile } = useWindowSize();
  const mainTopPadding = isMobile ? 'pt-[50px]' : 'pt-[64px]';
  const mainBottomPadding = Footer && 'pb-[100px]';

  return (
    <div className={'min-h-screen w-screen bg-white'}>
      {MetaHead}
      <header className="fixed top-0 left-1/2 translate-x-[-50%] z-[999] w-mobileWidth max-mobile:w-full">
        {Header}
      </header>
      <main
        className={`${mainTopPadding} ${mainBottomPadding} mx-auto w-mobileWidth min-h-screen shadow-md max-mobile:w-full`}>
        {children}
      </main>
      <footer className="fixed bottom-0 left-1/2 translate-x-[-50%] w-mobileWidth max-mobile:w-full">
        {Footer}
      </footer>
    </div>
  );
};

export default MobileContainer;
