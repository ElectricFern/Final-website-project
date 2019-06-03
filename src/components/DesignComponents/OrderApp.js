import React, { Component } from 'react';
import FabricCanvas from './FabricCanvas';
import TemplateList from './TemplateList'
import './OrderApp.css';
import {bgList, cloakList, hoodList} from '../../images/templates/templatelist';
import {Col, Tabs, Tab } from 'react-bootstrap';
import {fabric} from 'fabric';

class OrderApp extends Component {

  constructor(props){
    super(props);

    this.state = {
       activeProperty : null
    };
  }

  addToCanvas = (imgElement, property_type, z_Index) => {

    const coords = defineCanvasCoordinates(property_type);

    var imgInstance = new fabric.Image(imgElement, {  
      the_type: property_type,
      zIndex : z_Index,
      left: coords.x,
      top: coords.y,
    });

    this.setState({activeProperty: imgInstance });

  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="row">

            <Col md={6}>
              <Tabs defaultActiveKey={1} justified id="main_tabs">
                <Tab eventKey={1} title="Cloak">

                  <TemplateList 
                    data = {cloakList}
                    property_type= "cloak"
                    zIndex = {2}
                    addToTheCanvas ={this.addToCanvas}
                  />

                </Tab>
                <Tab eventKey={3} title="Hood">

                  <TemplateList 
                    data = {hoodList}
                    property_type= "hood"
                    zIndex = {2}
                    addToTheCanvas ={this.addToCanvas}
                  />

                </Tab>
                <Tab eventKey={4} title="Background">

                  <TemplateList 
                    data = {bgList}
                    property_type= "bg"
                    zIndex = {-9999}
                    addToTheCanvas ={this.addToCanvas}
                  />

                </Tab>
              </Tabs>
            </Col>

            <Col md={6}>

              <FabricCanvas 
                activeProperty = {this.state.activeProperty}
              />

            </Col>

          </div>
        </div>
      </div>
    );
  }
}


function defineCanvasCoordinates(property_type) {
  let x = 0;
  let y = 0;
  
  switch (property_type) {
    case 'cloak':
      x = 50;
      y = 120;
      break;
    case 'hood':
      x = 52;
      y = 10;
      break;
    default:
      break;
  };

  return {x: x, y: y}; 
}

export default OrderApp;
