import "./Navbar.css";
import {GiftIcon, DocumentSearchIcon, GlobeIcon} from '@heroicons/react/outline'

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img className="logo__img" src="peach_logo.png" alt="Peach" />
          <p className="logo">PEACH</p>
        </div>
        <nav>
          <ul className="nav__links">
            <li>
            <GiftIcon className="Gift"/>
              <a href="/">Invite</a>
              
            </li>
            <li>
            <DocumentSearchIcon className="DocumentSearch"/>
              <a href="/">Docs</a>
            </li>
            <li>
            <GlobeIcon className="Globe"/>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="/">
          <button>Login</button>
        </a>
      </header>
    </div>
  );
}

export default Navbar;
