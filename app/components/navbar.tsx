// app/components/navbar.tsx
"use client"
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md z-50">
      <div className="flex items-center space-x-2">
        <FaHome className="text-2xl cursor-pointer" onClick={() => window.location.href = '/'} />
        <span className="text-xl font-bold">Amal</span>
      </div>
      <div className="flex space-x-6">
        <Link href="/projects">
          <span className="hover:text-gray-400 cursor-pointer">Projects</span>
        </Link>
        <Link href="/certificates">
          <span className="hover:text-gray-400 cursor-pointer">Certificates</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-gray-400 cursor-pointer">Contact</span>
        </Link>
        <Link href="/login">
          <span className="hover:text-gray-400 cursor-pointer">Login/Signup</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;