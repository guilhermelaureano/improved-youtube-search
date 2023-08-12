import Image from 'next/image';
import Form from './form';
import icon from '../../assets/images/youtube-svg.svg';
import TimeSpent from './timespent';

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          className="h-9 w-auto"
          src={icon}
          alt="Improved YouTube Search"
          width="4"
          height="4"
        />
        <Form />
      </div>
      <div className="max-w-screen-xl flex flex-col md:flex-row items-end space-evenly mx-auto p-4 gap-2 ">
        <TimeSpent />
      </div>
    </nav>
  );
}

export default Navbar;
