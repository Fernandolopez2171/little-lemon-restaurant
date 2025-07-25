import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./Routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; 
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div ref={ref} className="position-relative">
      <button
        className={`btn rounded-circle d-flex align-items-center justify-content-center p-0 ${
          isOpen ? "btn-dark" : "btn-light"
        }`}
        onClick={() => setOpen(!isOpen)}
      >
        <Hamburger
          toggled={isOpen}
          size={16}
          toggle={setOpen}
          color={isOpen ? "white" : "#495e57"}
        />
      </button>

      {isOpen && (
        <div
          className="position-absolute top-100 mt-2 bg-white rounded-3 shadow-lg"
          style={{ minWidth: "180px", zIndex: 1050, right: "0" }}
        >
          <div className="p-2">
            {routes.map((route) => (
              <a
                key={route.title}
                onClick={(e) => handleClick(e, route.href)}
                className="d-flex align-items-center text-decoration-none text-dark p-2 rounded-2 nav-mobile-item"
                href={route.href}
                style={{ cursor: 'pointer' }}
              >
                <route.Icon className="me-2" />
                <span>{route.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
