import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/Assests/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-wrap h-screen-0 ">
      <section className="relative mx-auto ">
      <nav className="flex justify-between bg-white text-black w-screen mb-0">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link href="/" className="text-3xl font-bold font-heading">
              <Image src={Logo} alt="Logo" width={150} height={50} />
            </Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link href="/" className="hover:text-black-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-black-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black-500">
                  Contact
                </Link>
              </li>
            </ul>
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center">
                    <ul className="flex flex-col items-center justify-center space-y-8">
                        <li>
                            <Link href="/" className="hover:text-black-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/category" className="hover:text-gray-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/category" className="hover:text-gray-200">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/collections" className="hover:text-gray-200">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-200">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            )}
            <div className="hidden xl:flex  space-x-5 items-center">
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
              <a className="hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <a className="xl:hidden flex mr-6 items-center" href="#" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
