import { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES, APP_NAME } from '@utils/constants';
import styles from './Header.module.less';

const Header: FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header} role='banner'>
      <div className={styles.container}>
        <Link
          to={ROUTES.HOME}
          className={styles.logo}
          aria-label={`${APP_NAME} Home`}
        >
          <h1>{APP_NAME}</h1>
        </Link>

        <nav
          className={styles.nav}
          role='navigation'
          aria-label='Main navigation'
        >
          <ul className={styles.navList}>
            <li>
              <Link
                to={ROUTES.HOME}
                className={`${styles.navLink} ${isActive(ROUTES.HOME) ? styles.active : ''}`}
                aria-current={isActive(ROUTES.HOME) ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ABOUT}
                className={`${styles.navLink} ${isActive(ROUTES.ABOUT) ? styles.active : ''}`}
                aria-current={isActive(ROUTES.ABOUT) ? 'page' : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.CONTACT}
                className={`${styles.navLink} ${isActive(ROUTES.CONTACT) ? styles.active : ''}`}
                aria-current={isActive(ROUTES.CONTACT) ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
