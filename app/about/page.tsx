import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h1 className={styles.title}>About Our Vision</h1>
          <p className={styles.subtitle}>
            Constructing the digital framework for tomorrow&apos;s enterprise
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <Image
                src="/Icon (1).png"
                alt="Collaborative Innovation"
                width={80}
                height={80}
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>Collaborative Innovation</h3>
              <p className={styles.cardDescription}>
                Our team blends experience with fresh perspectives to build beyond expectations and create what&apos;s next.
              </p>
            </div>

            <div className={styles.card}>
              <Image
                src="/Icon (2).png"
                alt="Exceptional Experiences"
                width={80}
                height={80}
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>Exceptional Experiences</h3>
              <p className={styles.cardDescription}>
                We craft exceptional, memorable, and secure experiences that engage and inspire across every interaction.
              </p>
            </div>

            <div className={styles.card}>
              <Image
                src="/Icon (3).png"
                alt="Innovative Technology"
                width={80}
                height={80}
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>Innovative Technology</h3>
              <p className={styles.cardDescription}>
                We leverage AI and cutting-edge technology to build scalable platforms for the next generation of media.
              </p>
            </div>
          </div>
        </main>
    </div>
  );
}
