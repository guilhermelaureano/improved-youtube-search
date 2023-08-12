import Link from 'next/link';

function Footer() {
  return (
    <div className="h-44 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-col items-center justify-center md:justify-between p-6 mx-auto gap-4">
        <Link
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          href="https://github.com/guilhermelaureano"
        >
          Desenvolvido por Guilherme Laureano
        </Link>

        <Link
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          href="https://github.com/guilhermelaureano/improved-youtube-search"
        >
          Repositório github
        </Link>

        {/* 
        ToDo: add after deploy
        <Link
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          href="https://github.com/guilhermelaureano/improved-youtube-search"
        >
          Página Vercel
        </Link> */}
      </div>
    </div>
  );
}

export default Footer;
