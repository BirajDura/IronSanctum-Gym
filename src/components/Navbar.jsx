function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-widest">
          IRON SANCTUM
        </h1>
        <ul className="hidden md:flex space-x-10 text-lg font-bold">
          {['Home', "Equipment", "Supplements", "Videos", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;