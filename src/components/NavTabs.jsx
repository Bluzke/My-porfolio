function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#About Me"
            onClick={() => handlePageChange('About Me')}
            // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Porfolio"
            onClick={() => handlePageChange('Porfolio')}
            // Check to see if the currentPage is `Porfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Porfolio' ? 'nav-link active' : 'nav-link'}
          >
            Porfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  