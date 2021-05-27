import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { PointsProvider } from '../providers/PointsProvider';
import { Wheel } from '../components/wheels/Wheel';
import './App.css';

export const App = () => {

  return (
    <div>
      <Router>
        <PointsProvider>
          <Switch>
            <Route path="/" exact>< Wheel /></Route> 
          </Switch>
        </PointsProvider>
      </Router>
    </div>
  )
}