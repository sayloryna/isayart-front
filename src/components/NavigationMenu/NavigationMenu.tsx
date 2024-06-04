import { NavLink } from "react-router-dom";
import "./NavigationMenu.scss";

const NavigationMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__links">
        <li>
          <NavLink className="navigation-menu__link" to="/artworks">
            Galería
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation-menu__link" to="/">
            Añadir
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
