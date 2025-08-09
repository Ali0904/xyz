import React from 'react';
import { Typography, Card, Select, Row, Col, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SpaceForum2020 from './Forum/SpaceForum2020';
import SpaceForum2021 from './Forum/SpaceForum2021';
import CareersInSpaceForum from './Forum/CareersInSpaceForum';
import STEPForum from './Forum/STEPForum';
import Forum360STEM from './Forum/Forum360STEM';
import SpaceForum2022 from './Forum/SpaceForum2022';
import '../../Styles/Forum.css';

const { Title } = Typography;
const { Option } = Select;

const ForumComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'space-forum-2020': 'Space Forum 2020',
    'space-forum-2021': 'Space Forum 2021',
    'careers-in-space-forum': 'Careers in Space Forum',
    'step-forum': 'STEP Forum',
    'forum-360-stem': 'Forum 360 STEM',
    'space-forum-2022': 'Space Forum 2022'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'space-forum-2020':
        return <SpaceForum2020 />;
      case 'space-forum-2021':
        return <SpaceForum2021 />;
      case 'careers-in-space-forum':
        return <CareersInSpaceForum />;
      case 'step-forum':
        return <STEPForum />;
      case 'forum-360-stem':
        return <Forum360STEM />;
      case 'space-forum-2022':
        return <SpaceForum2022 />;
      default:
        return <SpaceForum2020 />;
    }
  };

  return (
    <Layout className="fo-root">
      <Row className="fo-header" justify="center">
        <Col xs={24} lg={24} xl={23}>
          <Card bordered={false} className="fo-header-card">
            <Title level={2} className="fo-title">Forum</Title>
            <Typography.Text className="fo-underline" aria-hidden="true" />
            <Select
              value={selectedEvent}
              onChange={onEventChange}
              size="large"
              placeholder="Select Program"
              className="fo-select"
              suffixIcon={<DownOutlined className="fo-select-suffix" />}
            >
              {availableEvents.map(event => (
                <Option key={event} value={event}>
                  {eventTitles[event]}
                </Option>
              ))}
            </Select>
          </Card>
        </Col>
      </Row>

      <Row className="fo-content">
        <Col span={24}>
          {selectedEvent && renderSelectedEvent()}
        </Col>
      </Row>
    </Layout>
  );
};

export default ForumComponent;
