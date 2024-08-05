import Link from "next/link";
import { navLinks } from "../config/navLinks";

const Navbar = () => {
  return (
    <div className="hidden lg:flex w-full items-center justify-end gap-6 fixed top-0 right-0 left-0 p-4 px-12 z-10 bg-dark bg-opacity-95">
      {navLinks.map(({ name, href }, index) => (
        <Link
          href={href}
          key={index}
          className="text-lg text-white hover:text-lightWhite transition-all duration-500">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
