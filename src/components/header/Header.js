import "./Header.css";
import Logo from "../../assets/Logo.svg";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="navbar bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4 py-3">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <button 
            onClick={scrollToTop}
            className="navbar-brand border-0 bg-transparent p-0"
            style={{ cursor: 'pointer' }}
          >
            <img
              className="logo"
              src={Logo}
              alt="Little Lemon logo"
              style={{ height: "45px" }}
            />
          </button>
          <nav>
            <div className="d-lg-none">
              <NavMobile />
            </div>
            <div className="d-none d-lg-flex">
              <NavDesktop />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
