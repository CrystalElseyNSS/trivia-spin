import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { PointsProvider } from '../providers/PointsProvider';
import { Wheel } from '../components/wheels/Wheel';
import { Titan } from '../components/wheels/Titan';
import { Werner } from '../components/wheels/Werner';
import { USGypsum } from '../components/wheels/USGypsum';
import { Festool } from '../components/wheels/Festool';
import { Univar } from '../components/wheels/Univar';
import { Intex } from '../components/wheels/Intex';
import { Shurtape } from '../components/wheels/Shurtape';
import { ShawFloors } from '../components/wheels/ShawFloors';
import { SherwinNational } from '../components/wheels/SherwinNational';
import './App.css';

export const App = () => {

  return (
    <div>
      <Router>
        <PointsProvider>
          <Switch>
            <Route path="/327752117/:player" >< Wheel /></Route> 
            <Route path="/327752107/:player" >< Titan /></Route> 
            <Route path="/327752057/:player">< Werner /></Route> 
            <Route path="/327752037/:player">< USGypsum /></Route> 
            <Route path="/327751567/:player">< Festool /></Route> 
            <Route path="/327752047/:player">< Univar /></Route> 
            <Route path="/327751977/:player">< Intex /></Route>
            <Route path="/327752017/:player">< Shurtape /></Route>
            <Route path="/327752077/:player">< ShawFloors /></Route>
            <Route path="/328136597/:player">< SherwinNational /></Route>
          </Switch>
        </PointsProvider>
      </Router>
    </div>
  )
}