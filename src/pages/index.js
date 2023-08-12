import { Flowbite } from 'flowbite-react';
import WrapContent from '@/components/wrapContent';
import WrapFooter from '@/components/wrapFooter';
import WrapNavbar from '@/components/wrapNavbar';
import { SearchProvider } from '@/context/searchContext';
import { UserProvider } from '@/context/userContext';

function Home() {
  return (
    <Flowbite>
      <UserProvider>
        <SearchProvider>
          <WrapNavbar />
          <WrapContent />
          <WrapFooter />
        </SearchProvider>
      </UserProvider>
    </Flowbite>
  );
}

export default Home;
