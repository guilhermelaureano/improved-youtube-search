import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Navbar from '@/components/navbar';
import WrapContent from '@/components/wrapContent';
import WrapFooter from '@/components/wrapFooter';

function Home() {
  return (
    <Flowbite>
      <DarkThemeToggle />
      <div className="h-screen">
        <Navbar />
        <WrapContent />
        <WrapFooter />
      </div>
    </Flowbite>
  );
}

export default Home;
