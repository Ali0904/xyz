import React, { memo } from 'react';
import { Layout as AntLayout, Grid } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../../Styles/Header.css';

const { Content } = AntLayout;
const { useBreakpoint } = Grid;

const Layout = ({ children }) => {
  const screens = useBreakpoint();
  const location = useLocation();
  
  const getActiveNavItem = () => {
    const path = location.pathname;
    if (path === '/') return 'HOME';
    if (path.startsWith('/about')) return 'ABOUT';
    if (path.startsWith('/space-outreach')) return 'SPACE OUTREACH';
    if (path.startsWith('/space-education')) return 'SPACE EDUCATION';
    if (path.startsWith('/capacity-building')) return 'CAPACITY BUILDING';
    if (path.startsWith('/resources')) return 'RESOURCES';
    return 'HOME';
  };
  const activeNavItem = getActiveNavItem();

  return (
    <AntLayout className="app-root-layout">
      <Header activeNavItem={activeNavItem} />
      <Content className="app-content">
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default memo(Layout);