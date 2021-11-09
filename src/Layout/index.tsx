import React, { ReactChildren, ReactChild } from 'react';
import { MainLayout, Container } from './styles';

interface LayoutProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <Container>{children}</Container>
    </MainLayout>
  );
};

export default Layout;
