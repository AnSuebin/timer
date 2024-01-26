'use client';

import Current from '@/components/pages/home/Current';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HomeTemplate from '@/components/pages/home/HomeTemplate';
import MobileContainer from '@/components/container/MobileContainer';

export default function Home() {
  return (
    <MobileContainer Header={<Header />} Footer={<Footer />}>
      <HomeTemplate Current={<Current />} />
    </MobileContainer>
  );
}
