// src/components/layouts/header.jsx
import React, { useEffect, memo } from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Logo from '../ui/logo';
import Button from '../ui/button';
import DrawerMenu from './drawer.jsx';
import { useLocation } from 'react-router-dom';
import '../../Styles/Header.css';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const mapPathToLabel = (pathname) => {
  if (pathname === '/' || pathname.startsWith('/home')) return 'HOME';
  if (pathname.startsWith('/about')) return 'ABOUT';
  if (pathname.startsWith('/space-outreach')) return 'SPACE OUTREACH';
  if (pathname.startsWith('/space-education')) return 'SPACE EDUCATION';
  if (pathname.startsWith('/capacity-building')) return 'CAPACITY BUILDING';
  if (pathname.startsWith('/resources')) return 'RESOURCES';
  return 'HOME';
};

const mapLabelToDrawerKey = (label) => {
  switch (label) {
    case 'HOME':
      return 'HOME';
    case 'ABOUT':
      return 'ABOUT';
    case 'SPACE OUTREACH':
      return 'SPACE_OUTREACH';
    case 'SPACE EDUCATION':
      return 'SPACE_EDUCATION';
    case 'CAPACITY BUILDING':
      return 'CAPACITY_BUILDING';
    case 'RESOURCES':
      return 'RESOURCES';
    default:
      return 'HOME';
  }
};

const Header = ({ activeNavItem }) => {
  const screens = useBreakpoint();
  const location = useLocation();
  const resolvedActive = activeNavItem || mapPathToLabel(location.pathname);
  const drawerActiveKey = mapLabelToDrawerKey(resolvedActive);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  const isMobile = !screens.lg;
  const isSmallMobile = !screens.sm;

  return (
    <AntHeader className="app-header">
      <Row justify="space-between" align="middle" className={`app-header-row ${isSmallMobile ? 'h-sm' : isMobile ? 'h-md' : 'h-lg'}`}>
        <Col flex="none">
          <Logo size={isSmallMobile ? 'small' : isMobile ? 'small' : 'default'} />
        </Col>
        {!isMobile && (
          <Col flex="auto" className="app-header-right">
            <nav className="app-header-nav">
              {['HOME', 'ABOUT', 'SPACE OUTREACH', 'SPACE EDUCATION', 'CAPACITY BUILDING', 'RESOURCES'].map((label) => (
                <a
                  key={label}
                  href={label === 'HOME' ? '/' : `/${label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`header-nav-item ${resolvedActive === label ? 'active' : ''}`}
                >
                  {label}
                </a>
              ))}
              <Button text="CONTACT US" variant="primary" size={screens.xl ? 'medium' : 'small'} />
            </nav>
          </Col>
        )}
        {isMobile && (
          <Col flex="none">
            <DrawerMenu activeKey={drawerActiveKey} />
          </Col>
        )}
      </Row>
    </AntHeader>
  );
};

export default memo(Header);
