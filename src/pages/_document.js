import { Flowbite } from 'flowbite-react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Flowbite>
          <div
            className="
            relative
            max-h-screen
            w-full
            overflow-auto
            bg-white
            text-gray-600
            antialiased
            dark:bg-gray-900
            dark:text-gray-400"
          >
            <Main />
            <NextScript />
          </div>
        </Flowbite>
      </body>
    </Html>
  );
}
