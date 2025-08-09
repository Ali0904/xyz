import React from 'react';
import { Row, Col, Space, Typography, Button, Card, Layout } from 'antd';
import WorldSpaceWeek2020 from './WorldSpaceWeek/WorldSpaceWeek2020';
import WorldSpaceWeek2021 from './WorldSpaceWeek/WorldSpaceWeek2021';
import WorldSpaceWeek2022 from './WorldSpaceWeek/WorldSpaceWeek2022';
import WorldSpaceWeek2023 from './WorldSpaceWeek/WorldSpaceWeek2023';
import WorldSpaceWeek2024 from './WorldSpaceWeek/WorldSpaceWeek2024';
import '../../Styles/WorldSpaceWeek.css';

const { Title, Paragraph } = Typography;

const WorldSpaceWeekComponents = ({ selectedYear, availableYears, onYearChange }) => {
  const currentYear = selectedYear || '2020';
  const yearButtons = availableYears || ['2020', '2021', '2022', '2023', '2024'];

  const renderYearComponent = () => {
    switch (currentYear) {
      case '2020':
        return <WorldSpaceWeek2020 />;
      case '2021':
        return <WorldSpaceWeek2021 />;
      case '2022':
        return <WorldSpaceWeek2022 />;
      case '2023':
        return <WorldSpaceWeek2023 />;
      case '2024':
        return <WorldSpaceWeek2024 />;
      default:
        return <WorldSpaceWeek2020 />;
    }
  };

  return (
    <Layout className="wsw-root">
      <Row justify="center">
        <Col xs={24} lg={24} xl={24}>
          <Card bordered={false} className="wsw-card">
            <Space direction="vertical" size="large" className="wsw-space">
              <div className="wsw-header">
                <Title level={1} className="wsw-title">World Space Week</Title>
                <Typography.Text className="wsw-underline" aria-hidden="true" />
                <Paragraph className="wsw-paragraph">
                  Annual Celebration Of Space Science And Technology Contributions To Improving Human Conditions. World Space Week Is An International 
                  Celebration Of Science And Technology, And Their Contribution To The Betterment Of The Human Condition.
                </Paragraph>
                <Space size="small">
                  {yearButtons.map((year) => (
                    <Button
                      key={year}
                      size="large"
                      type={currentYear === year ? 'primary' : 'default'}
                      className={currentYear === year ? 'wsw-btn wsw-btn-active' : 'wsw-btn'}
                      onClick={() => onYearChange && onYearChange(year)}
                    >
                      {year}
                    </Button>
                  ))}
                </Space>
              </div>

              {renderYearComponent()}
            </Space>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default WorldSpaceWeekComponents;
