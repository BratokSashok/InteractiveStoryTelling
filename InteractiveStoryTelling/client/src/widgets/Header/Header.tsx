import { ThemeToggle } from '@shared/ui/ThemeToggle';
import { Link } from 'react-router-dom';
import "./index.css";

export const Header = () => {
  return (
    <header className="CLASS__NAME">
      <div className="CLASS__NAME">
        
        <Link to="/" className="CLASS__NAME">
          Intetactive Story Telling
        </Link>

        <nav className="CLASS__NAME">
          <Link to="/login" className="CLASS__NAME">
            Login
          </Link>
          <Link to="/registration" className="CLASS__NAME">
            Register
          </Link>
          <Link to="/stories" className="CLASS__NAME">
            Stories
          </Link>
          <Link to="/tagscloud" className="CLASS_NAME">
            TagsCloud
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};