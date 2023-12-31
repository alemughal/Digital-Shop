import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { CgProfile , CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleMenuItemClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-wrap h-screen-0">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-white text-black w-screen mb-0">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link href="/" className="text-3xl font-bold font-heading">
              <Image
                src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>
            <ul className="hidden md:inline-flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link
                  href="/"
                  className="hover:text-black-500"
                  onClick={handleMenuItemClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-black-500"
                  onClick={handleMenuItemClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-black-500"
                  onClick={handleMenuItemClick}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-black-500"
                  onClick={handleMenuItemClick}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black-500"
                  onClick={handleMenuItemClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {isOpen && (
              <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center">
                <ul className="flex flex-col items-center justify-center space-y-8">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-black-500"
                      onClick={handleMenuItemClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-gray-200"
                      onClick={handleMenuItemClick}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="hover:text-gray-200"
                      onClick={handleMenuItemClick}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-gray-200"
                      onClick={handleMenuItemClick}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-gray-200"
                      onClick={handleMenuItemClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                  onClick={closeMenu}
                >
                  <CgClose className="h-6 w-6" />
                </button>
              </div>
            )}
            <div className="hidden xl:flex  space-x-5 items-center">
              <Link href="/login">
                <CgProfile className="text-2xl" />
              </Link>
              <BsSearch className=" text-2xl" />
              <BsHandbag className=" text-2xl" />
            </div>
          </div>
          <a
            className="xl:hidden flex mr-6 items-center"
            href="#"
            onClick={toggle}
          >
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
