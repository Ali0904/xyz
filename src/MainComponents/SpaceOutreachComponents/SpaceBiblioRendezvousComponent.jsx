import React from 'react';
import { Typography, Card, Row, Col, Layout } from 'antd';
import '../../Styles/SpaceBiblio.css';

const { Title, Text } = Typography;

const SpaceBiblioRendezvousComponent = () => {
  return (
    <Layout className="sb-root">
      <Row className="sb-header" justify="center">
        <Col xs={24} lg={24} xl={23}>
          <Card bordered={false} className="sb-header-card">
            <Title level={2} className="sb-title">Space Biblio Rendezvous</Title>
            <Typography.Text className="sb-underline" aria-hidden="true" />
          </Card>
        </Col>
      </Row>

      <Row className="sb-main" justify="center">
        <Col xs={24} lg={20} xl={18}>
          <Card bordered={false} className="sb-main-card">
            <div className="sb-intro">
              <Text className="sb-intro-text">
                Space Biblio Rendezvous is SERL's comprehensive initiative to bridge the gap between space science literature and practical education, creating a dynamic platform for knowledge exchange and academic discourse.
              </Text>
              <Text className="sb-intro-subtext">
                This program encompasses literature reviews, research discussions, academic collaborations, and the dissemination of cutting-edge space science knowledge through various educational channels.
              </Text>
            </div>

            <div className="sb-features">
              <Title level={4} className="sb-features-title">Program Components</Title>
              <ul className="sb-features-list">
                <li>Space science literature reviews and analysis</li>
                <li>Academic paper discussions and journal clubs</li>
                <li>Research collaboration facilitation</li>
                <li>Knowledge synthesis and dissemination</li>
                <li>Expert-led bibliographic sessions</li>
                <li>Educational resource development and curation</li>
              </ul>
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default SpaceBiblioRendezvousComponent;
