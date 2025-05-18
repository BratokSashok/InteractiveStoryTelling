import { ThemeToggle } from '@shared/ui/ThemeToggle';
import { Link } from 'react-router-dom';
import "./index.css";

export const Header = () => {
  return (
    <header className="menu_container">
      <div className="menu_stuff">
        
        <Link to="/" className="menu_homepage">
          Interactive Story Telling
        </Link>

        <nav className="menu_list">
          <Link to="/login" className="menu_page">
            Login
          </Link>
          <Link to="/registration" className="menu_page">
            Register
          </Link>
          <Link to="/stories" className="menu_page">
            Stories
          </Link>
          <Link to="/tagscloud" className="menu_page">
            TagsCloud
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};