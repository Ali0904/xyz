import React from 'react';
import { Typography, Card, Select, Row, Col, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SpaceDebrisHeadstart from './SchoolVisits/SpaceDebrisHeadstart';
import GCULahore from './SchoolVisits/GCULahore';
import InventixSummit from './SchoolVisits/InventixSummit';
import '../../Styles/SchoolVisits.css';

const { Title } = Typography;
const { Option } = Select;

const SchoolVisitsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'space-debris-headstart': 'Space Debris Headstart',
    'gcu-lahore': 'GCU Lahore',
    'inventix-summit': 'Inventix Summit'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'space-debris-headstart':
        return <SpaceDebrisHeadstart />;
      case 'gcu-lahore':
        return <GCULahore />;
      case 'inventix-summit':
        return <InventixSummit />;
      default:
        return <SpaceDebrisHeadstart />;
    }
  };

  return (
    <Layout className="sv-root">
      <Row className="sv-header" justify="center">
        <Col xs={24} lg={20} xl={18}>
          <Title level={1} className="sv-title">School Visits</Title>
          <div className="sv-select-wrap">
            <Select
              value={selectedEvent}
              onChange={onEventChange}
              size="large"
              className="sv-select"
              dropdownClassName="sv-dropdown"
              suffixIcon={<DownOutlined className="sv-select-suffix" />}
            >
              {availableEvents.map(event => (
                <Option key={event} value={event}>
                  <span className="sv-option-text">{eventTitles[event]}</span>
                </Option>
              ))}
            </Select>
          </div>
        </Col>
      </Row>

      <Row className="sv-content" justify="center">
        <Col xs={24} lg={20} xl={18}>
          {renderSelectedEvent()}
        </Col>
      </Row>
    </Layout>
  );
};

export default SchoolVisitsComponent;
