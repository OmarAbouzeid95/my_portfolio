import Link from "next/link";
import { navLinks } from "../config/navLinks";

const Navbar = () => {
  return (
    <div className="hidden lg:flex items-center gap-10 fixed top-10 right-20 z-10">
      {navLinks.map(({ name, href }, index) => (
        <Link href={href} key={index} className="text-lg text-white">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
