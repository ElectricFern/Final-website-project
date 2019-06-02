import React, { Component } from 'react';
import FabricCanvas from './components/FabricCanvas';
import TemplateList from './components/TemplateList'
import {bglist, cloaklist, hoodlist} from './images/templates/templatelist';
import {Col, Tabs, Tab } from 'react-bootstrap';
import './OrderApp.css';
import {fabric} from 'fabric';

class OrderApp extends Component {

  constructor(props){
    super(props);

    this.state = {
       activeProperty : null
    };
  }

  addToCanvas = (imgElement, property_type, z_Index) => {

    var imgInstance = new fabric.Image(imgElement, {  
      the_type: property_type,
      zIndex : z_Index,
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
                <Tab eventKey={1} title="cloak">

                  <TemplateList 
                    data = {cloaklist}
                    property_type= "cloak"
                    zIndex = {2}
                    addtocanvas ={this.addToCanvas}
                  />

                </Tab>
                <Tab eventKey={3} title="hood">

                  <TemplateList 
                    data = {hoodlist}
                    property_type= "hood"
                    zIndex = {2}
                    addtocanvas ={this.addToCanvas}
                  />

                </Tab>
                <Tab eventKey={4} title="Background">

                  <TemplateList 
                    data = {bglist}
                    property_type= "bg"
                    zIndex = {-9999}
                    addtocanvas ={this.addToCanvas}
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

export default OrderApp;
