import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 h-full ml-2">
          <Image
            src="/bear.png"
            // layout="responsive"
            className="mx-2 object-contain w-full h-full relative"
            width={25}
            height={25}
          />
          <Link href="/">
            <a className="text-black font-medium">Home</a>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/about">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/about'
                    ? ' text-red-800'
                    : ' text-gray-600')
                }
              >
                About
              </a>
            </Link>
            <Link href="/experience">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/experience'
                    ? ' text-red-800'
                    : ' text-gray-600')
                }
              >
                Experience
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/projects'
                    ? ' text-red-800'
                    : ' text-gray-600')
                }
              >
                Projects
              </a>
            </Link>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none transition duration-150 ease-in-out"
            aria-label="Menu"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-1/2 ml-auto `}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/about">
            <a className="text-right block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          </Link>
          <Link href="/experience">
            <a className="text-right block px-3 py-2 rounded-md text-base font-medium">
              Experience
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-right hover:text block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
