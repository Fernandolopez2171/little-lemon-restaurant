import { routes } from "./Routes";

export const NavDesktop = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    
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
    <ul className="navbar-nav d-flex flex-row mb-0">
      {routes.map((route, index) => (
        <li
          key={route.title}
          className={index < routes.length - 1 ? "me-3" : ""}
        >
          <a
            href={route.href}
            onClick={(e) => handleClick(e, route.href)}
            className="nav-link d-flex align-items-center text-dark px-3 py-2 rounded-pill"
            style={{ cursor: 'pointer' }}
          >
            <route.Icon className="me-2" />
            <span>{route.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
