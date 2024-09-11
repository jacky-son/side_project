import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
//import './App.css';
import Button from '@mui/material/Button';
import Navigation from "./components/nav";
import Selector from "./components/selector"
import RoutesMap from "./RoutesMap";
import "./assets/css/reset.css";
import "./assets/css/common.css";
import SampleLayout from "./samples/SampleLayout";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  // const [message, setMessage] = useState("");
 
  //   useEffect(() => {
  //       fetch('/api/hello')
  //           .then(response => response.text())
  //           .then(message => {
  //               setMessage(message);
  //           });
  //   },[])
  // return (
  //   <div className="App">
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1 className="App-title">{message}</h1>
  //     </header> */}
  //     {/* <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //       <Button variant="contained" color="primary">Hello World</Button>
  //     </p> */}
  //     {/* <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a> */}
  //     <Navigation />
  //     <Selector label = "이름" />
  //     <Selector label = "연락처" />
      
  //   </div>
  // );

  return <RoutesMap />;
  //return <SampleLayout />;
}

export default App;
