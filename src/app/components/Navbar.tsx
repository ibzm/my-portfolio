"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-lg font-bold">Isaac&apos;s Portfolio</h1>
      <ul className="flex space-x-4">
      <li><Link href="/">Homepage</Link></li>
        <li><Link href="/my-portfolio/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
