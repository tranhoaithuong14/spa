import { type FC } from 'react';
import styles from './About.module.less';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About This Project</h1>

        <section className={styles.section}>
          <h2>Technology Stack</h2>
          <ul className={styles.techList}>
            <li>
              <strong>React 18</strong> - Modern React with concurrent features
            </li>
            <li>
              <strong>TypeScript</strong> - Type-safe JavaScript development
            </li>
            <li>
              <strong>Webpack 5</strong> - Module bundler with advanced
              optimizations
            </li>
            <li>
              <strong>LESS</strong> - CSS preprocessor with variables and
              nesting
            </li>
            <li>
              <strong>ESLint & Prettier</strong> - Code quality and formatting
            </li>
            <li>
              <strong>Husky & lint-staged</strong> - Pre-commit hooks
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Key Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>🎯 Production Ready</h3>
              <p>
                Optimized build process with code splitting, tree shaking, and
                minification
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>🔒 Security First</h3>
              <p>Input sanitization, secure headers, and XSS protection</p>
            </div>
            <div className={styles.featureCard}>
              <h3>♿ Accessibility</h3>
              <p>WCAG compliant with proper ARIA labels and semantic HTML</p>
            </div>
            <div className={styles.featureCard}>
              <h3>📱 Responsive Design</h3>
              <p>Mobile-first approach with flexible layouts</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Performance Optimizations</h2>
          <ul className={styles.optimizationList}>
            <li>Lazy loading with React.lazy and Suspense</li>
            <li>Dynamic imports for code splitting</li>
            <li>Asset optimization and caching</li>
            <li>Tree shaking for unused code elimination</li>
            <li>Bundle analysis and size optimization</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
