import "./Navbar.css";
import {
  GiftIcon,
  DocumentSearchIcon,
  GlobeIcon,
} from "@heroicons/react/outline";

function Navbar(prop: { show: boolean }) {
  return (
    <div>
      {prop.show ? (
        <div className="fade-in">
          <header>
            <div className="logo">
              <img className="logo__img" src="peach_logo.png" alt="Peach" />
              <p className="logo">PEACH</p>
            </div>
            <nav>
              <ul className="nav__links">
                <div>
                  <li>
                    <GiftIcon className="Gift" />
                    <a href="/">Invite</a>
                  </li>
                  <li>
                    <DocumentSearchIcon className="DocumentSearch" />
                    <a href="/">Docs</a>
                  </li>
                  <li>
                    <GlobeIcon className="Globe" />
                    <a href="/">About</a>
                  </li>
                </div>
              </ul>
            </nav>
            <a className="cta" href="/">
              <button>Login</button>
            </a>
          </header>
          <div className="containerempty"></div>
        </div>
      ) : (
        <div className="fade-out">
          <header>
            <div className="logo">
              <img className="logo__img" src="peach_logo.png" alt="Peach" />
              <p className="logo">PEACH</p>
            </div>
            <nav>
              <ul className="nav__links">
                <div>
                  <li>
                    <GiftIcon className="Gift" />
                    <a href="/">Invite</a>
                  </li>
                  <li>
                    <DocumentSearchIcon className="DocumentSearch" />
                    <a href="/">Docs</a>
                  </li>
                  <li>
                    <GlobeIcon className="Globe" />
                    <a href="/">About</a>
                  </li>
                </div>
              </ul>
            </nav>
            <a className="cta" href="/">
              <button>Login</button>
            </a>
          </header>
          <div className="containerempty"></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
