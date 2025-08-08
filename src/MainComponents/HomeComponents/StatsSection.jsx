import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Typography, Grid, Card } from 'antd';
import { 
  TeamOutlined, 
  BankOutlined, 
  GlobalOutlined, 
  TrophyOutlined, 
  EyeOutlined 
} from '@ant-design/icons';

import '../../Styles/Home.css'
const { Title } = Typography;
const { useBreakpoint } = Grid;

const StatsSection = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const sectionRef = useRef(null);

  const stats = [
    { 
      number: 200000, 
      suffix: '+', 
      label: 'Students Engaged',
      icon: TeamOutlined,
      color: '#FFFFFF' // White neon
    },
    { 
      number: 100, 
      suffix: '+', 
      label: 'Universities Collaboration',
      icon: BankOutlined,
      color: '#FFFFFF' // White neon
    },
    { 
      number: 30, 
      suffix: '+', 
      label: 'International Participation',
      icon: GlobalOutlined,
      color: '#FFFFFF' // White neon
    },
    { 
      number: 1500, 
      suffix: '+', 
      label: 'Schools & Colleges Participation',
      icon: TrophyOutlined,
      color: '#FFFFFF' // White neon
    },
    { 
      number: 2, 
      suffix: 'M+', 
      label: 'Media Impression',
      icon: EyeOutlined,
      color: '#FFFFFF' // White neon
    }
  ];

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
  if (!sectionRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        stats.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedStats(prev => [...prev, index]);
          }, index * 200);
        });
        observer.disconnect(); // Stop observing after animation
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, [isVisible]);

  // Animated Counter Component with smooth easing
  const AnimatedCounter = ({ targetNumber, suffix, isActive, duration = 2500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isActive) return;

      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Enhanced bounce easing for smoother animation
        const easeOutBounce = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const currentCount = Math.floor(easeOutBounce * targetNumber);
        setCount(currentCount);

        if (now < endTime) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(targetNumber);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(updateCounter);
      }, 300); // Delay counter start for better visual flow

      return () => clearTimeout(timer);
    }, [isActive, targetNumber, duration]);

    const formatNumber = (num) => {
      return num.toLocaleString();
    };

    return (
      <span>
        <span style={{ color: '#FFFFFF', fontFamily: 'Arial, sans-serif' }}>
          {formatNumber(count)}
        </span>
        <span style={{ color: '#FFC107', fontFamily: 'Arial, sans-serif' }}>
          {suffix}
        </span>
      </span>
    );
  };

  return (
    <div 
      ref={sectionRef}
      style={{ 
        justifyContent: "center",
        display: "flex",
        backgroundColor: 'transparent',
        padding: isMobile ? '30px 10px' : '10px 10px',
        minHeight: isMobile ? '250px' : '300px'
      }}
    >
      <Row 
      className='stats-cont'
        gutter={[24, 24]} 
        justify="center"
        align="middle"
        style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          width: '100%'
        }}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const isStatVisible = animatedStats.includes(index);
          
          return (
            <Col 
              key={index}
              xs={24} 
              sm={12} 
              md={8}
              lg={4}
              xl={4}
              style={{ 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card
                bordered={false}
                style={{
                  background: 'transparent',
                  borderRadius: '16px',
                  width: isMobile ? '160px' : '250px',
                  height: isMobile ? '160px' : '180px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid rgba(187, 200, 3, 1)`,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isStatVisible 
                    ? 'translateY(0) scale(1)' 
                    : 'translateY(30px) scale(0.95)',
                  opacity: isStatVisible ? 1 : 0,
                  cursor: 'pointer',
                }}
                bodyStyle={{ 
                  padding: isMobile ? "16px" : "10px",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 8px 20px rgba(255, 255, 255, 0.15)`;
                  e.currentTarget.style.border = `1px solid rgba(187, 200, 3, 1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 2px 8px rgba(0, 0, 0, 0.1)`;
                  e.currentTarget.style.border = `1px solid rgba(187, 200, 3, 1)`;
                }}
              >
                <div
                  style={{
                    marginBottom: '16px',
                    transform: isStatVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.5s ease',
                    transitionDelay: `${index * 200 + 100}ms`
                  }}
                >
                  <IconComponent 
                    style={{
                      fontSize: isMobile ? '2.5rem' : '3rem',
                      color: stat.color,
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <Title
                  level={2}
                  style={{
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '0.5px',
                    margin: 0
                  }}
                >
                  <AnimatedCounter 
                    targetNumber={stat.number} 
                    suffix={stat.suffix}
                    isActive={isStatVisible}
                  />
                </Title>
                
                <Title
                  level={5}
                  style={{
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.85)',
                    margin: 0,
                    marginTop: '8px',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.4',
                    textAlign: 'center'
                  }}
                >
                  {stat.label}
                </Title>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default StatsSection;
