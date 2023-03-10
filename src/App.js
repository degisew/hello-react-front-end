import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Greeting } from './components/Greeting';

const App = () => (
  <>
    <h1>Rails with React</h1>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </>
);
export default App;
