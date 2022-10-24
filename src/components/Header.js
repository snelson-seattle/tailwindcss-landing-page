const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          <button className="text-3xl focus:outline-none sm:hidden">
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
            <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
            <a href="#contact" className="hover:opacity-90">Contact Us</a>
          </nav>
        </div>
      </section>
    </header>
  );
};
export default Header;
