import React, { Component } from 'react';
import CardSection from './Section/CardSection';
import CarouselPage from './Section/Slider';

class Home extends Component {
    render() { 
        return (
            <div>
                <CarouselPage/>
                <CardSection/>
            </div>
        );
    }
}
 
export default Home;