import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="projects"
          end
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          end
        >
          Contact
        </NavLink>
      </li>
    </ul>
    </nav>
  );
}

export default Header;
