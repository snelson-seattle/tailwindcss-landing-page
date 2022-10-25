import {useRef} from "react";

const Header = () => {
  const menuRef = useRef();

  const toggleMenu = () => {
    menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("flex");
  }

  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          <button className="cursor-pointer text-3xl md:hidden" onClick={toggleMenu}>&#9776;</button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      <section ref={menuRef} className="absolute top-0 w-full flex-col justify-center origin-top animate-open-menu bg-black text-5xl hidden" onClick={toggleMenu}>
        <div className="flex w-full justify-end px-8">
          <button className="flex items-center justify-center text-8xl" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full py-6 text-center hover:opacity-70">
            Home
          </a>
          <a href="#rockets" className="w-full py-6 text-center hover:opacity-70">
            Our Rockets
          </a>
          <a href="#testimonials" className="w-full py-6 text-center hover:opacity-70">
            Testimonials
          </a>
          <a href="#contact" className="w-full py-6 text-center hover:opacity-70">
            Contact Us
          </a>
          <a href="#footer" className="w-full py-6 text-center hover:opacity-70">
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};
export default Header;
