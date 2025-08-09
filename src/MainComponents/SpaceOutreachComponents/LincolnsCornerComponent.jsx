import React from 'react';
import { Row, Col, Space, Typography, Button, Card, Layout } from 'antd';
import HumanSpaceFlightFJWU from './LincolnsCorner/HumanSpaceFlightFJWU';
import HumanSpaceFlightNLP from './LincolnsCorner/HumanSpaceFlightNLP';
import WomenInSpaceFJWU_old from './LincolnsCorner/WomenInSpaceFJWU_old';
import WrightBrothersDayFJWU_new from './LincolnsCorner/WrightBrothersDayFJWU_new';
import '../../Styles/LincolnsCorner.css';

const { Title, Paragraph } = Typography;

const LincolnsCornerComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const currentEvent = selectedEvent || 'human-spaceflight-fjwu';
  const eventButtons = availableEvents || ['human-spaceflight-fjwu', 'human-spaceflight-nlp', 'women-in-space-fjwu', 'wright-brothers-day-fjwu'];

  const eventTitles = {
    'human-spaceflight-fjwu': 'Human Space Flight FJWU',
    'human-spaceflight-nlp': 'Human Space Flight NLP',
    'women-in-space-fjwu': 'Women in Space FJWU',
    'wright-brothers-day-fjwu': 'Wright Brothers Day FJWU'
  };

  const renderEventComponent = () => {
    switch (currentEvent) {
      case 'human-spaceflight-fjwu':
        return <HumanSpaceFlightFJWU />;
      case 'human-spaceflight-nlp':
        return <HumanSpaceFlightNLP />;
      case 'women-in-space-fjwu':
        return <WomenInSpaceFJWU_old />;
      case 'wright-brothers-day-fjwu':
        return <WrightBrothersDayFJWU_new />;
      default:
        return <HumanSpaceFlightFJWU />;
    }
  };

  return (
    <Layout className="lc-root">
      <Row justify="center">
        <Col xs={24} lg={24} xl={24}>
          <Card bordered={false} className="lc-card">
            <Space direction="vertical" size="large" className="lc-space">
              <div className="lc-header">
                <Title level={1} className="lc-title">Lincoln's Corner</Title>
                <Typography.Text className="lc-underline" aria-hidden="true" />
                <Paragraph className="lc-paragraph">
                  SERL's Lincoln's Corner celebrates the spirit of innovation and exploration through specialized programs focusing on human spaceflight, aviation history, and the pioneering achievements of women in space science and technology.
                </Paragraph>
                <Space size="small" wrap>
                  {eventButtons.map((event) => (
                    <Button
                      key={event}
                      size="large"
                      type={currentEvent === event ? 'primary' : 'default'}
                      className={currentEvent === event ? 'lc-btn lc-btn-active' : 'lc-btn'}
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

export default LincolnsCornerComponent;
