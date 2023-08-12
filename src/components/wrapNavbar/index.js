import Image from 'next/image';
import icon from '../../assets/images/youtube-svg.svg';
import TimeSpent from './timespent';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import Form from './form';

function WrapNavbar() {
  return (
    <Navbar fluid rounded>
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-between pr-10">
          <Navbar.Brand>
            <Image
              className="mr-3 h-6 sm:h-9"
              src={icon}
              alt=""
              width="40"
              height="40"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
