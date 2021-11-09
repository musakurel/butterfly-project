import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation'
import BeerList from './components/Beer/List'
import CreateBeer from './components/Beer/Create'

import './app.css';

export default () => <Router>
    <header>
      <Navigation/>
    </header>
    <main>
      <Routes>
        <Route path="beers" element={<BeerList/>}/>
        <Route path="create" element={<CreateBeer/>}/>
      </Routes>
    </main>
</Router>
