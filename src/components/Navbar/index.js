import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import styles from "./styles.module.scss";
import navList from "routes/navList";

import { ReactComponent as FichayaLogo } from "assets/fichaya-logo.svg";
import { ReactComponent as NotificationBell } from "assets/notification-bell.svg";
import { ReactComponent as UserAvatar } from "assets/avatar.svg";

export default function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.desktopNav}>
      <div className={styles.desktopNavContainer}>
        <Link to="/">
          <FichayaLogo aria-label="fichaya logo" />
        </Link>

        <ul>
          {navList.map(link => {
            if (link.path === "/") {
              return (
                <li key={`navlink-${link.path}`}>
                  <NavLink to={link.path} activeClassName={`${pathname === "/" && styles.active}`}>
                    {link.title}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={`navlink-${link.path}`}>
                <NavLink to={link.path} activeClassName={styles.active}>
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className={styles.desktopNavRight}>
          <span>
            <NotificationBell />
          </span>
          <span className={styles.avatar}>
            <UserAvatar />
          </span>
        </div>
      </div>
    </nav>
  );
}

export function MobileNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className={`${styles.mobileNav} ${open ? styles.open : ""}`}>
      <div className={styles.mobileNavContainer}>
        <Link to="/">
          <FichayaLogo aria-label="fichaya logo" />
        </Link>

        {open ? (
          <ul>
            {navList.map(link => {
              if (link.path === "/") {
                return (
                  <li key={`navlink-${link.path}`} onClick={() => setOpen(false)}>
                    <NavLink
                      to={link.path}
                      activeClassName={`${pathname === "/" && styles.active}`}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                );
              }
              return (
                <li key={`navlink-${link.path}`} onClick={() => setOpen(false)}>
                  <NavLink to={link.path} activeClassName={styles.active}>
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        ) : null}

        <div className={styles.mobileNavRight}>
          {open ? (
            <IoMdClose color="#fff" fontSize={30} onClick={() => setOpen(false)} />
          ) : (
            <HiMenuAlt2 color="#01037c" fontSize={30} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </nav>
  );
}
