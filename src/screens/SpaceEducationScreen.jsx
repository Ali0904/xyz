import React from 'react';
import { Row, Col } from 'antd';
import SpaceOutreachSection from '../MainComponents/SpaceOutreachComponents/SpaceOutreachSection';

const SpaceEducationScreen = () => {
  return (
    <Row gutter={[0, 0]}>
      <Col span={24}>
        <SpaceOutreachSection />
      </Col>
    </Row>
  );
};

export default SpaceEducationScreen;
