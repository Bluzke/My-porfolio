// Here we are importing a CSS file as a dependency
import '../styles/header.css';
import NavTabs from './NavTabs';

function Header() {
  return (
    <header className="header ">
      <h1>Justin Silber</h1>
      <div>
        
      </div>
      <NavTabs />
    </header>
  );
}

export default Header;