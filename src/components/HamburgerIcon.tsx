const HamburgerIcon = ({
  setShowOverlay,
}: {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed top-5 right-5 z-50 lg:hidden"
      onClick={() => setShowOverlay((prev) => !prev)}>
      <div className="menu-icon">
        <input className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
