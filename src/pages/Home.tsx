import { type FC, lazy, Suspense } from 'react';
import styles from './Home.module.less';

const LazyWelcomeSection = lazy(() => import('../components/WelcomeSection'));

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to React SPA Production</h1>
        <p className={styles.subtitle}>
          A production-ready Single Page Application built with React,
          TypeScript, Webpack, and LESS
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🚀 Modern Stack</h3>
            <p>React 18, TypeScript, Webpack 5, LESS</p>
          </div>
          <div className={styles.feature}>
            <h3>🔧 Production Ready</h3>
            <p>Code splitting, tree shaking, optimization</p>
          </div>
          <div className={styles.feature}>
            <h3>📱 Responsive</h3>
            <p>Mobile-first design approach</p>
          </div>
          <div className={styles.feature}>
            <h3>♿ Accessible</h3>
            <p>ARIA labels, semantic HTML, keyboard navigation</p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyWelcomeSection />
      </Suspense>
    </div>
  );
};

export default Home;
