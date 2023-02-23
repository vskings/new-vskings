import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
};
export default App;
