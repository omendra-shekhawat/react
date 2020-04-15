import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import  Greet from './components/Greet'
// import Welcome from './components/welcome'
// import  Hello from './components/Hello'
// import  Message from './components/message'
// import Counter from './components/counter';
// function App() {
//   return (
//     <div className="App">


//       {/* <Counter></Counter> */}
//       {/* <Greet name="omii" heroName="shaktiman">
//         <p>this is children props</p>
//       </Greet>
//       <Greet name="ravi" heroName="aryaman">
//         <button>Action</button>
//       </Greet>
//       <Greet name="manu" heroName="junior g"></Greet>
//       <Welcome  name="omii" heroName="shaktiman"></Welcome>
//       <Welcome name="ravi" heroName="aryaman"></Welcome>
//       <Welcome  name="manu" heroName="junior g"></Welcome> */}
//       {/* <Hello></Hello> */}


//       {/* <Message ></Message> */}
//     </div>
//   );
// }

// import React, { Component } from 'react'
import Table from './components/crud';

class App extends React.Component {
  render(){
    return(
      <div className="App">

      <Table></Table>
      </div>
    )
  }
}

export default App;
