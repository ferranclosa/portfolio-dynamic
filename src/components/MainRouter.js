import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLanding from 'pages/MainLanding';
import About from 'pages/About';
import Work from 'pages/Work';
import Skills from 'pages/Skills';
import Contact from 'pages/Contact';
import Navbar from './Navbar';
import NotImplemented from 'pages/NotImplemented';


const MainRouter = () => {

  return (
    <div>
    <Router>
      <Navbar language = "en"/>
        <Routes>
          <Route exact path={'/main/en'} element={<MainLanding language="en" />} />
          <Route exact path={'/main/ca'} element={<MainLanding language="ca"  />} />
          <Route exact path={'/main/sp'} element={<MainLanding language="sp"  />} />
          <Route exact path={'/main/fr'} element={<MainLanding language="fr"  />} />
         

          <Route exact path={'/personal/sp'} element={<About language="sp"  />} />
          <Route exact path={'/personal/en'} element={<About language="en"  />} />
          <Route exact path={'/personal/ca'} element={<About language="ca"  />} />
          <Route exact path={'/personal/fr'} element={<About language="fr"  />} />

          <Route exact path={'/profesional/sp'} element={<Work language="sp"  />} />
          <Route exact path={'/profesional/en'} element={<Work language="en"  />} />
          <Route exact path={'/profesional/ca'} element={<Work language="ca"  />} />
          <Route exact path={'/profesional/fr'} element={<Work language="fr"  />} />

          <Route exact path={'/contact/sp'} element={<Contact language="sp"  />} />
          <Route exact path={'/contact/en'} element={<Contact language="en"  />} />
          <Route exact path={'/contact/ca'} element={<Contact language="ca"  />} />
          <Route exact path={'/contact/fr'} element={<Contact language="fr"  />} />

          <Route exact path={'/skills/sp'} element={<Skills language="sp"  />} />
          <Route exact path={'/skills/en'} element={<Skills language="en"  />} />
          <Route exact path={'/skills/ca'} element={<Skills language="ca"  />} />
          <Route exact path={'/skills/fr'} element={<Skills language="fr"  />} />



          <Route element={ <NotImplemented  />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MainRouter; 