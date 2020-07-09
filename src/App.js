import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './index.css'


function App() {
  return (
    <div>
      <div className="index"><Header /></div>
      <div className="index"><Body /></div>
    </div>
  );
}

export default App;
