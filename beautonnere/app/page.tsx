import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section 
        className={styles.heroSection}
        style={{
          backgroundImage: "url('/office .png')"
        }}
      >
        <div className={styles.overlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The Next Era of
          </h1>
          <h1 className={styles.heroSubtitle}>
            Digital Ecosystems
          </h1>
          <Link href="/contact" className={styles.getInTouchButton}>
            GET IN TOUCH
          </Link>
        </div>

        <div className={styles.cardsContainer}>
          <Link href="/about" className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/About.jpeg"
                alt="About Us"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardLabel}>
              <h3 className={styles.cardText}>About Us</h3>
            </div>
          </Link>

          <Link href="/solutions" className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/solutions.jpeg"
                alt="Solutions"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardLabel}>
              <h3 className={styles.cardText}>Solutions</h3>
            </div>
          </Link>

          <Link href="/security" className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/security.jpeg"
                alt="Security"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardLabel}>
              <h3 className={styles.cardText}>Security</h3>
            </div>
          </Link>
        </div>

        <div className={styles.tagline}>
          <p className={styles.taglineText}>
            Leading the future of social media interaction.
          </p>
        </div>
      </section>
    </main>
  );
}
