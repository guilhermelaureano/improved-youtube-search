import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { BsYoutube } from 'react-icons/bs';
import useSearch from '@/hooks/useSearch';
import Form from './form';

function WrapNavbar() {
  const { totalItems } = useSearch();
  return (
    <Navbar fluid rounded>
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-between pr-10">
          <Navbar.Brand>
            <BsYoutube size={40} />
            <span className="ml-4 text-xl font-semibold dark:text-white">
              Improved YouTube Search
            </span>
          </Navbar.Brand>
        </div>
        <DarkThemeToggle />
      </div>
      {!totalItems > 0 && (
        <div className="w-full flex items-center justify-center py-4">
          <Form />
        </div>
      )}
    </Navbar>
  );
}

export default WrapNavbar;
