import React, { ForwardedRef, forwardRef } from "react";

const HamburgerIcon = forwardRef<
  HTMLInputElement,
  { setShowOverlay: React.Dispatch<React.SetStateAction<boolean>> }
>(({ setShowOverlay }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div
      className="fixed top-5 right-5 z-50 lg:hidden"
      onClick={() => setShowOverlay((prev) => !prev)}>
      <div className="menu-icon">
        <input className="menu-icon__cheeckbox" type="checkbox" ref={ref} />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
});

HamburgerIcon.displayName = "HamburgerIcon";

export default HamburgerIcon;
