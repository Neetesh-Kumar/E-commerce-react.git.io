import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import DesignFour from './Pages/DesignFour';
import DesignOne from './Pages/DesignOne';
import DesignThree from './Pages/DesignThree';
import DesignTwo from './Pages/DesignTwo';
import HomePage from './Pages/HomePage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/designOne' component={DesignOne}/>
        <Route path='/designTwo' component={DesignTwo}/>
        <Route path='/designThree' component={DesignThree}/>
        <Route path='/designFour' component={DesignFour}/>
        <Route path='/' component={HomePage}/>
      </Switch>
    );
  }
}

export default Routes;