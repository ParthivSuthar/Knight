import { useState } from "react";
import { navLinks } from "./../data.js/data";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const menuBtn = <i className="fa-solid fa-bars text-white text-xl"></i>;
  const closeBtn = <i className="fa-solid fa-xmark text-white text-xl"></i>;

  function toggleMenu() {
    setMenuOpen(!menuopen);
  }

  return (
    <header className="py-4">
      <div className="flex justify-between items-center px-12">
        <h2 className="text-orange-500 font-bold text-xl md:text-2xl lg:text-3xl hover:text-white">
          <a href="#">KNIGHT</a>
        </h2>
        <nav className="hidden sm:block">
          <ul className="flex gap-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-slate-300 text-xl md:text-2xl lg:text-3xl hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>{menuopen ? closeBtn : menuBtn}</button>
        </div>
      </div>
      {menuopen && (
        <div className='bg-red-400 left-8 top-14 absolute p-2 text-left'>
        {navLinks.map((link, index) => (
            <li className='list-none mb-2 hover:scale-105 transform transition duration-300' key={index}><a className='text-white ' href={link.href}>{link.label}</a></li>
        ))}
    </div>
      )}
    </header>
  );
};

export default Navbar;
