import TimeSpent from './timespent';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import Form from './form';
import { BsYoutube } from 'react-icons/bs';
import useSearch from '@/hooks/useSearch';

function WrapNavbar() {
  const { data } = useSearch();
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
      <div className="w-full flex items-center justify-center py-4">
        {data.length > 0 ? <TimeSpent /> : <Form />}
      </div>
    </Navbar>
  );
}

export default WrapNavbar;
