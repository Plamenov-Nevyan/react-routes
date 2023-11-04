import { SideNavigation } from "../SideNavigation/SideNavigation";
import styles from "./header.module.css";
import { useState } from "react";

export function Header() {
  const [showSideNav, setShowSideNav] = useState(false);

  const onShowNav = () => setShowSideNav(!showSideNav);

  return (
    <header className={styles["site-header"]}>
      {showSideNav && <SideNavigation />}
      <div className={styles["nav-visibility-btn"]} onClick={() => onShowNav()}>
        {showSideNav ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        )}
      </div>
    </header>
  );
}
