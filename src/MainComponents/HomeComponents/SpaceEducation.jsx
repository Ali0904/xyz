import React from 'react';
import { Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const isMobile = !useBreakpoint().lg;
  const carouselRef = React.useRef(null);

  const images = [
    {
      src: require('../../assets/images/slider1.png'),
      alt: 'Space Research Background'
    },
    {
      src: require('../../assets/images/slider2.png'),
      alt: 'Space Education Main'
    },
    {
      src: require('../../assets/images/slider3.png'),
      alt: 'SERL Organization'
    }
  ];


  return (
    <Row style={{ width: '100%', margin: 0, padding: isMobile ? '10px 20px' : '20px 40px', position: 'relative', background: 'transparent' }} justify="center">
      <Col span={24} style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Row justify="start" gutter={[0, 60]}>
          <Col xs={24} lg={23} style={{ textAlign: 'left', paddingLeft: isMobile ? 10 : 40 }}>
            <Title style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: isMobile ? '2.2rem' : '2.8rem', marginBottom: 20 }}>
              Space <span style={{ color: '#1890FF' }}>Education</span>
            </Title>
            <Paragraph style={{ color: '#D1D5DB', fontSize: isMobile ? '1.1rem' : '1.2rem', lineHeight: 1.7, textAlign: 'justify', marginBottom: 30 }}>
              SERL addresses the gap in space awareness and education at national level by implementing interactive, creative and innovative pedagogical methods on the grass root level. Through its dynamic STEM and STEAM initiatives including workshops, teacher trainings, specialized schools, competitions, seminars, webinars, and national summits, SERL attracts a diverse community of students, professionals and educators.
            </Paragraph>
          </Col>
        </Row>

        <Row justify="start" gutter={[0, 40]}>
          <Col xs={24} lg={24} style={{ paddingLeft: isMobile ? 10 : 40, paddingRight: isMobile ? 10 : 40 }}>
            <Carousel
              ref={carouselRef}
              autoplay
              autoplaySpeed={3000}
              dots={false}
              speed={1000}
              effect="scroll"
              slidesToShow={isMobile ? 1 : 3}
              slidesToScroll={1}
              pauseOnHover
              centerMode
            >
              {images.map((image, index) => (
                <Card
                  key={index}
                  hoverable
                  bordered={false}
                  style={{
                    overflow: 'hidden',
                    borderRadius: 0,
                    padding: 0,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  bodyStyle={{ padding: 0, height: '100%' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                </Card>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row style={{ marginTop: 50 }}>
          <Col xs={24} lg={20} style={{ paddingLeft: isMobile ? 10 : 40 }}>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: '#F59E0B', borderColor: '#F59E0B', color: '#000000', fontWeight: 'bold', borderRadius: 6 }}
            >
              For More Details
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SpaceOutreach;