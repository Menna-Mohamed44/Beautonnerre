"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <Image
            src="/beautonnerre.png"
            alt="Beautonnerre"
            width={220}
            height={60}
          />
        </div>

        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></span>
        </button>
        
        <div className={`${styles.navRight} ${isMenuOpen ? styles.navRightOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink} onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/solutions" className={styles.navLink} onClick={closeMenu}>
            Solutions
          </Link>
          <Link href="/security" className={styles.navLink} onClick={closeMenu}>
            Security
          </Link>
          <Link href="/contact" className={styles.contactButton} onClick={closeMenu}>
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
