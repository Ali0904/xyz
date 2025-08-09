import React from 'react';  
import { Layout } from 'antd';
import VisionSection from './VisionSection';
import ContributionSection from './ContributionSection';
import MissionSection from './MissionSection';
import ModusOperandiSection from './ModusOperandiSection';
import SpaceDomainsSection from './SpaceDomainsSection';
import AwardsSection from './AwardsSection';
import '../../Styles/AboutCoreContent.css';

const AboutCoreContent = () => {
  return (
    <Layout className="acc-root">
      <Layout className="acc-overlay" />
      <Layout className="acc-content">
        <VisionSection />
        <ContributionSection />
        <MissionSection />
        <ModusOperandiSection />
        <SpaceDomainsSection />
        <AwardsSection />
      </Layout>
    </Layout>
  );
};

export default AboutCoreContent;
