import React from 'react';
import { Typography, Card, Select, Row, Col, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import LtGenMohsinQureshi from './HostingVisits/LtGenMohsinQureshi';
import ProfAhsanIqbal from './HostingVisits/ProfAhsanIqbal';
import HEC from './HostingVisits/HEC';
import PakChinaResearchCenter from './HostingVisits/PakChinaResearchCenter';
import NASTP from './HostingVisits/NASTP';
import '../../Styles/HostingVisits.css';

const { Title } = Typography;
const { Option } = Select;

const HostingVisitsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'lt-gen-mohsin-qureshi': 'Lt Gen Mohsin Qureshi',
    'prof-ahsan-iqbal': 'Prof Ahsan Iqbal',
    'hec': 'HEC',
    'pak-china-research-center': 'Pak China Research Center',
    'nastp': 'NASTP'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'lt-gen-mohsin-qureshi':
        return <LtGenMohsinQureshi />;
      case 'prof-ahsan-iqbal':
        return <ProfAhsanIqbal />;
      case 'hec':
        return <HEC />;
      case 'pak-china-research-center':
        return <PakChinaResearchCenter />;
      case 'nastp':
        return <NASTP />;
      default:
        return <LtGenMohsinQureshi />;
    }
  };

  return (
    <Layout className="hv-root">
      <Row className="hv-header" justify="center">
        <Col xs={24} lg={24} xl={23}>
          <Card bordered={false} className="hv-header-card">
            <Title level={2} className="hv-title">Hosting Visits</Title>
            <Typography.Text className="hv-underline" aria-hidden="true" />
            <div className="hv-select-wrap">
              <Select
                value={selectedEvent}
                onChange={onEventChange}
                size="large"
                className="hv-select"
                dropdownClassName="hv-dropdown"
                suffixIcon={<DownOutlined className="hv-select-suffix" />}
              >
                {availableEvents.map(event => (
                  <Option key={event} value={event}>
                    {eventTitles[event]}
                  </Option>
                ))}
              </Select>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="hv-content">
        <Col span={24}>
          {renderSelectedEvent()}
        </Col>
      </Row>
    </Layout>
  );
};

export default HostingVisitsComponent;
