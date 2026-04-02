import styles from "./page.module.css";

export default function Solutions() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h1 className={styles.title}>Our Solutions</h1>
          <p className={styles.subtitle}>
            Beautonnerre delivers complete digital solutions designed for modern media and mobile applications
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
              <h3 className={styles.cardTitle}>Scalable Infrastructure</h3>
              <p className={styles.cardDescription}>We combine intelligent design and scalable infrastructure to create engaging, reliable digital experiences.</p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <h3 className={styles.cardTitle}>Global Impact</h3>
              <p className={styles.cardDescription}>We transform creative ideas into functional, high-impact products that connect users globally.</p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
              </svg>
              <h3 className={styles.cardTitle}>Intelligent Growth</h3>
              <p className={styles.cardDescription}>Our solutions focus on intelligent growth strategies to ensure long-term platform success.</p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className={styles.cardTitle}>Advanced Engagement</h3>
              <p className={styles.cardDescription}>We integrate advanced engagement systems to help platforms better understand their communities.</p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
              </svg>
              <h3 className={styles.cardTitle}>AI & Analytics</h3>
              <p className={styles.cardDescription}>We leverage analytics and AI-assisted tools to serve and optimize user communities.</p>
            </div>

            <div className={styles.card}>
              <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className={styles.cardTitle}>Sustainable Environments</h3>
              <p className={styles.cardDescription}>Combining creativity with data-driven decisions creates environments for interaction, retention, and sustainable growth.</p>
            </div>
          </div>
        </main>
    </div>
  );
}
