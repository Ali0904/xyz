import React from 'react';
import { Typography, Card, Select, Row, Col, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ICE2025 from './Showcasing/ICE2025';
import Beaconhouse from './Showcasing/Beaconhouse';
import VCForum2023 from './Showcasing/VCForum2023';
import APTEX2025 from './Showcasing/APTEX2025';
import '../../Styles/Showcasing.css';

const { Title } = Typography;
const { Option } = Select;

const ShowcasingComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'ice2025': 'ICE 2025',
    'beaconhouse': 'Beaconhouse Exhibition',
    'vc-forum-2023': 'VC Forum 2023',
    'aptex2025': 'APTEX 2025'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'ice2025':
        return <ICE2025 />;
      case 'beaconhouse':
        return <Beaconhouse />;
      case 'vc-forum-2023':
        return <VCForum2023 />;
      case 'aptex2025':
        return <APTEX2025 />;
      default:
        return <ICE2025 />;
    }
  };

  return (
    <Layout className="sh-root">
      <Row className="sh-header" justify="center">
        <Col xs={24} lg={20} xl={18}>
          <Title level={1} className="sh-title">Showcasing</Title>
          <div className="sh-select-wrap">
            <Select
              value={selectedEvent}
              onChange={onEventChange}
              size="large"
              className="sh-select"
              dropdownClassName="sh-dropdown"
              suffixIcon={<DownOutlined className="sh-select-suffix" />}
            >
              {availableEvents.map(event => (
                <Option key={event} value={event}>
                  <span className="sh-option-text">{eventTitles[event]}</span>
                </Option>
              ))}
            </Select>
          </div>
          {renderSelectedEvent()}
        </Col>
      </Row>
    </Layout>
  );
};

export default ShowcasingComponent;
