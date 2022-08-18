import React from 'react';
import './App.css';
import {Navbar} from "./components";
import { Contactme, Footer, Header, Whatidid, Whatido, Whatiuse } from "./containers";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Whatido />
      <Whatidid />
      <Whatiuse />
      <Contactme />
      <Footer />
      
    </div>
  );
}

export default App;
