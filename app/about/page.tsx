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

          <div className={styles.cardsColumn}>
            <div className={styles.card}>
              <div className={styles.cardImageSection}>
                <Image
                  src="/innovative%20technology.avif"
                  alt="Innovative Technology"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextSection}>
                <h3 className={styles.cardTitle}>Innovative Technology</h3>
                <p className={styles.cardDescription}>
                  Beautonnerre is an innovative technological company leading the way with the creation of a new generation of media enterprises through the development of entertainment apps and social media platforms. We are combining the power of AI with creative strategies and designs to deliver impactful digital experiences that elevate brand engagement while driving growth.
                </p>
              </div>
            </div>

            <div className={styles.cardReversed}>
              <div className={styles.cardImageSection}>
                <Image
                  src="/exceptional%20experiences.jpg"
                  alt="Exceptional Experiences"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextSection}>
                <h3 className={styles.cardTitle}>Exceptional Experiences</h3>
                <p className={styles.cardDescription}>
                  With every project, Beautonnerre is creating media experiences that are exceptional, memorable, and secure. We're re-imagining presentation and interactions, going beyond traditional environments to reveal new and captivating landscapes to entertain the world!
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImageSection}>
                <Image
                  src="/collaborative%20innovation-2.jpeg"
                  alt="Collaborative Innovation"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextSection}>
                <h3 className={styles.cardTitle}>Collaborative Innovation</h3>
                <p className={styles.cardDescription}>
                  Our team is the perfect balance of experienced creators and fresh minds who build beyond expectations. This collaborative environment fuels innovation, enabling us to produce groundbreaking and impactful technology. The power of AI is here, merging with the best of human ingenuity.
                </p>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
