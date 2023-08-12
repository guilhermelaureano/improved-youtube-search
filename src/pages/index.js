import { Flowbite } from 'flowbite-react';
import WrapContent from '@/components/wrapContent';
import WrapFooter from '@/components/wrapFooter';
import WrapNavbar from '@/components/wrapNavbar';

function Home() {
  return (
    <Flowbite>
      <WrapNavbar />
      <WrapContent />
      <WrapFooter />
    </Flowbite>
  );
}

export default Home;
