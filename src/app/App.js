import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { PointsProvider } from '../components/providers/PointsProvider';
import { Wheel } from '../components/Wheel';
import './App.css';

export const App = () => {
  return (
    <div>
      <Router>
        <PointsProvider>
          <Switch>
            <Route path="/:player">
              < Wheel />
            </Route>
          </Switch>
        </PointsProvider>
      </Router>
    </div>
  )
}