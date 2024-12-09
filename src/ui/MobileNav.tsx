export default function MobileNav({ setIsOpen, open }) {
  return (
    <button
      onClick={() => setIsOpen(!open)}
      id="menu-btn"
      className={`${
        open ? "open" : ""
      } hamburger mt-3 md:hidden z-[999] focus:outline-none self-center`}
      type="button"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}
