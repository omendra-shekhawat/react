import React from 'react';
import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/refsDemo';
import ParentRef from './components/parentRef';

function App() {
  return (
    <div className="App">
      {/* <RefsDemo></RefsDemo> */}
      <ParentRef></ParentRef>
    </div>
  );
}

export default App;
