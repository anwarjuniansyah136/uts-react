import { House, TvMinimalPlay, CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 shadow-lg text-white">
      <div className="flex items-center gap-4">
        <img src="vite.svg" alt="Logo" className="cursor-pointer w-8 h-8" />
        <h1 className="cursor-pointer text-xl font-semibold">UTS React</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-600">
              <House size={20} /> <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/film" className="flex items-center gap-2 text-white hover:text-gray-600">
              <TvMinimalPlay size={20} /> <span>Film</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/contact" className="flex items-center gap-2 text-white hover:text-gray-600">
              <CircleUser size={20} /> <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
