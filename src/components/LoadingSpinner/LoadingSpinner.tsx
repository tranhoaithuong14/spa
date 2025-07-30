import { type FC } from 'react';
import styles from './LoadingSpinner.module.less';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'medium',
  text = 'Loading...',
}) => {
  return (
    <div className={styles.container} role='status' aria-live='polite'>
      <div className={`${styles.spinner} ${styles[size]}`} aria-hidden='true'>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <span className={styles.text} aria-label={text}>
        {text}
      </span>
    </div>
  );
};

export default LoadingSpinner;
