import TimeSpent from './timespent';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import Form from './form';
import { BsYoutube } from 'react-icons/bs';

function WrapNavbar() {
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
          <Navbar.Collapse>
            <TimeSpent />
          </Navbar.Collapse>
        </div>
        <DarkThemeToggle />
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <Form />
      </div>
    </Navbar>
  );
}

export default WrapNavbar;
