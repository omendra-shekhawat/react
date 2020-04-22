import React from 'react';
import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/refsDemo';
import ParentRef from './components/parentRef';
import ComponentA from './components/compoA';
// import HighCompo from './components/highCompo';
// import BlogPost from './components/blogCompo';


function App() {
  return (
    <div className="App">
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentRef></ParentRef> */}
      <ComponentA></ComponentA>     
    </div>
  );
}

export default App;
