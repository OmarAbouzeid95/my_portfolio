import Link from "next/link";
import { navLinks } from "../config/navLinks";
import React from "react";

const OverlayNav = ({
  setShowOverlay,
}: {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="p-20">
      {navLinks.map(({ name, href }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className="text-4xl font-semibold mb-16 block text-white"
            onClick={() => setShowOverlay(false)}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default OverlayNav;
