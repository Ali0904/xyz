import React, { useState, memo } from 'react';
import { Drawer, Button, Menu, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Styles/Drawer.css';

const { useBreakpoint } = Grid;

const menuItems = [
  { key: 'HOME', label: 'Home', path: '/' },
  { key: 'ABOUT', label: 'About', path: '/about' },
  { key: 'SPACE_OUTREACH', label: 'Space Outreach', path: '/space-outreach' },
  { key: 'SPACE_EDUCATION', label: 'Space Education', path: '/space-education' },
  { key: 'CAPACITY_BUILDING', label: 'Capacity Building', path: '/capacity-building' },
  { key: 'RESOURCES', label: 'Resources', path: '/resources' },
  { key: 'CONTACT_US', label: 'Contact Us', noHighlight: true }
];

const mapPathToKey = (pathname) => {
  if (pathname === '/' || pathname.startsWith('/home')) return 'HOME';
  if (pathname.startsWith('/about')) return 'ABOUT';
  if (pathname.startsWith('/space-outreach')) return 'SPACE_OUTREACH';
  if (pathname.startsWith('/space-education')) return 'SPACE_EDUCATION';
  if (pathname.startsWith('/capacity-building')) return 'CAPACITY_BUILDING';
  if (pathname.startsWith('/resources')) return 'RESOURCES';
  return 'HOME';
};

const DrawerMenu = ({ activeKey }) => {
  const screens = useBreakpoint();
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const selectedKey = activeKey || mapPathToKey(location.pathname);

  const handleSelect = (key) => {
    const item = menuItems.find((i) => i.key === key);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        width={240}
        rootClassName="app-drawer"
      >
        <Menu
          mode="vertical"
          selectedKeys={[selectedKey]}
          className="app-drawer-menu"
          onClick={({ key }) => {
            if (key === 'CONTACT_US') {
              setVisible(false);
              return;
            }
            handleSelect(key);
            setVisible(false);
          }}
          items={menuItems
            .filter((item) => item.key !== 'CONTACT_US')
            .map(({ key, label }) => ({ key, label }))}
        />
        <Button
          type="primary"
          size={screens.xl ? 'middle' : 'small'}
          className="app-drawer-contact-btn"
          onClick={() => {
            setVisible(false);
            handleSelect('CONTACT_US');
          }}
        >
          CONTACT US
        </Button>
      </Drawer>
      <Button
        type="text"
        icon={<MenuOutlined className="app-drawer-trigger-icon" />}
        onClick={() => setVisible(true)}
        className="app-drawer-trigger"
      />
    </>
  );
};

export default memo(DrawerMenu);

