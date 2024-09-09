import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import SkillsPage from './landing_page/skills/SkillsPage';
import EducationPage from './landing_page/education/EducationPage';
import CertificationPage from './landing_page/certifications/CertificationPage';
import ProjectsPage from './landing_page/projects/ProjectsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <HomePage/>
    <Routes>
        <Route path="/skills" element={<SkillsPage/>}/>
      <Route path="/education" element={<EducationPage/>}/>
      <Route path="/certificates" element={<CertificationPage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>
);


