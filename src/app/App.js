import React from 'react';
import { PointsProvider } from '../components/providers/PointsProvider';
import { Wheel } from '../components/Wheel';
import './App.css';

export const App = () => {

  return (
    <div>
      <PointsProvider>
        < Wheel />
      </PointsProvider>
    </div>
  )
}