import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-600 to-violet-400 text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Gurman Gill</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-400">Home</a>
          <a href="/projects" className="mr-5 hover:text-gray-400">Projects</a>
          <a href="/about" className="mr-5 hover:text-gray-400">About</a>
          <a href="/contact" className="mr-5 hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
