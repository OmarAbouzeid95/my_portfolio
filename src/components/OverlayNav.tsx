import Link from "next/link";
import { navLinks } from "../config/navLinks";
import { ForwardedRef, forwardRef, useCallback } from "react";

const OverlayNav = forwardRef<
  HTMLInputElement,
  { setShowOverlay: React.Dispatch<React.SetStateAction<boolean>> }
>(({ setShowOverlay }, ref: ForwardedRef<HTMLInputElement>) => {
  const handleClick = useCallback(() => {
    if (ref && typeof ref === "object" && ref.current) {
      ref.current.click();
    }
  }, [ref]);

  return (
    <div className="p-20">
      {navLinks.map(({ name, href }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className="w-fit text-4xl font-semibold mb-16 block text-white hover:text-lightWhite transition-all duration-500"
            onClick={handleClick}>
            {name}
          </Link>
        );
      })}
    </div>
  );
});

OverlayNav.displayName = "OverlayNav";

export default OverlayNav;
