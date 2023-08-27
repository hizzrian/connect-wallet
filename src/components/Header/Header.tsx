import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">My Awesome Website</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          {/* Tambahkan tautan ke halaman lainnya di sini */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
