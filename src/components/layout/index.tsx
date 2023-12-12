import * as React from 'react';

import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
