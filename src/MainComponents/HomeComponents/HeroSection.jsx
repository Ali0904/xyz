
import React from "react";
import { Row, Col, Typography, Button, Card, Space, Grid } from "antd";
import mainbg from "../../assets/images/mainbg.jpg";
import "../../Styles/Home.css";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
  const isMobile = !Grid.useBreakpoint().lg;
  return (
    <Card
      bodyStyle={{ padding: 0 }}
      className="hero-bg-card"
      bordered={false}
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        className="hero-row"
        gutter={[24, 24]}
      >
        <Col  xs={24} lg={12}>
     
              <Title className="hero-title">
              Space Education Research Lab
            </Title>
            <Title className="big-title"  >
              SPACE
            </Title>
            <Paragraph className="hero-desc" strong >
              EDUCATION | AWARENESS | OUTREACH
            </Paragraph>
            <Paragraph className="hero-para">
              Inspiring Space Innovation Through STEM Learning
            </Paragraph>
   
       
  ``
        </Col>
       <Col xs={24} lg={12}>
  <Space
    direction="vertical"
    size={isMobile ? 12 : 24}
    style={{
      width: "100%",
      alignItems: "flex-start", // ✅ Correct
      justifyContent: "flex-start", // optional
      display: "flex"
    }}
  >
    <Card
      className="hero-desc-card"
      bodyStyle={{ padding: 20 }}
      bordered={false}
    >
      <Paragraph className="hero-desc-paragraph">
        Space Education Research Lab (SERL), is one of the labs of National
        Center Of GIS & Space Applications (NCGSA) that primarily focuses to
        develop innovative and sustainable interactive learning methods and
        strategies for space science and technology awareness, education and
        popularization.
      </Paragraph>
    </Card>
    <Button
      type="default"
      size="large"
      className="hero-readmore-btn"
      style={{backgroundColor:"#F59E0B "}}
    >
      Read More
    </Button>
  </Space>
</Col>

      </Row>
    </Card>
  );
};

export default HeroSection;
