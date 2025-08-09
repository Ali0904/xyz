import React from 'react';
import { Typography, Card, Image, List, Avatar, Carousel, Layout, Space, Row, Col } from 'antd';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';
import spaceOutreach01 from '../../../assets/images/SpaceOutreach01.jpg';
import spaceOutreach03 from '../../../assets/images/SpaceOutreach03.jpg';
import spaceOutreach07 from '../../../assets/images/SpaceOutreach07.jpg';
import '../../../Styles/SpaceMedia.SpaceFilmFestival.css';

const { Title, Text } = Typography;

const SpaceFilmFestival = () => {
  const heroImages = [
    { src: activity1, alt: 'Space Film Festival Activity 1' },
    { src: activity2, alt: 'Space Film Festival Activity 2' },
    { src: activity3, alt: 'Space Film Festival Activity 3' }
  ];

  const spaceOutreachImages = [
    { src: spaceOutreach01, alt: 'Space Outreach 01' },
    { src: spaceOutreach03, alt: 'Space Outreach 03' },
    { src: spaceOutreach07, alt: 'Space Outreach 07' }
  ];

  const activities = [
    { title: 'Documentary Screenings Featuring Space Science And Exploration Themes', icon: <ClockCircleOutlined /> },
    { title: 'Educational Film Presentations And Panel Discussions With Filmmakers', icon: <BookOutlined /> },
    { title: 'Interactive Workshops On Space Cinematography And Science Communication', icon: <StarOutlined /> },
    { title: 'Student Film Competitions And Creative Space-Themed Projects', icon: <ExperimentOutlined /> }
  ];

  return (
    <Layout className="sff-root">
      <Card bordered={false} className="sff-card">
        <Title level={3} className="sff-title">Space Film Festival</Title>

        <Card bordered={false} className="sff-carousel-card">
          <Card bordered={false} className="sff-carousel-inner">
            <Carousel autoplay autoplaySpeed={3000} dots dotPosition="bottom">
              {spaceOutreachImages.map((image, index) => (
                <Card key={index} bordered={false} className="sff-slide-card">
                  <Image src={image.src} alt={image.alt} preview={false} className="sff-slide-img" />
                </Card>
              ))}
            </Carousel>
          </Card>
        </Card>

        <Text className="sff-desc">
          SERL hosts annual Space Film Festivals that celebrate the intersection of cinema and space science, featuring documentaries, educational films, and creative works that inspire audiences about space exploration.
        </Text>
      </Card>

      <Space direction="vertical" size={8} className="sff-activities-wrap">
        <Title level={2} className="sff-activities-title">Activities</Title>
        <Typography.Text className="sff-underline" aria-hidden="true" />
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item className="sff-list-item">
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} className="sff-activity-avatar" size="large" />}
                title={<Text className="sff-activity-text">{item.title}</Text>}
              />
            </List.Item>
          )}
        />
      </Space>

      <Row className="sff-gallery" justify="center" gutter={[15, 0]}>
        {heroImages.map((image, index) => (
          <Col key={index} xs={24} md={8}>
            <Card bordered={false} className="sff-photo-card">
              <Image src={image.src} alt={image.alt} preview={false} className="sff-photo-img" />
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default SpaceFilmFestival;
