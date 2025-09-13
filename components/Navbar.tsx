"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className={styles.navbar}>
      <div className={styles.logoPlaceholder}></div>
      <nav className={styles.navLinks}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Overview
        </Link>
        <Link
          href="/contacts"
          className={pathname === "/contacts" ? styles.active : ""}
        >
          Contacts
        </Link>
        <Link
          href="/favorites"
          className={pathname === "/favorites" ? styles.active : ""}
        >
          Favorites
        </Link>
        <button className={styles.newButton}>New</button>
      </nav>
    </header>
  );
}
