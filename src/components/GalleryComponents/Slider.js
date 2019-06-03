import React, { Component } from 'react';
import './Slider.css';
import Card from './Card';
import data from '../../data/data';
import { MDBBtn } from "mdbreact";

class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
          properties: data.properties,
          property: data.properties[6]
        }
    }
    
    nextImage = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
        property: data.properties[newIndex]
    })
    }
    
    prevImage = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
        property: data.properties[newIndex]
    })
    }
    
    render() {
    const {properties, property} = this.state;
    return (
        <div className="sliderApp">     
            <div className="page">
                <section>
                    <h1>Renegade Gallery</h1>
                </section>
                <MDBBtn floating color="black"
                onClick={() => this.prevImage()} 
                disabled={property.index === 0}>Prev
                </MDBBtn>
                <MDBBtn floating color="black"
                onClick={() => this.nextImage()} 
                disabled={property.index === data.properties.length-1}>Next
                </MDBBtn>
                <div className="col">
                  <div className={`cards-slider active-slide-${property.index}`}>
                    <div className="cards-slider-wrapper" style={{
                      'transform': `translateX(-${property.index*(100/properties.length)}%)`
                    }}>
                      {
                        properties.map(property => <Card key={property._id} property={property} />)
                      }
                    </div>
                  </div>
                </div>
    
            </div>
          </div>
        );
    }
     
}

export default Slider;