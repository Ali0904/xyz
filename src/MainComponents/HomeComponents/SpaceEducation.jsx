import React from 'react';
import { Row, Col, Typography, Grid, Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const carouselRef = React.useRef(null);
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true);

  // Images from assets folder
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
    <div style={{ 
      backgroundColor: 'transparent',
      padding: isMobile ? '10px 20px' : '20px 40px',
      position: 'relative'
    }}>
      {/* Starry background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px, 150px 150px, 200px 200px',
        pointerEvents: 'none'
      }} />  
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Row 1: Text Content */}
        <Row justify="start" style={{ marginBottom: '60px' }}>
          <Col xs={24} lg={23} style={{ textAlign: 'left', paddingLeft: isMobile ? '10px' : '40px' }}>
            <Title 
              level={2}
              style={{ 
                color: '#FFFFFF',
                fontSize: isMobile ? '2.2rem' : '2.8rem',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}
            >
              Space <span style={{ color: '#1890FF' }}>Education</span>
            </Title>
            <Paragraph 
              style={{ 
                color: '#D1D5DB',
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                lineHeight: '1.7',
                marginBottom: '30px',
                textAlign: 'justify'
              }}
            >
              SERL addresses the gap in space awareness and education at national level by implementing interactive, creative and innovative pedagogical methods on the grass root level. Through its dynamic STEM and STEAM initiatives including workshops, teacher trainings, specialized schools, competitions, seminars, webinars, and national summits, SERL attracts a diverse community of students, professionals and educators.
            </Paragraph>
          </Col>
        </Row>

        {/* Row 2: Continuous Sliding Images Carousel */}
 <Row justify="start">
<Col 
  xs={24} 
  lg={24} 
  style={{ 
    paddingLeft: isMobile ? '10px' : '40px', 
    paddingRight: isMobile ? '10px' : '40px' 
  }}
>
 <div style={{ paddingRight: isMobile ? '0px' : '0px' }}>
      <div 
        style={{ position: 'relative' }}
        onMouseEnter={() => setAutoplayEnabled(false)}
        onMouseLeave={() => setAutoplayEnabled(true)}
      >
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
            <div key={index} style={{ padding: '0 24px' }}> {/* Increased gap from 16px to 24px */}
              <div style={{
                height: '250px',
                borderRadius: '0px', // Non-curved rectangle
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                background: 'rgba(255, 255, 255, 0.05)', // Transparent background
                margin: '0 8px' // Additional margin for more separation
              }}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.parentElement.style.transform = 'translateY(-5px)';
                    e.target.parentElement.style.boxShadow = '0 12px 32px rgba(0,0,0,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.parentElement.style.transform = 'translateY(0)';
                    e.target.parentElement.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>

        {/* Arrows unchanged */}
        {/* Arrows unchanged */}
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={() => carouselRef.current?.prev()}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translate(-50px, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: '#ccbb00ff',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            fontSize: '20px',
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '1';
            e.target.style.backgroundColor = 'rgba(0,0,0,0.9)';
            e.target.style.transform = 'translate(-50px, -50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '0.8';
            e.target.style.backgroundColor = 'rgba(0,0,0,0.7)';
            e.target.style.transform = 'translate(-50px, -50%) scale(1)';
          }}
        />
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={() => carouselRef.current?.next()}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translate(50px, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: '#ccbb00ff',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            fontSize: '20px',
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '1';
            e.target.style.backgroundColor = 'rgba(0,0,0,0.9)';
            e.target.style.transform = 'translate(50px, -50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '0.8';
            e.target.style.backgroundColor = 'rgba(0,0,0,0.7)';
            e.target.style.transform = 'translate(50px, -50%) scale(1)';
          }}
        />
      </div>
    </div>
  </Col>
</Row>

{/* Row 3: Button under slider, aligned with text */}  
<Row style={{ marginTop: '50px' }}>
  <Col xs={24} lg={20} style={{ paddingLeft: isMobile ? '10px' : '40px' }}>
    <Button 
      type="primary"
      size="large"
      style={{ 
        backgroundColor: '#F59E0B',
        borderColor: '#F59E0B',
        color: '#000000',
        fontWeight: 'bold',
        borderRadius: '6px'
      }}
    >
      For More Details
    </Button>
  </Col>
</Row>

      </div>
    </div>
  );
};

export default SpaceOutreach;
