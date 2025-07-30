import { type FC, type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.less';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main} role='main'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
