import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
