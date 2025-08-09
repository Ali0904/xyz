import React from 'react';
import { Row, Col, Space, Typography, Button, Card, Layout } from 'antd';
import LahoreScienceMela from './SpaceFestivals/LahoreScienceMela';
import STEAMMela from './SpaceFestivals/STEAMMela';
import SpaceExpo from './SpaceFestivals/SpaceExpo';
import PakistanLearningFestival from './SpaceFestivals/PakistanLearningFestival';
import '../../Styles/SpaceFestivals.css';

const { Title, Paragraph } = Typography;

const SpaceFestivalsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const currentEvent = selectedEvent || 'lahore-science-mela';
  const eventButtons = availableEvents || ['lahore-science-mela', 'steam-mela', 'space-expo', 'pakistan-learning-festival'];

  const eventTitles = {
    'lahore-science-mela': 'Lahore Science Mela',
    'steam-mela': 'STEAM Mela',
    'space-expo': 'Space Expo',
    'pakistan-learning-festival': 'Pakistan Learning Festival'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'lahore-science-mela':
        return <LahoreScienceMela />;
      case 'steam-mela':
        return <STEAMMela />;
      case 'space-expo':
        return <SpaceExpo />;
      case 'pakistan-learning-festival':
        return <PakistanLearningFestival />;
      default:
        return <LahoreScienceMela />;
    }
  };

  return (
    <Layout className="sf-root">
      <Row justify="center">
        <Col xs={24} lg={24} xl={24}>
          <Card bordered={false} className="sf-card">
            <Space direction="vertical" size="large" className="sf-space">
              <div className="sf-header">
                <Title level={1} className="sf-title">Space Festivals</Title>
                <Typography.Text className="sf-underline" aria-hidden="true" />
                <Paragraph className="sf-paragraph">
                  SERL organizes and participates in various space festivals and educational events across Pakistan, promoting space science education and inspiring the next generation of space scientists and engineers.
                </Paragraph>
                <Space size="small" wrap>
                  {eventButtons.map((event) => (
                    <Button
                      key={event}
                      size="large"
                      type={currentEvent === event ? 'primary' : 'default'}
                      className={currentEvent === event ? 'sf-btn sf-btn-active' : 'sf-btn'}
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

export default SpaceFestivalsComponent;
