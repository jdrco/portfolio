import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-2 pb-1 px-0 flex flex-col sm:flex-row sm:flex-end items-end border-b-[1px] border-black">
      <Link href="/">
        <a className="font-bold text-xl sm:text-xl mx-auto sm:mr-auto">
          Jared Drueco
        </a>
      </Link>
      <div className="block justify-center mx-auto">
        <Link href="/about">
          <a href="" className="pr-3 text-sm sm:text-md 2xl:text-lg">
            About
          </a>
        </Link>
        <Link href="/experience">
          <a href="" className=" text-sm sm:text-md 2xl:text-lg">
            Experience
          </a>
        </Link>
        <Link href="/projects">
          <a href="" className="pl-3 text-sm sm:text-md 2xl:text-lg">
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a href="" className="pl-3 text-sm sm:text-md 2xl:text-lg">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
