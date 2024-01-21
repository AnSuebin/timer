import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MobileContainer from '@/components/container/MobileContainer';

export default function Home() {
  return <MobileContainer Header={<Header />} Footer={<Footer />}></MobileContainer>;
}
