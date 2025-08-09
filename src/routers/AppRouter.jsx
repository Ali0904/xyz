import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Layout from '../components/layouts/layout';
import Home from '../screens/Home';

const About = lazy(() => import('../screens/About'));
const SpaceEducationScreen = lazy(() => import('../screens/SpaceEducationScreen'));

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spin />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/space-outreach" element={<SpaceEducationScreen />} />
            {/* Add more routes here as needed */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
