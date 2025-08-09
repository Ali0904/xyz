import React from 'react';
import { Row, Col, Space, Typography, Button, Card, Layout } from 'antd';
import SpaceFilmFestival from './SpaceMedia/SpaceFilmFestival';
import JahanAurBhiHain from './SpaceMedia/JahanAurBhiHain';
import '../../Styles/SpaceMedia.css';

const { Title, Paragraph } = Typography;

const SpaceMediaComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const currentEvent = selectedEvent || 'space-film-festival';
  const eventButtons = availableEvents || ['space-film-festival', 'jahan-aur-bhi-hain'];

  const eventTitles = {
    'space-film-festival': 'Space Film Festival',
    'jahan-aur-bhi-hain': 'Jahan Aur Bhi Hain'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'space-film-festival':
        return <SpaceFilmFestival />;
      case 'jahan-aur-bhi-hain':
        return <JahanAurBhiHain />;
      default:
        return <SpaceFilmFestival />;
    }
  };

  return (
    <Layout className="sm-root">
      <Row justify="center">
        <Col xs={24} lg={24} xl={24}>
          <Card bordered={false} className="sm-card">
            <Space direction="vertical" size="large" className="sm-space">
              <div className="sm-header">
                <Title level={1} className="sm-title">Space Media</Title>
                <Typography.Text className="sm-underline" aria-hidden="true" />
                <Paragraph className="sm-paragraph">
                  SERL produces and promotes space-themed media content including documentaries, films, and educational programs that showcase Pakistan's space achievements and inspire public interest in space science and exploration.
                </Paragraph>
                <Space size="small" wrap>
                  {eventButtons.map((event) => (
                    <Button
                      key={event}
                      size="large"
                      type={currentEvent === event ? 'primary' : 'default'}
                      className={currentEvent === event ? 'sm-btn sm-btn-active' : 'sm-btn'}
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

export default SpaceMediaComponent;
