import React from 'react';
import { Layout, Row, Col, Typography, Grid, Button, Carousel, Card } from 'antd';
import '../../Styles/Home.SpaceOutreach.css';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const carouselRef = React.useRef(null);
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true);

  const images = [
    { src: require('../../assets/images/slider1.png'), alt: 'Space Research Background' },
    { src: require('../../assets/images/slider2.png'), alt: 'Space Education Main' },
    { src: require('../../assets/images/slider3.png'), alt: 'SERL Organization' }
  ];

  return (
    <Layout className="soh-container">
      <Row className="soh-inner" justify="center">
        <Col span={24}>
          <Row justify="start" className="soh-top-row">
            <Col xs={24} lg={24} className="soh-text-col">
              <Title level={2} className="soh-title">
                Space <span className="soh-title-accent">Outreach</span>
              </Title>
              <Paragraph className="soh-paragraph">
                The Space Education Research Lab (SERL) is committed to promote space science & technology by engaging school,
                college & university students, educators, professionals, and communities through nationwide outreach, hands-on learning,
                and educational support. With the national-level engagement and powerful outreach, SERL strives to nurture space-literate
                and future-ready society prepared to lead and innovate in the evolving space sector.
              </Paragraph>
            </Col>
          </Row>

          <Row justify="start">
            <Col xs={24} lg={24} className="soh-carousel-col">
              <Card bordered={false} className="soh-carousel-wrap" onMouseEnter={() => setAutoplayEnabled(false)} onMouseLeave={() => setAutoplayEnabled(true)}>
                <Carousel
                  ref={carouselRef}
                  autoplay={autoplayEnabled}
                  autoplaySpeed={3000}
                  dots={false}
                  infinite
                  speed={1000}
                  effect="scroll"
                  slidesToShow={isMobile ? 1 : 3}
                  slidesToScroll={1}
                  pauseOnHover={true}
                  centerMode={false}
                >
                  {images.map((image, index) => (
                    <Card key={index} bordered={false} className="soh-slide-pad">
                      <Card bordered={false} className="soh-slide">
                        <img src={image.src} alt={image.alt} className="soh-slide-img" />
                      </Card>
                    </Card>
                  ))}
                </Carousel>
              </Card>
            </Col>
          </Row>

          <Row className="soh-bottom-row">
            <Col xs={24} lg={20} className="soh-bottom-col">
              <Button type="primary" size="large" className="soh-more-btn">
                For More Details
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default SpaceOutreach;
