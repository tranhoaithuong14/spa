import { type FC } from 'react';
import { APP_NAME, APP_VERSION } from '@utils/constants';
import styles from './Footer.module.less';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role='contentinfo'>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} {APP_NAME}. All rights reserved.
        </p>
        <p
          className={styles.version}
          aria-label={`Application version ${APP_VERSION}`}
        >
          v{APP_VERSION}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
