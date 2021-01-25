import React from "react";
import DesktopNav, { MobileNav } from "components/Navbar";
import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
  const desktop = useMediaQuery({ minWidth: 1100 });

  return (
    <main>
      {desktop ? <DesktopNav /> : <MobileNav />}

      <section className={styles.container}>{children}</section>
    </main>
  );
}
