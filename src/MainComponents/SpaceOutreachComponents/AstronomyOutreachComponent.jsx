import React from 'react';
import { Row, Col, Space, Typography, Button, Card, Layout } from 'antd';
import IAO from './AstronomyOutreach/IAO';
import SolarTelescopyVisits from './AstronomyOutreach/SolarTelescopyVisits';
import '../../Styles/AstronomyOutreach.css';

const { Title, Paragraph } = Typography;

const AstronomyOutreachComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const currentEvent = selectedEvent || 'iao';
  const eventButtons = availableEvents || ['iao', 'solar-telescopy-visits'];

  const eventTitles = {
    'iao': 'IAO',
    'solar-telescopy-visits': 'Solar Telescopy Visits'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'iao':
        return <IAO />;
      case 'solar-telescopy-visits':
        return <SolarTelescopyVisits />;
      default:
        return <IAO />;
    }
  };

  return (
    <Layout className="ao-root">
      <Row justify="center">
        <Col xs={24} lg={24} xl={24}>
          <Card bordered={false} className="ao-card">
            <Space direction="vertical" size="large" className="ao-space">
              <div className="ao-header">
                <Title level={1} className="ao-title">Astronomy Outreach</Title>
                <Typography.Text className="ao-underline" aria-hidden="true" />
                <Paragraph className="ao-paragraph">
                  SERL's Astronomy Outreach programs promote astronomical education and public engagement through the International Astronomy Olympiad and specialized solar observation sessions designed to inspire the next generation of astronomers.
                </Paragraph>
                <Space size="small" wrap>
                  {eventButtons.map((event) => (
                    <Button
                      key={event}
                      size="large"
                      type={currentEvent === event ? 'primary' : 'default'}
                      className={currentEvent === event ? 'ao-btn ao-btn-active' : 'ao-btn'}
                      onClick={() => onEventChange && onEventChange(event)}
                    >
                      {eventTitles[event]}
                    </Button>
                  ))}
                </Space>
              </div>

              {renderEventComponent()}
            </Space>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default AstronomyOutreachComponent;
