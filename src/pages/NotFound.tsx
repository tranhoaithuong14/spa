import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import styles from './NotFound.module.less';

const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} aria-label='Error 404'>
            404
          </h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <div className={styles.actions}>
            <Link
              to={ROUTES.HOME}
              className={styles.homeLink}
              aria-label='Go back to homepage'
            >
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className={styles.backButton}
              aria-label='Go back to previous page'
            >
              Go Back
            </button>
          </div>

          <div className={styles.suggestions}>
            <h3>You might be looking for:</h3>
            <ul>
              <li>
                <Link to={ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT}>About</Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
