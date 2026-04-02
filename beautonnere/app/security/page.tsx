import styles from "./page.module.css";

export default function Security() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h1 className={styles.title}>Security</h1>
          <p className={styles.subtitle}>
            Security is foundational to everything Beautonnerre creates. In today's interconnected world,<br/> social media platforms and mobile applications require secure and essential protections. 
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
              </svg>
              <h3 className={styles.cardTitle}>Core Design Principle</h3>
              <p className={styles.cardDescription}>We embed optimal and secure principles from the architectural level up, ensuring long-term platform stability and trust.</p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
              </svg>
              <h3 className={styles.cardTitle}>Expert Talent</h3>
              <p className={styles.cardDescription}>Beautonnerre's team includes top talent who understand that effective security requires perpetual attention, advancement and expertise. </p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h3 className={styles.cardTitle}>Resilient Platforms</h3>
              <p className={styles.cardDescription}>Security guides engineering and design decisions, shaping feature deployment for long-term resilience as technology evolves.</p>
            </div>
          </div>
        </main>
    </div>
  );
}
