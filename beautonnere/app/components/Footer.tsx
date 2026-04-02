import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <Image
              src="/beautonnerre.png"
              alt="Beautonnerre"
              width={180}
              height={50}
            />
          </div>
          
          <div className={styles.footerRight}>
            <Link href="/" className={styles.footerLink}>
              Home
            </Link>
            <Link href="/about" className={styles.footerLink}>
              About Us
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              Solutions
            </Link>
            <Link href="/security" className={styles.footerLink}>
              Security
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className={styles.copyright}>
          © Beautonnerre LLC 2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
