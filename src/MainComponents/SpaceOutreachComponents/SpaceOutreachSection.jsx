import React, { useState, useEffect, memo } from 'react';
import { Layout, Row, Col, Typography, Card, Select, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import WorldSpaceWeekComponents from './WorldSpaceWeekComponents';
import SpaceFestivalsComponent from './SpaceFestivalsComponent';
import SpaceMediaComponent from './SpaceMediaComponent';
import LincolnsCornerComponent from './LincolnsCornerComponent';
import AstronomyOutreachComponent from './AstronomyOutreachComponent';
import SpaceBiblioRendezvousComponent from './SpaceBiblioRendezvousComponent';
import TalksSessionsComponent from './TalksSessionsComponent';
import HostingVisitsComponent from './HostingVisitsComponent';
import ShowcasingComponent from './ShowcasingComponent';
import SchoolVisitsComponent from './SchoolVisitsComponent';
import ForumComponent from './ForumComponent';
import '../../Styles/SpaceOutreachSection.css';

const { Title, Text } = Typography;
const { Option } = Select;

const SpaceOutreachSection = () => {
  const programData = {
    'world-space-week': { title: 'World Space Week', years: ['2020', '2021', '2022', '2023', '2024'] },
    'space-festivals': { title: 'Space Festivals', events: ['lahore-science-mela', 'steam-mela', 'space-expo', 'pakistan-learning-festival'] },
    'space-media': { title: 'Space Media', events: ['space-film-festival', 'jahan-aur-bhi-hain'] },
    'lincolns-corner': { title: "Lincoln's Corner", events: ['human-spaceflight-fjwu', 'human-spaceflight-nlp', 'women-in-space-fjwu', 'wright-brothers-day-fjwu'] },
    'astronomy-outreach': { title: 'Astronomy Outreach', events: ['iao', 'solar-telescopy-visits'] },
    'space-biblio-rendezvous': { title: 'Space Biblio Rendezvous', isStandalone: true },
    'talks-sessions': { title: 'Talks & Sessions', events: ['stemx-webinar', 'the-space-talk-podcast', 'space-tech-edu-landscape', 'cyber-threats-aerospace', 'space-data-emergency', 'tech-nexus-security', 'stem-for-space-vu', 'space-tech-sdgs', 'women-in-space-contributions', 'women-in-space-sector', 'floating-satellite-platform', 'careers-in-space', 'telescope-peep-sky', 'stem-panel-symposium-bna', 'academia-industry-uow', 'iac-baku-research', 'ai-future-panel-nust', 'space-sci-comm-case-study', 'space-talk-reza-shirazi', 'gnss-stemx', 'space-tech-rendezvous'] },
    'hosting-visits': { title: 'Hosting Visits', events: ['hec', 'hosting-visits-list', 'lt-gen-mohsin-qureshi', 'nastp', 'pak-china-research-center', 'prof-ahsan-iqbal'] },
    'showcasing': { title: 'Showcasing', events: ['ice2025', 'beaconhouse', 'vc-forum-2023', 'aptex2025'] },
    'school-visits': { title: 'School Visits', events: ['space-debris-headstart', 'gcu-lahore', 'inventix-summit'] },
    'forum': { title: 'Forum', events: ['space-forum-2020', 'space-forum-2021', 'careers-in-space-forum', 'step-forum', 'forum-360-stem', 'space-forum-2022'] }
  };

  const [selectedProgram, setSelectedProgram] = useState('world-space-week');
  const [selectedYear, setSelectedYear] = useState(programData['world-space-week'].years[0]);
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleProgramChange = (value) => {
    setSelectedProgram(value);
    if (value === 'world-space-week') {
      const firstYear = programData[value].years[0];
      setSelectedYear(firstYear);
      setSelectedEvent('');
    } else if (programData[value].isStandalone) {
      setSelectedEvent('');
      setSelectedYear('');
    } else {
      const firstEvent = programData[value].events[0];
      setSelectedEvent(firstEvent);
      setSelectedYear('');
    }
  };

  useEffect(() => {
    if (selectedProgram !== 'world-space-week' && !programData[selectedProgram].isStandalone && !selectedEvent) {
      const firstEvent = programData[selectedProgram].events[0];
      setSelectedEvent(firstEvent);
    }
  }, [selectedProgram, selectedEvent]);

  const renderSelectedProgram = () => {
    switch (selectedProgram) {
      case 'world-space-week':
        return <WorldSpaceWeekComponents selectedYear={selectedYear} availableYears={programData[selectedProgram].years} onYearChange={setSelectedYear} />;
      case 'space-festivals':
        return <SpaceFestivalsComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'space-media':
        return <SpaceMediaComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'lincolns-corner':
        return <LincolnsCornerComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'astronomy-outreach':
        return <AstronomyOutreachComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'space-biblio-rendezvous':
        return <SpaceBiblioRendezvousComponent />;
      case 'talks-sessions':
        return <TalksSessionsComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'hosting-visits':
        return <HostingVisitsComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'showcasing':
        return <ShowcasingComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'school-visits':
        return <SchoolVisitsComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      case 'forum':
        return <ForumComponent selectedEvent={selectedEvent} availableEvents={programData[selectedProgram].events} onEventChange={setSelectedEvent} />;
      default:
        return <WorldSpaceWeekComponents selectedYear={selectedYear} availableYears={programData['world-space-week'].years} onYearChange={setSelectedYear} />;
    }
  };

  return (
    <Layout className="so-root">
      {/* Hero Section */}
      <Card bordered={false} className="so-hero-card">
        <Row justify="center" align="middle" className="so-hero-center">
          <Col className="so-hero-col">
            <Title level={1} className="so-hero-title">SPACE OUTREACH</Title>
          </Col>
        </Row>
      </Card>

      {/* Navigate To Program Section */}
      <Row justify="center" className="so-program-row">
        <Col xs={24} lg={24} xl={23}>
          <Card bordered={false} className="so-program-card">
            <Space direction="vertical" size={0} className="so-program-space">
              <Title level={3} className="so-program-title">Navigate To Program</Title>
              <Text className="so-program-underline" aria-hidden="true" />
              <Select
                value={selectedProgram}
                onChange={handleProgramChange}
                size="large"
                className="so-program-select"
                suffixIcon={<DownOutlined className="so-program-select-suffix" />}
              >
                <Option value="world-space-week">World Space Week</Option>
                <Option value="space-festivals">Space Festivals</Option>
                <Option value="space-media">Space Media</Option>
                <Option value="lincolns-corner">Lincoln's Corner</Option>
                <Option value="astronomy-outreach">Astronomy Outreach</Option>
                <Option value="space-biblio-rendezvous">Space Biblio Rendezvous</Option>
                <Option value="talks-sessions">Talks & Sessions</Option>
                <Option value="hosting-visits">Hosting Visits</Option>
                <Option value="showcasing">Showcasing</Option>
                <Option value="school-visits">School Visits</Option>
                <Option value="forum">Forum</Option>
              </Select>
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Dynamic Content */}
      <Row className="so-dynamic-row">
        <Col span={24}>
          {renderSelectedProgram()}
        </Col>
      </Row>
    </Layout>
  );
};

export default memo(SpaceOutreachSection);
