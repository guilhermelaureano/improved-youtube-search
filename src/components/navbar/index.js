import Image from 'next/image';
import Form from './form';
import icon from '../../assets/images/youtube-svg.svg';
import TimeSpent from './timespent';

function Navbar() {
  return (
    <nav className="h-44 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between p-6 mx-auto">
        <div className=" w-48 flex items-center text-lg justify-center gap-4">
          <Image
            className="h-9 w-auto"
            src={icon}
            alt="Improved YouTube Search"
            width="4"
            height="4"
          />
          <p>YouTube Search</p>
        </div>
        <Form />
      </div>
      {/* <div className="max-w-screen-xl flex flex-col md:flex-row items-center md:space-evenly justify-center md:justify-around p-4 gap-2 "> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-around p-4 mx-auto">
        <TimeSpent />
      </div>
    </nav>
  );
}

export default Navbar;
