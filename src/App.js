import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import NavbarPage from './components/topNavigation';
import './App.css'
import './components/Pages/Section/custom.css'
import Footer from './components/Footer';

class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <NavbarPage />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;