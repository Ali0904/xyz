import React from 'react';
import { Typography, Card, Image, List, Avatar, Carousel, Layout, Space, Row, Col } from 'antd';
import { ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import activity1 from '../../../assets/images/activity1.png';
import activity2 from '../../../assets/images/activity2.png';
import activity3 from '../../../assets/images/activity3.png';
import spaceOutreach01 from '../../../assets/images/SpaceOutreach01.jpg';
import spaceOutreach03 from '../../../assets/images/SpaceOutreach03.jpg';
import spaceOutreach07 from '../../../assets/images/SpaceOutreach07.jpg';
import '../../../Styles/Forum.SpaceForum2020.css';

const { Title, Text } = Typography;

const SpaceForum2020 = () => {
  const heroImages = [
    { src: activity1, alt: 'Space Forum 2020 Activity 1' },
    { src: activity2, alt: 'Space Forum 2020 Activity 2' },
    { src: activity3, alt: 'Space Forum 2020 Activity 3' }
  ];

  const spaceOutreachImages = [
    { src: spaceOutreach01, alt: 'Space Outreach 01' },
    { src: spaceOutreach03, alt: 'Space Outreach 03' },
    { src: spaceOutreach07, alt: 'Space Outreach 07' }
  ];

  const activities = [
    { title: 'Public Lectures And Seminars Featuring Leading Space Scientists And Researchers', icon: <ClockCircleOutlined /> },
    { title: 'School Competitions And Activities Designed To Engage Students With Space Science', icon: <BookOutlined /> },
    { title: 'Astronomy Observation Sessions With Professional Telescopes And Expert Guidance', icon: <StarOutlined /> },
    { title: 'Workshops And Hands-On Activities Exploring Space Technology And Principles', icon: <ExperimentOutlined /> }
  ];

  return (
    <Layout className="sf20-root">
      <Card bordered={false} className="sf20-card">
        <Title level={3} className="sf20-title">World Space Week 2020</Title>

        <Card bordered={false} className="sf20-carousel-card">
          <Card bordered={false} className="sf20-carousel-inner">
            <Carousel autoplay autoplaySpeed={3000} dots dotPosition="bottom">
              {spaceOutreachImages.map((image, index) => (
                <Card key={index} bordered={false} className="sf20-slide-card">
                  <Image src={image.src} alt={image.alt} preview={false} className="sf20-slide-img" />
                </Card>
              ))}
            </Carousel>
          </Card>
        </Card>

        <Text className="sf20-desc">
          The 2020 Theme "Satellites Improve Life" Celebrates The Contribution Of Satellites To Human Development And Welfare. Learn How Satellites Help Us With Communication, Navigation, Weather Forecasting, Resource Management, And Disaster Response.
        </Text>
      </Card>

      <Space direction="vertical" size={8} className="sf20-activities-wrap">
        <Title level={2} className="sf20-activities-title">Activities</Title>
        <Typography.Text className="sf20-underline" aria-hidden="true" />
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item className="sf20-list-item">
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} className="sf20-activity-avatar" size="large" />}
                title={<Text className="sf20-activity-text">{item.title}</Text>}
              />
            </List.Item>
          )}
        />
      </Space>

      <Row className="sf20-gallery" justify="center" gutter={[15, 0]}>
        {heroImages.map((image, index) => (
          <Col key={index} xs={24} md={8}>
            <Card bordered={false} className="sf20-photo-card">
              <Image src={image.src} alt={image.alt} preview={false} className="sf20-photo-img" />
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default SpaceForum2020;
