import { type FC } from 'react';
import styles from './WelcomeSection.module.less';

const WelcomeSection: FC = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Welcome to the Future of Web Development
        </h2>
        <p className={styles.description}>
          This project demonstrates modern React development practices with
          production-ready configuration, optimized build processes, and
          maintainable code architecture.
        </p>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <span className={styles.icon}>⚡</span>
            <h3>Fast Development</h3>
            <p>Hot reload, TypeScript support, and modern tooling</p>
          </div>
          <div className={styles.highlight}>
            <span className={styles.icon}>🛡️</span>
            <h3>Secure by Default</h3>
            <p>Input sanitization, security headers, and best practices</p>
          </div>
          <div className={styles.highlight}>
            <span className={styles.icon}>🎨</span>
            <h3>Styled with LESS</h3>
            <p>Modular CSS with variables, nesting, and autoprefixer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
