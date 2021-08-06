import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{color: 'white', backgroundColor:'#4e4d4bb4', padding: '15px 10px', display: 'inline-flex', textAlign:'center', alignItems:'center', justifyContent:'center', borderRadius: '100%', transform: 'translate(-50%, -50%)'}}>{text}</div>;

class SimpleMap extends React.Component {
    static defaultProps = {
      center: {lat: 24.860966, lng: 66.990501},
      zoom: 15
    };
  
    render() {
      return (
         <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent 
            lat={24.860966} 
            lng={66.990501} 
            text={'Karachi'} 
          />
        </GoogleMapReact>
      );
    }
  }

export default SimpleMap;